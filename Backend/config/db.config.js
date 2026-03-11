const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()


mongoose.connect(process.env.URL).then(() => console.log("database connected ")).catch((error) => console.log(error))

module.exports = mongoose