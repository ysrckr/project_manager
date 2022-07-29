import axios from 'axios'
import { API_URL } from '../config'
const getProject = axios.create({
	baseURL: API_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
	},
})
export const getAllProjects = async () => {
	try {
		const res = await getProject('/api/v1/projects')
		return res.data
	} catch (err) {
		console.log(err)
	}
}

export const deleteProject = async id => {
	try {
		const res = await getProject.delete(`/api/v1/projects/${id}`)
		return res.data
	} catch (err) {
		console.log(err)
	}
}
