const express = require('express');
const routerApi = require('./routes'); /* index.js is called automatically */
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback')
const mongoose = require('mongoose');

//DB CONNECTION
// const DB_URI = 'mongodb://localhost:27017/library'
const DB_URI = 'mongodb+srv://felipebg:4tFLWh52UMq45JQ8@library.crmm5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const options = {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
}

async function connect() {
  await mongoose.connect(DB_URI/*, options*/)
  console.log('Connected to DB successfully');
}

connect().catch(err => console.log(err))


const app = express();
const port = process.env.PORT || 3000;

//express native middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())
app.use(morgan('tiny'))
app.use(history())

app.get('/', (req, res) => {
	res.send('Hello, world!');
})

app.listen(port, () => {
	console.log(`server listening at ${port}`);
});

routerApi(app)
