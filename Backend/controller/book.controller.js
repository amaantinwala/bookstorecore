// import Book from '../model/book.model.js';
const Book = require('../model/book.model.js');

const getBook = async(req, res) =>{
    try{
        const book = await Book.find()
        res.status(200).json(book)
    }catch(err){
        console.log(err);
        res.status(500).json('server error');
    }
}

module.exports = getBook;