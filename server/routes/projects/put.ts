import express, { Request, Response } from 'express'
import Project from '../../db/models/Project'

const router = express.Router()
// @route   PUT api/v1/projects/:id
// @desc    Update project by id
// @access  Public
const updateProject = router.put(
	'/:id',
	async (req: Request, res: Response) => {
		try {
			const project = await Project.findByIdAndUpdate(
				req.params.id,
				{
					name: req.body.name,
					description: req.body.description,
					status: req.body.status,
					clientId: req.body.clientId,
				},
				{ new: true },
			)
			res.status(200).json(project)
		} catch (err: any) {
			res.status(500).json({ msg: err.message })
		}
	},
)

export { updateProject }
