import { ChangeEvent, FormEvent, useState } from "react";
import ApiClient from "../api/ApiClient";
import { Item } from "../api/Item";

function Admin(){

  const apiClient = new ApiClient();
  const [itemText, setItemText] = useState<string>('');
  const [createdItem, setCreatedItem] = useState<Item|undefined>();

  const changeText = (event: ChangeEvent<HTMLInputElement>) => {
    setItemText(event.target.value);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    const submitToApi = async () => {
      const item = await apiClient.submitItem(itemText) 
      setCreatedItem(item);
    };
    event.preventDefault();
    setCreatedItem(undefined);
    submitToApi();
  };

  return <>
      <h1>Upvote Admin</h1>
      <form onSubmit={submit} className="admin-form">
        <label htmlFor='ItemText'>Item text:</label>
        <input id='ItemText' type="text" name='ItemText' value={itemText} onChange={changeText}>
        </input>
        <button type='submit'>Submit item</button>
      </form> 
      { createdItem?.id && <p className="successMessage">
          <span>Successfully created item with ID: </span>
          <span>{createdItem.id}</span>
        </p> }
    </>;
}

export default Admin;