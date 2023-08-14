import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete, onEdit }) {
  const [showEdite, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditeClick = () => {
    setShowEdit(!showEdite);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdite) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="book-show">
      <img alt="book" src={`https://picsum.photos/seed/${book.id}/300/200`} />

      {content}

      <div className="actions">
        <button className="edit" onClick={handleEditeClick}>
          Edite
        </button>

        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
