import Form from './Form.jsx'
import Input from './Input.jsx'
const EditProject = ({ project }) => {
	return (
		<div>
			<Form className="flex-col">
				<Input
					input={true}
					className="project-name"
					placeholder="Project Name"
					value={project.name}
				/>
				<Input
					input={false}
					className="project-description"
					placeholder="Project Description"
					value={project.description}
				/>
				{/* 	<Select
					className="project-client"
					placeholder="Client"
					options={clients}
				/> */}
				<select className="project-status">
					<option disabled>Select Status</option>
					<option value="Not Started">Not Started</option>
					<option value="In Progress">In Progress</option>
					<option value="Completed">Completed</option>
				</select>
				<button className="btn project-btn">Save</button>
			</Form>
		</div>
	)
}
export default EditProject
