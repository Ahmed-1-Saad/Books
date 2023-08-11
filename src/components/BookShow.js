function BookShow({ book, onDelete }) {
  const deleteClick = () => {
    onDelete(book.id);
  };

  return (
    <div className="book-show">
      {book.title}

      <div className="actions">
        <button className="delete" onClick={deleteClick}>
          delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
