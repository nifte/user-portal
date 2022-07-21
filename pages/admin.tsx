import { useEffect, useState } from 'react'
import { fetchUsers } from 'lib/helpers'
import Layout from 'components/Layout'
import useSession from 'lib/useSession'
import UserTable from 'components/UserTable'
import Button from 'components/Button'
import ErrorBanner from 'components/ErrorBanner'

const AdminPage = () => {
	const { session } = useSession()
	const [users, setUsers] = useState([])

	useEffect(() => {
		updateUsers()
	}, [])

	const updateUsers = async () => {
		const { success, json } = await fetchUsers()
		if (success) setUsers(json)
	}

	if (!session) return (
		<Layout>
			<ErrorBanner type="warning" message="You aren't signed in." />
		</Layout>
	)

	if (!session.isAdmin) return (
		<Layout>
			<ErrorBanner type="error" message="You don't have permission to view this." />
		</Layout>
	)

	return (
		<Layout>
			<div className="flex items-center justify-between mb-4">
				<div className="mr-3">
					<h1 className="text-xl font-semibold text-gray-900">Admin Panel</h1>
					<p className="mt-1 text-sm text-gray-700">
						Here is a list of all registered users including their name, email, and role.
					</p>
				</div>
				<div className="flex-shrink">
					<Button style="white" onClick={updateUsers}>Refresh</Button>
				</div>
			</div>
			<UserTable users={users} />
		</Layout>
	)
}

export default AdminPage