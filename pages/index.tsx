import Layout from 'components/Layout'

const IndexPage = () => {
	return (
		<Layout>
			<div className="relative">
				<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
				<div className="w-full">
					<div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden -mx-4 sm:mx-0">
						<div className="absolute inset-0">
							<img
								className="h-full w-full object-cover"
								src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
								alt="People working on laptops"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
						</div>
						<div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
							<h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
								<span className="block text-white">A secure user portal</span>
								<span className="block text-indigo-200">built with Prisma</span>
							</h1>
							<p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
								This is just a rough draft, and there are still many things to be polished, but the core functionality is there. Create an account and log in to view your profile, log into the Admin account to see the Admin panel.
							</p>
							<div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
								<div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
									<a
										href="login"
										className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-50 hover:bg-indigo-100 sm:px-8 whitespace-nowrap"
									>
										Log In
									</a>
									<a
										href="signup"
										className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8 whitespace-nowrap"
									>
										Create an Account
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default IndexPage