const {default: mongoose} = require('mongoose');

const webUserSchema = mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String,
},
{
    timestamps: true // createdAt, updatedAt tarıihlerini otomatik olarak ekler
})

const WebUser = mongoose.model('webUser', webUserSchema);

module.exports = {
    WebUser
}