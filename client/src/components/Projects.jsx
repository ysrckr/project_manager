import { getAllProjects, deleteProject } from '../api/projectCalls'
import { useQuery, useMutation } from '@tanstack/react-query'
import Spinner from '../components/Spinner'
import Layout from './layout/Layout'
import Project from './Project'
import { queryClient } from '../queries/queryClient'

const Projects = () => {
	const { data, isLoading, isError, error } = useQuery(
		['projects'],
		getAllProjects,
	)
	const deleteMutation = useMutation(deleteProject, {
		onSuccess: () => {
			queryClient.invalidateQueries('projects')
		},
	})
	const delProject = async id => {
		await deleteMutation.mutateAsync(id)
	}
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
			<h1 className="project-title">Projects</h1>
			<div className="project-column">
				{data &&
					data.map(project => (
						<Project
							project={project}
							key={project._id}
							del={delProject}
						/>
					))}
			</div>
		</div>
	)
}
export default Projects
