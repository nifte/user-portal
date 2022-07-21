import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { logout } from 'lib/helpers'
import { useRouter } from 'next/router'
import useSession from 'lib/useSession'

const ProfileMenu = () => {
	const router = useRouter()
	const { session } = useSession()

	const handleLogout = async () => {
		const { success, json } = await logout()
		if (success) router.push('/')
		else alert(json.error || 'Something went wrong')
	}

	return (
		<Menu as="div" className="relative">
			<div>
				<Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
					<span className="sr-only">Open user menu</span>
					<span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-400">
						<span className="text-sm font-medium leading-none text-white">
							{session ? session.firstName.charAt(0) + session.lastName.charAt(0) : '?'}
						</span>
					</span>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					{session && (
						<Menu.Item disabled>
							<span className="block px-4 py-2 text-sm text-gray-700 overflow-ellipsis">
								{session.firstName} {session.lastName}
							</span>
						</Menu.Item>
					)}
					<Menu.Item>
						{({ active }) => (
							<a
								onClick={handleLogout}
								className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700 cursor-pointer`}
							>
								Log Out
							</a>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default ProfileMenu