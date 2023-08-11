import { useState } from 'react';
import BockCreate from './components/BookCreat';
import BookList from './components/BookList';
function App() {
  const [books, setBooks] = useState([]);

  const deletBookById = id => {
    const updatedBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const creatBoock = title => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deletBookById} />
      <BockCreate onCreat={creatBoock} />
    </div>
  );
}
export default App;
