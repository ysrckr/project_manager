const Form = ({ children, submit, className }) => {
	return (
		<form onSubmit={submit} className={className}>
			{children}
		</form>
	)
}
export default Form
