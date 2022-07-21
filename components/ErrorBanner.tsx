import { SpeakerphoneIcon } from '@heroicons/react/outline'

type ErrorBannerProps = {
	type: 'warning' | 'error'
	message: string
}

const ErrorBanner = (props: ErrorBannerProps) => {
	return (
		<div className="w-full">
			<div className={`p-2 rounded-lg shadow ${props.type == 'warning' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'}`}>
				<div className="flex items-center justify-between flex-wrap">
					<div className="w-0 flex-1 flex items-center">
						<span className={`flex p-2 rounded-lg ${props.type == 'warning' ? 'bg-orange-200' : 'bg-red-200'}`}>
							<SpeakerphoneIcon className="h-6 w-6" aria-hidden="true" />
						</span>
						<p className="ml-3 font-medium">
							<span className="inline"><b>Oops!</b> {props.message}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ErrorBanner