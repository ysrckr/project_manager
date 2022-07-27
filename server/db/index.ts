import mongoose from 'mongoose'

const runDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI!)
		console.log(`Connected to MongoDB: ${conn.connection.host}`)
	} catch (error) {
		console.log(error)
	}
}

export default runDB
