import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ProfileMenu from './ProfileMenu'
import useSession from 'lib/useSession'
import LinkButton from 'components/LinkButton'

type NavItemProps = {
	href: string
	label: string
	active: boolean
}

const NavbarItem = (props: NavItemProps) => {
	const classes = {
		active: "border-indigo-500 text-gray-900 inline-flex items-center px-2 pt-1 border-b-2 font-medium",
		inactive: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-2 pt-1 border-b-2 font-medium"
	}

	return (
		<Link href={props.href}>
			<a className={props.active ? classes.active : classes.inactive}>
				{props.label}
			</a>
		</Link>
	)
}

const NavMenuItem = (props: NavItemProps) => {
	const classes = {
		active: "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium",
		inactive: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
	}

	return (
		<Link href={props.href}>
			<Disclosure.Button
				as="a"
				className={props.active ? classes.active : classes.inactive}
			>
				{props.label}
			</Disclosure.Button>
		</Link>
	)
}

const Navbar = () => {
	const router = useRouter()
	const path = router.pathname
	const { session } = useSession()

	return (
		<Disclosure as="nav" className="bg-white shadow">
			{({ open }) => (
				<>
					<div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex-shrink-0 flex items-center">
									<img
										className="block h-8 w-auto"
										src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
										alt="Workflow"
									/>
								</div>
								<div className="hidden sm:ml-6 sm:flex sm:space-x-6">
									<NavbarItem href="/" label="Home" active={path === '/'} />
									<NavbarItem href="profile" label="Profile" active={path === '/profile'} />
									{session && session.isAdmin && (
										<NavbarItem href="admin" label="Admin" active={path === '/admin'} />
									)}
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{session ? <ProfileMenu /> : (
									<div className="hidden sm:flex gap-x-2">
										<LinkButton href="login" style="secondary">Log In</LinkButton>
										<LinkButton href="signup" style="primary">Sign Up</LinkButton>
									</div>
								)}
							</div>
						</div>
					</div>
					<Disclosure.Panel className="sm:hidden">
						<div className="pt-2 pb-4 space-y-1">
							<NavMenuItem href="/" label="Home" active={path === '/'} />
							<NavMenuItem href="profile" label="Profile" active={path === '/profile'} />
							{session && session.isAdmin && (
								<NavMenuItem href="admin" label="Admin" active={path === '/admin'} />
							)}
						</div>
						{!session && (
							<div className="flex justify-center gap-x-2 pb-3">
								<LinkButton href="login" style="secondary">Log In</LinkButton>
								<LinkButton href="signup" style="primary">Sign Up</LinkButton>
							</div>
						)}
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export default Navbar