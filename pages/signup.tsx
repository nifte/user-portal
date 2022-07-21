import { useState } from 'react'
import { signup, SignupData } from 'lib/helpers'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'
import FormInput from 'components/FormInput'
import Button from 'components/Button'
import StyledLink from 'components/StyledLink'

const SignupPage = () => {
	const router = useRouter()
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [password2, setPassword2] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (password === password2) {
			const data: SignupData = { firstName, lastName, email, password } // TODO: Validate these
			const { success, json } = await signup(data)
			if (success) {
				alert('Account created successfully')
				router.push('/login')
			} else alert(json.error || 'Something went wrong')
		} else {
			alert('Your passwords do not match')
		}
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
						Create a new account
					</h2>
				</div>
				<div className="mt-6 -mx-4 sm:mx-auto sm:w-full sm:max-w-md">
					<div className="bg-white py-6 px-4 shadow sm:rounded-xl sm:px-8">
						<form className="space-y-3" onSubmit={handleSubmit}>
							<FormInput
								name="firstName"
								type="text"
								label="First Name"
								placeholder="John"
								required
								stateHook={setFirstName}
							/>
							<FormInput
								name="lastName"
								type="text"
								label="Last Name"
								placeholder="Doe"
								required
								stateHook={setLastName}
							/>
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
							<FormInput
								name="password2"
								type="password"
								label="Confirm Password"
								placeholder="*******"
								required
								stateHook={setPassword2}
							/>
							<div className="pt-3">
								<Button type="submit" style="primary">Create Account</Button>
							</div>
						</form>
					</div>
				</div>
				<div className="flex justify-center mt-4">
					<span>Already have an account? <StyledLink href="login">Log In</StyledLink></span>
				</div>
			</div>
		</Layout>
	)
}

export default SignupPage