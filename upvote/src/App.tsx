import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => setItems(['Item1']), []);

  return (
    <>
      <h1>Upvote</h1>
      <div className="card">
        <ol>
          {items.map((itemText, itemIndex) => <li key={itemIndex}>{itemText}</li>)}
        </ol>
      </div>
    </>
  )
}

export default App
