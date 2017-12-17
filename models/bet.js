import mongoose from 'mongoose';

//Bet Schema
const betSchema = mongoose.Schema({
    task: {type: String, required: true},
    dueDate: {type: Date, required: true},
    reward: {type: String, required: true},
    details: {type: String},
    challenger: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    acceptor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {type: String, required: true, },
    verification:{
        photo: {type: String},
        sentDate: {type: Date, required: true}
    }
}) 