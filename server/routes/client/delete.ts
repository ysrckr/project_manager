import express, { Request, Response } from 'express'
import Client from '../../db/models/Client'

const router = express.Router()

// @route   DELETE api/client/:id
// @desc    Delete client by id
// @access  Public
const deleteClient = router.delete(
	'/:id',
	async (req: Request, res: Response) => {
		try {
			const client = await Client.findByIdAndDelete(req.params.id)
			res.status(204).json({ msg: 'Client deleted' })
		} catch (err: any) {
			res.status(500).json({ msg: err.message })
		}
	},
)

export { deleteClient }
