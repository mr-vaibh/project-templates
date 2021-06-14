const express = require('express'),
    mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());


// Setting MongoDB
const uri = process.env.DATABASE_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection is established successfully');
});


// Setting Routes
const usersRouter = require('./routes/users');

app.use('/users', usersRouter);


// Just for fun
app.get('/', (req, res) => {
    console.log("Hmm, so u know a little stuff there");
    res.send("Hello from Root '/' ")
});

// Listen to url PORT
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});
