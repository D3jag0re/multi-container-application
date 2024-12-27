const mongoose = require("mongoose")

const connectDB = async() => {
    try {

        await mongoose.connect("mongodb://mongo:27017/mydatabase")
        .then(console.log("MongoDB Connected"))

    } catch(error){
        console.log(error.message)
    }
}

MediaSourceHandle.exports = connectDB 