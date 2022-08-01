import { Types } from 'mongoose'

interface IProject {
	name: string
	description: string
	status: string
	clientId: Types.ObjectId
}

enum Status {
	new = 'Not Started',
	progress = 'In Progress',
	done = 'Completed',
}

export { IProject, Status }
