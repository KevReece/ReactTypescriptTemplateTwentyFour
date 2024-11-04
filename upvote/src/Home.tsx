import { useEffect, useState } from 'react'
import './App.css'
import ApiClient from './ApiClient';
import { Item } from './Item';


function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const apiClient = new ApiClient();
    const fetchItems = async () => {
      setItems((await apiClient.getItems()))
    };

    fetchItems();
  }, []);

  return (
    <>
      <h1>Upvote</h1>
      <div className="card">
        <ol>
          {items.map(item => <li key={item.id}>{item.text}</li>)}
        </ol>
      </div>
    </>
  )
}

export default Home
