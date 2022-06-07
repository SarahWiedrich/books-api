const router = require('express').Router()
const Book = require('../models/books')

router.get('/', async (req, res) => {
    try {
        let books = await Book.find()
        res.send(books)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'unable to retreive instruments' })
    }
})

router.get('/books', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})

module.exports = router