import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface StyledLinkProps extends LinkProps {
	children?: ReactNode
}

const StyledLink = (props: StyledLinkProps) => {
	return (
		<Link {...props}>
			<a className="text-blue-500 hover:text-blue-600">
				{props.children}
			</a>
		</Link>
	)
}

export default StyledLink