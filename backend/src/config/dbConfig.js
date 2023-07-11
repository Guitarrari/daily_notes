const mongoose = require('mongoose');

const dbConfig = 'mongodb+srv://birmind:birmind@clusterreact.8roy1io.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;