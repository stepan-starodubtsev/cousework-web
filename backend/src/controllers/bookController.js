const Book = require('../models/Book');
const Visitor = require('../models/Visitor');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll({ include: [{ model: Visitor, as: 'borrower' }] });
        res.json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id, { include: [{ model: Visitor, as: 'borrower' }] });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.createBook = async (req, res) => {
    const { title, author, genre, description, status, borrowerId } = req.body;

    try {
        const book = await Book.create({ title, author, genre, description, status, borrowerId });
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, author, genre, description, status, borrowerId } = req.body;

    try {
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        book.title = title;
        book.author = author;
        book.genre = genre;
        book.description = description;
        book.status = status;
        book.borrowerId = borrowerId;

        await book.save();
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await book.destroy();
        res.json({ message: 'Book deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
