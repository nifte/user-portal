import { ReactNode } from 'react'
import Link from 'next/link'

type LinkButtonProps = {
	style: 'primary' | 'secondary' | 'white'
	href: string
	children?: ReactNode
}

const LinkButton = (props: LinkButtonProps) => {
	const classes = {
		primary: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
		secondary: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
		white: "inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
	}

	return (
		<Link href={props.href}>
			<a className={classes[props.style]}>
				{props.children}
			</a>
		</Link>
	)
}

export default LinkButton