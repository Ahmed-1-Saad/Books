import { useState } from 'react';
import BockCreate from './components/BookCreat';
function App() {
  const [books, srtBooks] = useState([]);

  const creatBoock = title => {
    console.log('need to add book with :', title);
  };

  return (
    <div>
      <BockCreate onCreat={creatBoock} />
    </div>
  );
}
export default App;
