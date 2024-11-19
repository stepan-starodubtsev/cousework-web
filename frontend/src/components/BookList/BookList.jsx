import React, { useState, useEffect } from 'react';
import { fetchBooks, addBook, updateBook, deleteBook, fetchVisitors } from '../../services/BookService';
import './BookList.css';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    async function loadBooks() {
      try {
        const data = await fetchBooks();
        setBooks(data);
        setFilteredBooks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error loading books:', error);
        setLoading(false);
      }
    }
    loadBooks();
  }, []);

  useEffect(() => {
    const filtered = books.filter((book) =>
      book.title && book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  const handleAddBook = () => {
    setCurrentBook(null);
    setIsModalOpen(true);
  };

  const handleEditBook = (book) => {
    setCurrentBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveBook = async (book) => {
    try {
      const savedBook = currentBook
        ? await updateBook(book)
        : await addBook(book);

      setBooks((prevBooks) =>
        currentBook
          ? prevBooks.map((item) =>
              item.id === savedBook.id ? savedBook : item
            )
          : [...prevBooks, savedBook]
      );
    } catch (error) {
      console.error('Error saving book:', error);
    } finally {
      setIsModalOpen(false);
    }
  };

  const handleDeleteBook = async (bookId) => {
    try {
      await deleteBook(bookId);
      setBooks((prevBooks) =>
        prevBooks.filter((item) => item.id !== bookId)
      );
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="book-list-container">
      <input
        type="text"
        placeholder="Пошук по назві книги..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={handleAddBook} className="add-button">
        Зареєструвати книгу
      </button>
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <div className="book-details">
              <span><strong>Автор:</strong> {book.author}</span>
              <span><br/><strong>Жанр:</strong> {book.genre}</span>
              <span><br/><strong>Статус:</strong> {book.status}</span>
              <span><br/><strong>Тримач книги:</strong> {book.borrower ? book.borrower.name + " " + book.borrower.surname : 'Бібліотека'}</span>
              </div>
            <div className="book-actions">
              <button onClick={() => handleEditBook(book)} className="edit-button">
                Редагувати
              </button>
              <button onClick={() => handleDeleteBook(book.id)} className="delete-button">
                Видалити
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <BookModal
          book={currentBook}
          onClose={handleCloseModal}
          onSave={handleSaveBook}
        />
      )}
    </div>
  );
}

function BookModal({ book, onClose, onSave }) {
  const [title, setTitle] = useState(book ? book.title : '');
  const [author, setAuthor] = useState(book ? book.author : '');
  const [genre, setGenre] = useState(book ? book.genre : 'Наукова фантастика');
  const [description, setDescription] = useState(book ? book.description : '');
  const [status, setStatus] = useState(book ? book.status : 'В наявності');
  const [borrowerId, setBorrowerId] = useState(book && book.borrower ? book.borrower.id : 0);
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    setTitle(book ? book.title : '');
    setAuthor(book ? book.author : '');
    setGenre(book ? book.genre : 'Наукова фантастика');
    setDescription(book ? book.description : '');
    setStatus(book ? book.status : 'В наявності');
    setBorrowerId(book && book.borrower ? book.borrower.id : 0);
  }, [book]);

  useEffect(() => {
    if (status === 'Видана на руки') {
      getVisitors();
    }
  }, [status]);

  const getVisitors = async () => {
    try {
      const data = await fetchVisitors();
      setVisitors(data);
      console.log('Visitors fetched:', data);
    } catch (error) {
      console.error('Error fetching visitors:', error);
    }
  };

  const handleSave = () => {
    const newBook = {
      id: book ? book.id : 0,
      title,
      author,
      genre,
      description,
      status,
      borrowerId: status === 'Видана на руки' && borrowerId !== 0 ? borrowerId : null,
      createdAt: book ? book.createdAt : new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    onSave(newBook);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{book ? 'Редагувати інформацію про книгу' : 'Зареєструвати книгу'}</h2>
        <input
          type="text"
          placeholder="Назва книги"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Автор"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="Наукова фантастика">Наукова фантастика</option>
          <option value="Фантастика">Фантастика</option>
          <option value="Мелодрама">Мелодрама</option>
          <option value="Містика">Містика</option>
          <option value="Художня література">Художня література</option>
        </select>
        <textarea
          placeholder="Опис"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="В наявності">В наявності</option>
          <option value="Видана на руки">Видана на руки</option>
        </select>

        {status === 'Видана на руки' && (
          <select value={borrowerId} onChange={(e) => setBorrowerId(parseInt(e.target.value))}>
            <option value="0">Оберіть тримача книги</option>
            {visitors.map((visitor) => (
              <option key={visitor.id} value={visitor.id}>
                {visitor.surname} {visitor.name} {visitor.lastName}
              </option>
            ))}
          </select>
        )}

        <div className="modal-actions">
          <button onClick={handleSave} className="save-button">Зберегти</button>
          <button onClick={onClose} className="cancel-button">Відхилити</button>
        </div>
      </div>
    </div>
  );
}
