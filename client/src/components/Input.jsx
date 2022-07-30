const Input = ({ input, value, className, change, placeholder }) => {
	return (
		<div className="input">
			{input ? (
				<input
					type="text"
					value={value}
					className={className}
					placeholder={placeholder}
					onChange={change}
				/>
			) : (
				<textarea
					type="text"
					value={value}
					className={className}
					placeholder={placeholder}
					onChange={change}
					rows={5}
					cols={30}
				/>
			)}
		</div>
	)
}
export default Input

Input.defaultProps = {
	input: true,
	className: '',
	value: '',
	placeholder: '',
	change: e => {
		console.log(e.target.value)
	},
}
