import { Link } from 'wouter'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { useState } from 'react'
import Modal from './Modal'
const Project = ({ project, del, getClient }) => {
	const [isOpen, setIsOpen] = useState(false)
	const client = getClient(project.clientId)
	const edit = () => {
		setIsOpen(true)
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
			<div className="project-client-wrapper">
				<h3 className="project-client-title">Client</h3>
				<p className="project-client">
					<Link href={`/clients/${client._id}`}>{client.name}</Link>
				</p>
			</div>
			<div className="project-button-wrapper">
				<button className="btn project-btn edit" onClick={edit}>
					<FaEdit />
				</button>
				<button
					className="btn project-btn delete"
					onClick={() => del(project._id)}>
					<FaTrash />
				</button>
			</div>
			<Modal isOpen={isOpen} project={project} close={setIsOpen}/>
		</div>
	)
}
export default Project
