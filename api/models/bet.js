var mongoose = require('mongoose');

//Bet Schema
const betSchema = mongoose.Schema({
    task: {type: String, required: true},
    dueDate: {type: Date, required: true},
    reward: {type: String, required: true},
    details: String,
    challenger: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    acceptor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    status: {type: String, required: true},
    verification:{
        photo: String,
        sentDate: {type: Date, required: true},
        comments: String
    }
},
{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}}
) 

//I want to capture the dates of status changes...is that done with a virtual?

const Bet = mongoose.model('Bet', betSchema);

module.exports = {Bet};