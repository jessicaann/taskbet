var mongoose = require('mongoose');

//User Schema
const userSchema = mongoose.Schema({
    firstName: {type: String, required:  true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: String
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