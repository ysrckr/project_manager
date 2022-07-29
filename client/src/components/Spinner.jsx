import Lottie from 'lottie-react'
import animationData from '../assets/lotties/opener-loading.json'

const Spinner = () => {
	return (
		<div className="spinner-container">
			<div className="spinner">
				<Lottie animationData={animationData} loop={true} />
			</div>
		</div>
	)
}
export default Spinner
