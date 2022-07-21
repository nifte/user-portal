import useSWR from 'swr'
import { Session } from 'pages/api/session'

const useSession = () => {
	const fetcher = url => fetch(url).then(r => r.ok ? r.json() : null)
	const { data, error } = useSWR<Session>('/api/session', fetcher)
	return {
		session: data,
		error
	}
}

export default useSession