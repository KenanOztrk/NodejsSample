const {default: mongoose} = require('mongoose');

// USER NAME: user_node_sample
// PASSWORD: uDknR4ilmJBfX7mY
// CONNECTİON STRING: mongodb+srv://<username>:<password>@cluster0.swczwn6.mongodb.net/
// DB NAME: node-sample-db


const db = {
    connect: () => {
        mongoose.connect(process.env.CONNECTION_STRING)
        .then(() => {
            console.log('Connected to database');
        })
        .catch((error) => {
            console.log('Error connecting to database');
            console.log(error);
        });

    }
}

module.exports = {
    db
}