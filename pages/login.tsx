import { useState } from 'react'
import { login, LoginData } from 'lib/helpers'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'
import FormInput from 'components/FormInput'
import StyledLink from 'components/StyledLink'
import Button from 'components/Button'

const LoginPage = () => {
	const router = useRouter()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data: LoginData = { email, password } // TODO: Validate these
		const { success, json } = await login(data)
		if (success) router.push('/profile')
		else alert(json.error || 'Something went wrong')
	}

	return (
		<Layout>
			<div className="min-h-full flex flex-col justify-center py-6 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img
						className="mx-auto h-12 w-auto"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
						alt="Workflow"
					/>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Log in to your account
					</h2>
				</div>
				<div className="mt-6 -mx-4 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-6 px-4 shadow sm:rounded-xl sm:px-8">
						<form className="space-y-4" onSubmit={handleSubmit}>
							<FormInput
								name="email"
								type="email"
								label="Email"
								placeholder="jdoe@example.com"
								required
								stateHook={setEmail}
							/>
							<FormInput
								name="password"
								type="password"
								label="Password"
								placeholder="*******"
								required
								stateHook={setPassword}
							/>
							<div className="pt-3">
								<Button type="submit" style="primary">Log In</Button>
							</div>
						</form>
					</div>
				</div>
				<div className="flex justify-center mt-4">
					<span>Don't have an account? <StyledLink href="signup">Sign Up</StyledLink></span>
				</div>
			</div>
		</Layout>
	)
}

export default LoginPage