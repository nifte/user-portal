import { ReactNode } from 'react'

type ButtonProps = {
	style: 'primary' | 'secondary' | 'white'
	onClick?: () => void
	children?: ReactNode
	type?: 'button' | 'submit' | 'reset'
}

const Button = (props: ButtonProps) => {
	const classes = {
		primary: "inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full",
		secondary: "inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full",
		white: "inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
	}

	return (
		<button
			type={props.type || 'button'}
			className={classes[props.style]}
			onClick={props.onClick || null}
		>
			{props.children}
		</button>
	)
}

export default Button