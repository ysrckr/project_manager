import express, { Request, Response } from 'express'
import Project from '../../db/models/Project'

const router = express.Router()

// @route   GET api/v1/projects/
// @desc    Get all projects
// @access  Public
const getProjects = router.get('/', async (req: Request, res: Response) => {
	try {
		const projects = await Project.find()
		res.status(200).json(projects)
	} catch (err: any) {
		res.status(500).json({ msg: err.message })
	}
})

// @route   GET api/v1/projects/:id
// @desc    Get project by id
// @access  Public
const getProjectById = router.get(
	'/:id',
	async (req: Request, res: Response) => {
		try {
			const project = await Project.findById(req.params.id)
			res.status(200).json(project)
		} catch (err: any) {
			res.status(500).json({ msg: err.message })
		}
	},
)

// @route   GET api/v1/projects/:clientId
// @desc    Get projects by clientId
// @access  Public
const getProjectsByClientId = router.get(
	'/client/:clientId',
	async (req: Request, res: Response) => {
		try {
			const projects = await Project.find({
				clientId: req.params.clientId,
			})
			res.status(200).json(projects)
		} catch (err: any) {
			res.status(500).json({ msg: err.message })
		}
	},
)

export { getProjects, getProjectById, getProjectsByClientId }
