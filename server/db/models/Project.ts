import { Schema, model } from 'mongoose'
import { IProject, Status } from '../../interface/projectInterface'

const projectSchema = new Schema<IProject>({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		enum: Status,
		default: Status.new,
	},
	clientId: {
		type: Schema.Types.ObjectId,
		ref: 'Client',
		required: true,
	},
})

const Project = model<IProject>('Project', projectSchema)

export default Project
