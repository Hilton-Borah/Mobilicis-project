const mongoose = require("mongoose")

const connectionSchema = mongoose.Schema({
    name: String,
    job_role: String,
    organisation: String,
    image: String
})

const connectionModel = mongoose.models.userdata || mongoose.model("connectiondata", connectionSchema)

module.exports = {
    connectionModel
}
