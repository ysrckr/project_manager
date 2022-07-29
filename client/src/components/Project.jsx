import { Link } from 'wouter'
import { FaTrash } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'

const Project = ({ project }) => {
	const deleteProject = () => {
		console.log('delete project')
	}
	const editProject = () => {
		console.log('edit project')
	}
	return (
		<div className="project-column-box">
			<h3 className="project-subtitle">{project.name}</h3>
			<p className="project-desc">
				<span>Description: </span> {project.description}
			</p>
			<p className="project-status">
				<span>Status: </span> {project.status}
			</p>
			<Link className="project-link" href={`/projects/${project._id}`}>
				See Details
			</Link>
			<div className="project-button-wrapper">
				<button className="btn project-btn edit" onClick={editProject}>
					<FaEdit />
				</button>
				<button
					className="btn project-btn delete"
					onClick={deleteProject}>
					<FaTrash />
				</button>
			</div>
		</div>
	)
}
export default Project
