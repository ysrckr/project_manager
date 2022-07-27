import express, { Request, Response } from 'express'
import Client from '../../db/models/Client'

const router = express.Router()

// @route   GET api/client/get
// @desc    Get all clients
// @access  Public
const getClients = router.get('/', async (req: Request, res: Response) => {
	try {
		const clients = await Client.find()
		res.status(200).json(clients)
	} catch (err: any) {
		res.status(500).json({ msg: err.message })
	}
})

// @route   GET api/client/get/:id
// @desc    Get client by id
// @access  Public
const getClientById = router.get(
	'/:id',
	async (req: Request, res: Response) => {
		try {
			const client = await Client.findById(req.params.id)
			res.status(200).json(client)
		} catch (err: any) {
			res.status(500).json({ msg: err.message })
		}
	},
)

export { getClients, getClientById }
