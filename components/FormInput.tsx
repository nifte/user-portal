import { Dispatch, SetStateAction } from 'react'

type FormInputProps = {
	name: string
	label: string
	type: 'text' | 'email' | 'password'
	placeholder?: string
	required?: boolean
	stateHook: Dispatch<SetStateAction<string>>
}

const FormInput = (props: FormInputProps) => {
	return (
		<div>
			<label htmlFor={props.name} className="block text-sm font-medium text-gray-700">
				{props.label}
			</label>
			<div className="mt-1">
				<input
					name={props.name}
					type={props.type}
					required={props.required}
					placeholder={props.placeholder}
					className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					onChange={e => props.stateHook(e.target.value)}
				/>
			</div>
		</div>
	)
}

export default FormInput