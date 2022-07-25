const mongoose = require('mongoose');



const mongoConnection = () => {
        mongoUrl ='mongodb://localhost:27017/klassic'
    return mongoose.connect(mongoUrl);
}

module.exports = mongoConnection;


