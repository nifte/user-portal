import { IronSessionOptions } from 'iron-session'
import { User } from '@prisma/client'

export const sessionOptions: IronSessionOptions = {
	password: 'long_secret_cookie_password_for_encryption', // This would normally be an environment variable
	cookieName: 'session',
	cookieOptions: {
		secure: process.env.NODE_ENV === 'production'
	}
}

declare module 'iron-session' {
	interface IronSessionData {
		user?: User
	}
}