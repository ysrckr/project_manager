import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import runDB from './db'
import { getClients, getClientById } from './routes/client/get'
import { postClient } from './routes/client/post'
import { editClient } from './routes/client/put'
import { deleteClient } from './routes/client/delete'
import {
	getProjects,
	getProjectById,
	getProjectsByClientId,
} from './routes/projects/get'
import { createProject } from './routes/projects/post'
import { updateProject } from './routes/projects/put'
import { deleteProject } from './routes/projects/delete'

// Load environment variables from .env file
dotenv.config({
	path: '.env',
})

// Create a new express application instance
const app: Express = express()

// Allow cross-origin requests
app.use(
	cors({
		origin: 'http://localhost:3000',
	}),
)

// Configure express to use body-parser as middle-ware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Connect to MongoDB
runDB()

// Define PORT
const port: number = Number(process.env.PORT) || 8000

// Define routes for Client
app.use(
	'/api/v1/clients',
	getClients,
	getClientById,
	postClient,
	editClient,
	deleteClient,
)
// Define routes for Project
app.use(
	'/api/v1/projects',
	getProjects,
	getProjectById,
	getProjectsByClientId,
	createProject,
	updateProject,
	deleteProject,
)

// Start the server
app.listen(port, () => {
	console.log(`Server running on: http://localhost:${port}`)
})
