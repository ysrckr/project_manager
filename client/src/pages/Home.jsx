import Layout from '../components/layout/Layout'
import { getAllClients } from '../api/clientCalls'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../components/Spinner'

const Home = () => {
	const { data, isLoading, error } = useQuery(['clients'], getAllClients)
	if (isLoading) {
		return (
			<Layout>
				<Spinner />
			</Layout>
		)
	}
	if (error)
		return toast.error(error.message, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		})
	return (
		<Layout>
			<h1>Home</h1>
			
		</Layout>
	)
}
export default Home
