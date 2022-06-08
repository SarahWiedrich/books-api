const router = require('express').Router()
const Book = require('../models/books')

//Book seed data/route
books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})


//GET all books
router.get('/', async (req, res) => {
    try {
        let books = await Book.find()
        res.json(books)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': 'unable to retreive instruments' })
    }
})

//GET one book by id
router.get('/:id', async (req, res) => {
    let id = req.params.id
    try {
        let books = await Book.findById(id)
        res.json(books)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': "we've got issues" })
    }
})

//PUT update one book by id
router.put('/:id', async (req, res) => {
    let id = req.params.id
    try {
        await Book.findByIdAndUpdate(id, req.body)
        let books = await Book.findById(id)
        res.json(books)
        res.send(('Book updated'))
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': "we've got issues" })
    }
})

//POST create one book
router.post('/', async, (req, res) => {
    try {
        await Book.create(req.body)
        res.send('Book added')
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': "we've got issues" })
    }
})

//DELETE remove one book by id
router.delete('/:id', async (req, res) => {
    let id = req.params.id
    try {
        await Book.findByIdAndDelete(id)
       res.send(`Book ${id} has been deleted`)
    } catch (error) {
        console.log(error)
        res.status(500).json({ 'message': "we've got issues" })
    }
})

module.exports = router