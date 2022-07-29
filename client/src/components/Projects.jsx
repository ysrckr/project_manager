import { getAllProjects, deleteProject } from '../api/projectCalls'
import { getAllClients } from '../api/clientCalls'
import { useQuery, useMutation } from '@tanstack/react-query'
import Spinner from '../components/Spinner'
import Layout from './layout/Layout'
import Project from './Project'
import { queryClient } from '../queries/queryClient'
import { toast, ToastContainer } from 'react-toastify'

const Projects = () => {
	const { data, isLoading, isError, error } = useQuery(
		['projects'],
		getAllProjects,
	)
	const { data: clients } = useQuery(['clients'], getAllClients)
	const getClientWithId = id => {
		const client = clients.filter(client => client._id === id)
		return client[0]
	}
	const deleteMutation = useMutation(deleteProject, {
		onSuccess: () => {
			queryClient.invalidateQueries('projects')
		},
	})
	const delProject = async id => {
		await deleteMutation.mutateAsync(id)
	}

	if (isLoading) {
		return <Spinner />
	}
	if (isError) {
		return <div>{error.message}</div>
	}

	return (
		<div className="project">
			<h1 className="project-title">Projects</h1>
			<div className="project-column">
				{data &&
					data.map(project => (
						<Project
							project={project}
							key={project._id}
							del={delProject}
							getClient={getClientWithId}
						/>
					))}
			</div>
		</div>
	)
}
export default Projects
