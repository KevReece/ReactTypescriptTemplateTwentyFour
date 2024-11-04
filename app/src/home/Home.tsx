import { useEffect, useState } from 'react'
import ApiClient from '../api/ApiClient';
import { Item } from '../api/Item';


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
