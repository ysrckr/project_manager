import express, { Request, Response } from 'express'
import Project from '../../db/models/Project'

const router = express.Router()

// @route POST api/v1/projects/
// @desc Create a project
// @access Public
const createProject = router.post('/', async (req: Request, res: Response) => {
    try {
        const project = await Project.create({
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            clientId: req.body.clientId,
        })
        res.status(201).json(project)
    } catch (err: any) {
        res.status(500).json({ msg: err.message })
    }
})

export { createProject }