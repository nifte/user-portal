import { mutate } from 'swr'

export type LoginData = {
	email: string
	password: string
}

export type SignupData = {
	firstName: string
	lastName: string
	email: string
	password: string
}

export const login = async (data: LoginData) => {
	const response = await fetch('/api/auth/login', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	mutate('/api/session')
	return {
		success: response.ok,
		json: await response.json()
	}
}

export const signup = async (data: SignupData) => {
	const response = await fetch('/api/users', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
	return {
		success: response.ok,
		json: await response.json()
	}
}

export const logout = async () => {
	const response = await fetch('/api/auth/logout', {
		headers: {
			'Accept': 'application/json',
		}
	})
	mutate('/api/session')
	return {
		success: response.ok,
		json: await response.json()
	}
}

export const fetchUsers = async () => {
	const response = await fetch('/api/users', {
		headers: {
			'Accept': 'application/json',
		}
	})
	return {
		success: response.ok,
		json: await response.json()
	}
}