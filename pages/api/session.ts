import { NextApiHandler } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'

export type Session = {
	id: string,
	firstName: string,
	lastName: string,
	email: string,
	isAdmin: boolean
}

const SessionHandler: NextApiHandler = async (req, res) => {
	const user = req.session.user
	if (user) {
		// User is logged in, show session info
		const { id, firstName, lastName, email, isAdmin } = user
		const data: Session = {
			id,
			firstName,
			lastName,
			email,
			isAdmin
		}
		res.json(data)
	} else {
		// User is not logged in
		res.status(401).json({ error: 'You are not logged in' })
	}
}

export default withIronSessionApiRoute(SessionHandler, sessionOptions)