const {default: mongoose} = require('mongoose');

const webUserSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
},
{
    timestamps: true // createdAt, updatedAt tarıihlerini otomatik olarak ekler
})

const WebUser = mongoose.model('webUser', webUserSchema);

module.exports = {
    WebUser
}