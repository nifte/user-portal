import { PrismaClient } from '@prisma/client'
import { users } from './data'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const main = async () => {
	await prisma.user.deleteMany()
	console.log('Emptied user table')

	for (let i = 0; i < users.length; i++) {
		await prisma.user.create({
			data: {
				...users[i],
				passwordHash: await bcrypt.hash('12345', 10)
			}
		})
	}
	console.log('Added user data')
}

main()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})