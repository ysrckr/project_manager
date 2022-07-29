import axios from 'axios'
import { API_URL } from '../config'
const getClient = axios.create({
	baseURL: API_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
})

export const getAllClients = async () => {
	const res = await getClient('/api/v1/clients')
	return res.data
}
