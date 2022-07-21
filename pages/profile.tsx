import ErrorBanner from 'components/ErrorBanner'
import Layout from 'components/Layout'
import useSession from 'lib/useSession'

const ProfilePage = () => {
	const { session } = useSession()

	if (!session) return (
		<Layout>
			<ErrorBanner type="warning" message="You aren't signed in." />
		</Layout>
	)

	return (
		<Layout>
			<div className="bg-white shadow overflow-hidden sm:rounded-lg -mx-4 sm:mx-0">
				<div className="flex items-center justify-start space-x-3 px-4 py-5 sm:px-6">
					<span className="inline-flex flex-shrink-0 items-center justify-center h-14 w-14 rounded-full bg-gray-400">
						<span className="text-xl font-medium leading-none text-white">
							{session.firstName.charAt(0) + session.lastName.charAt(0)}
						</span>
					</span>
					<div>
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Profile Information
						</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500">
							These are your personal details about your account
						</p>
					</div>
				</div>
				<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
					<dl className="sm:divide-y sm:divide-gray-200">
						<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Full Name</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{session.firstName} {session.lastName}
							</dd>
						</div>
						<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Email Address</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{session.email}
							</dd>
						</div>
						<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Role</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{session.isAdmin ? 'Admin' : 'User'}
							</dd>
						</div>
						<div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">ID</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
								{session.id}
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</Layout>
	)
}

export default ProfilePage