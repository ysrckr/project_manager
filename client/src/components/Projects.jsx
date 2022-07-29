import { getAllProjects } from '../api/projectCalls'
import { useQuery } from '@tanstack/react-query'
import Spinner from '../components/Spinner'
import Layout from './layout/Layout'
import Project from './Project'

const Projects = () => {
	const { data, isLoading, isError, error } = useQuery(
		['projects'],
		getAllProjects,
	)
	if (isLoading) {
		return (
			<Layout>
				<Spinner />
			</Layout>
		)
	}
	if (isError)
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
		<div className="project">
			<h1 className='project-title'>Projects</h1>
			<div className="project-column">
				{data &&
					data.map(project => (
						<Project project={project} key={project._id} />
					))}
			</div>
		</div>
	)
}
export default Projects
