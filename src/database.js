const mongoose = require('mongoose');
//el signo ? significa un 'if' si en cuentra ese valo q lo ponga sino ponga'mongodb://localhost/dbtest'
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI: 'mongodb://localhost/dbtest';

mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})