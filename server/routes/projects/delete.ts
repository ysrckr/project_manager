import express, { Request, Response } from 'express'
import Project from '../../db/models/Project'

const router = express.Router()

// @route DELETE api/v1/projects/:id
// @desc Delete project by id
// @access Public
const deleteProject = router.delete(
	'/:id',
	async (req: Request, res: Response) => {
		try {
			const project = await Project.findByIdAndDelete(req.params.id)
			res.status(204).json({ msg: 'Project deleted' })
		} catch (err: any) {
			res.status(500).json({ msg: err.message })
		}
	},
)

export { deleteProject }
