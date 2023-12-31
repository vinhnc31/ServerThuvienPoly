const  mongoose  = require("mongoose");

const BorowingSlip = new mongoose.Schema({
    book : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Books'
    },
    librarian: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'librarian'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    dateStart: {
        type: String,
    },
    dateEnd: {
        type: String,
    },
    status: {
        type: String,
    },
    price: {
        type:Number
    }
},{timestamps:true})
    
module.exports = new mongoose.model("BorowingSlip", BorowingSlip);