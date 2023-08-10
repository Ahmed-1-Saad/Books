import { useState } from 'react';
function BookCreat({ onCreat }) {
  const [title, setTiltle] = useState('');

  const handleChange = event => {
    setTiltle(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onCreat(title);
    setTiltle('');
  };

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <label>Tiltle:</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Creat!</button>
      </form>
    </div>
  );
}
export default BookCreat;
