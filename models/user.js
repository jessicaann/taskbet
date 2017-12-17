import mongoose from 'mongoose';

//User Schema
const userSchema = mongoose.Schema({
    firstName: {type: String, required:  true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: String,
    bets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bet'
    }],
}) 
userSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`.trim()
});
userSchema.methods.serialize = function(){
    return {
        id: this.id,
        email: this.email,
        firstName: this.firstName,
        fullName: this.fullName,
        bets: this.bets
    };
}

const User = mongoose.model('User', userSchema);

module.exports = {User};

/*Properties of bets I'd like to create
{
    won: Number,
    accepted: Number,
    challenged: Number,
    totalEngaged: Number,
    lost: Number
} */