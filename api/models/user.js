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
userSchema.methods.serialize = function(token){
    return {
        id: this.id,
        email: this.email,
        fullName: this.fullName,
        accessToken: token
    };
}

const User = mongoose.model('User', userSchema);

module.exports = {User};