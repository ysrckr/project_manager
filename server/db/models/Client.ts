import { Schema, model } from 'mongoose'
import IClient from '../../interface/clientInterface'

const clientSchema = new Schema<IClient>({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
})

const Client = model<IClient>('Client', clientSchema)

export default Client
