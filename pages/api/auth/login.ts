import { NextApiHandler } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import prisma from 'lib/prisma'
import bcrypt from 'bcrypt'

const LoginHandler: NextApiHandler = async (req, res) => {
	if (req.method === 'POST') {
		const { email, password } = req.body // TODO: Validate these
		if (email && password) {
			const user = await prisma.user.findUnique({
				where: { email: req.body.email }
			})
			if (user) {
				const passwordIsValid = await bcrypt.compare(password, user.passwordHash)
				if (passwordIsValid) {
					// Password is correct, store user in session
					req.session.user = user
					await req.session.save()
					res.json({ success: `Logged in as ${user.email}` })
				} else {
					// Password is incorrect
					res.status(403).json({ error: 'Incorrect password' })
				}
			} else {
				// Email not found in database
				res.status(404).json({ error: 'User not found' })
			}
		} else {
			// Missing one or more parameters
			res.status(400).json({ error: 'Missing parameters' })
		}
	} else {
		// Wrong HTTP method used
		res.status(405).json({ error: 'HTTP method not allowed' })
	}
}

export default withIronSessionApiRoute(LoginHandler, sessionOptions)