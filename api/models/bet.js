var mongoose = require("mongoose");

//Bet Schema
const betSchema = mongoose.Schema({
    task: {type: String, required: true},
    dueDate: {type: Date, required: true},
    reward: {type: String, required: true},
    willOrWillNot: {type: String, required: true},
    pronoun: {type: String, required: true},
    details: String,
    challenger: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    acceptor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    winner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    status: {type: String, required: true},
    verification:{
        photo: String,
        sentDate: String,
        comments: String
    }
},
{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}}
) 

betSchema.methods.serialize = function(){
    console.log(this);
    return {
        id: this._id,
        task: this.task,
        dueDate: this.dueDate,
        reward: this.reward,
        details: this.details,
        challenger: this.challenger !== null ? this.challenger.map(challenger => challenger.serialize()) : null,
        acceptor: this.acceptor !== null ? this.acceptor.map(acceptor => acceptor.serialize()) : null,
        winner: this.winner !== null ? this.winner.map(winner => winner.serialize()) : null,
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