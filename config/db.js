const mongoose = require('mongoose')

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to MongoDB")
    })
}

module.exports = connectToDB;  //export the function to be used elsewhere in the app