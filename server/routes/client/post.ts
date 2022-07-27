import { ExecException } from 'child_process'
import express, { ErrorRequestHandler, Request, Response } from 'express'
import Client from '../../db/models/Client'

const router = express.Router()

// @route   POST api/clients
// @desc    Create a new client
// @access  Public
const postClient = router.post('/', async (req: Request, res: Response) => {
	try {
		const client = await Client.create({
			name: req.body.name,
			email: req.body.email,
		})
		res.status(201).json(client)
	} catch (err: any) {
		console.error(err.message)
		res.status(500).json({ msg: err.message })
	}
})

export { postClient }
