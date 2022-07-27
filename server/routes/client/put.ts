import express, { Request, Response } from 'express'
import Client from '../../db/models/Client'

const router = express.Router()

// @route   PUT api/client/:id
// @desc    Edit client by id
// @access  Public
const editClient = router.put('/:id', async (req: Request, res: Response) => {
	try {
		const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
		res.status(200).json(client)
	} catch (err: any) {
		res.status(500).json({ msg: err.message })
	}
})

export { editClient }
