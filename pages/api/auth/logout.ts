import { NextApiHandler } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'

const LogoutHandler: NextApiHandler = async (req, res) => {
	// Destroy session
	req.session.destroy()
	res.json({ success: 'Logged out' })
}

export default withIronSessionApiRoute(LogoutHandler, sessionOptions)