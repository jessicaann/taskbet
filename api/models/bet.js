var mongoose = require("mongoose");

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
    accepter: {
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

betSchema.methods.serialize = function(){
    return {
        task: this.task,
        dueDate: this.dueDate,
        reward: this.reward,
        details: this.details,
        challenger: this.challenger,
        accepter: this.accepter,
        winner: this.winner,
        status: this.status,
        verification:{
            photo: this.photo,
            sentDate: this.sentDate,
            comments: this.comments
        }
    };
}

const Bet = mongoose.model('Bet', betSchema);

module.exports = {Bet};