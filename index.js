const express = require('express')
const mongoose = require('mongoose')
const bookRoutes = require('./controllers/books')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use('/books', bookRoutes)

app.get('/', (req, res) => {
    res.send('Hello World')
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))