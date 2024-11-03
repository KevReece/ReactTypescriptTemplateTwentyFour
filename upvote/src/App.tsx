import { useEffect, useState } from 'react'
import './App.css'
import ApiClient from './ApiClient';


function App() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const apiClient = new ApiClient();
    const fetchItems = async () => {
      setItems(await apiClient.getItems())
    };

    fetchItems();
  }, []);

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
