import { useEffect, useState } from 'react'
import './App.css'
import ApiClient from './apiClient';


function App() {
  const [items, setItems] = useState<string[]>([]);
  const apiClient = new ApiClient();

  useEffect(() => {
    const fetchItems = async () => {
      setItems(await apiClient.getItems())
    };

    fetchItems();
  }, [apiClient]);

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
