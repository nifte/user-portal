import { NextApiHandler } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import prisma from 'lib/prisma'
import bcrypt from 'bcrypt'

const GetUsersHandler: NextApiHandler = async (req, res) => {
	const userSession = req.session.user

	// Get all users (Admin only)
	if (req.method === 'GET') {
		if (userSession) {
			if (userSession.isAdmin) {
				// Show all users
				const users = await prisma.user.findMany({
					select: {
						id: true,
						firstName: true,
						lastName: true,
						email: true,
						isAdmin: true
					}
				})
				res.json(users)
			} else {
				// User is not an Admin
				res.status(403).json({ error: 'Permission denied' })
			}
		} else {
			// User is not logged in
			res.status(401).json({ error: 'You are not logged in' })
		}
	}

	// Create a new user
	if (req.method === 'POST') {
		const { firstName, lastName, email, password } = req.body // TODO: Validate these
		if (firstName && lastName && email && password) {
			const alreadyExists = await prisma.user.findUnique({
				where: { email: req.body.email }
			})
			if (!alreadyExists) {
				// Add the user to the database
				const hashedPassword = await bcrypt.hash(req.body.password, 10)
				await prisma.user.create({
					data: {
						firstName,
						lastName,
						email,
						passwordHash: hashedPassword
					}
				}).catch(e => {
					console.error(e)
					res.status(500).json({ error: 'Unexpected database error' })
				}).finally(() => {
					res.json({ success: 'User created' })
				})
			} else {
				// Email already exists in database
				res.status(409).json({ error: 'User already exists' })
			}
		} else {
			// Missing one or more parameters
			res.status(400).json({ error: 'Missing parameters' })
		}
	}

	// Update a user (Self and Admin only)
	if (req.method === 'PATCH') {
		if (userSession) {
			const { id, firstName, lastName, email } = req.body // TODO: Validate these
			if (id && firstName && lastName && email) {
				if (userSession.id === id || userSession.isAdmin) {
					const userExists = await prisma.user.findUnique({
						where: { id }
					})
					if (userExists) {
						// Update the user
						await prisma.user.update({
							where: { id },
							data: {
								firstName,
								lastName,
								email
							}
						}).catch(e => {
							console.error(e)
							res.status(500).json({ error: 'Unexpected database error' })
						}).finally(() => {
							// Log out if Self
							if (userSession.id === id) req.session.destroy()
							res.json({ success: 'User updated' })
						})
					} else {
						// ID not found in database
						res.status(404).json({ error: 'User not found' })
					}
				} else {
					// User is not Self or Admin
					res.status(403).json({ error: 'Permission denied' })
				}
			} else {
				// Missing one or more parameters
				res.status(400).json({ error: 'Missing parameters' })
			}
		} else {
			// User is not logged in
			res.status(401).json({ error: 'You are not logged in' })
		}
	}

	// Delete a user (Admin only)
	if (req.method === 'DELETE') {
		if (userSession) {
			if (userSession.isAdmin) {
				const { id } = req.body // TODO: Validate these
				if (id) {
					const userExists = await prisma.user.findUnique({
						where: { id }
					})
					if (userExists) {
						// Delete the user
						await prisma.user.delete({
							where: { id }
						})
						res.json({ success: 'User deleted' })
					} else {
						// ID not found in database
						res.status(404).json({ error: 'User not found' })
					}
				} else {
					// Missing id parameter
					res.status(400).json({ error: 'Missing parameters' })
				}
			} else {
				// User is not an Admin
				res.status(403).json({ error: 'Permission denied' })
			}
		} else {
			// User is not logged in
			res.status(401).json({ error: 'You are not logged in' })
		}
	}
}

export default withIronSessionApiRoute(GetUsersHandler, sessionOptions)