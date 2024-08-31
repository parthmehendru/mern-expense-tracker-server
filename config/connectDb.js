const mongoose = require("mongoose")

const connectDb = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/")
		console.log(`Database running on ${mongoose.connection.host}`)
	} catch (error) {
		console.log(error)
	}
}

module.exports = connectDb
