import { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import 'css/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>User Portal</title>
		</Head>
		<Component {...pageProps} />
	</>
)

export default MyApp