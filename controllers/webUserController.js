
const { WebUser } = require("../models/webUser");

const webUserController = {
    getAll: (req, res) => {
        WebUser.find()
        .then((webusers) => {
            return res.json(webusers)
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
    },
    getById: (req, res) => {
        const id = req.params.id
        WebUser.findById(id)
            .then((webuser) => {
                if (webuser) {
                    return res.status(200).json(webuser)
                } else {
                    return res.status(404).send("Kullanıcı bulunamadı")
                }
            })
            .catch((err) => {
                return res.status(500).json(err)
            })
    },
    create: (req, res) => {
        const newWebUser = new WebUser({
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName, 
        });
    
        newWebUser.save()
        .then((webuser) => {
            return res.status(201).json(webuser)
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
    },
    delete: (req, res) => {
        const id = req.params.id
    WebUser.findByIdAndDelete(id)
        .then((webuser) => {
            if (webuser) {
                return res.status(200).json(webuser)
            } else {
                return res.status(404).send("Kullanıcı bulunamadı") 
            }
        })
        .catch((err) => {
            return res.status(500).json(err)
        })
    },
};

module.exports = {
    webUserController
}