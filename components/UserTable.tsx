type User = {
	firstName: string
	lastName: string
	email: string
	isAdmin: boolean
}

type TableProps = {
	users: User[]
}

const Table = ({ users }: TableProps) => {
	return (
		<div className="-mx-4 overflow-x-auto">
			<div className="inline-block min-w-full py-2 align-middle sm:px-4">
				<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
					<table className="min-w-full divide-y divide-gray-300">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
									Name
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Email
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Role
								</th>
							</tr>
						</thead>
						<tbody className="bg-white">
							{users.map((user, i) => (
								<tr key={user.email} className={i % 2 === 0 ? undefined : 'bg-gray-50'}>
									<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
										{user.firstName} {user.lastName}
									</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{user.email}
									</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										{user.isAdmin ? 'Admin' : 'User'}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Table