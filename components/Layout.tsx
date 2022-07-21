import Navbar from 'components/Navbar'
import { ReactNode } from 'react'

type LayoutProps = {
	children?: ReactNode
}

const Layout = (props: LayoutProps) => {
	return (
		<>
			<Navbar />
			<div className="container max-w-5xl mx-auto p-4 sm:px-6 lg:px-8">
				{props.children}
			</div>
		</>
	)
}

export default Layout