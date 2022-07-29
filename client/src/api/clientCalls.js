import axios from 'axios'
import { API_URL } from '../config'
const getClient = axios.create({
	baseURL: API_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
})
const postClient = axios.create({
	baseURL: API_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
})

export const getAllClients = async () => {
	try {
		const res = await getClient('/api/v1/clients')
		return res.data
	} catch (err) {
		console.log(err)
	}
}

export const getClientById = async id => {
	try {
		const res = await getClient(`/api/v1/clients/${id}`)
		return res.data
	} catch (err) {
		console.log(err)
	}
}
