import axios, { AxiosResponse } from 'axios';
import { Item } from './Item';

class ApiClient {
  private BaseUrl = 'http://localhost:8081'

  public getItems = async () : Promise<Item[]> => {
    const response = await axios.get<Item[]>(this.BaseUrl);
    console.debug('Response received for getItems:')
    console.debug(response)
    if (response?.status === 200){
      return response.data;
    }
    console.error(`Unexpected API response, status text: ${response?.statusText}`);
    return Promise.resolve([]);
  }
  
  public submitItem = async (itemText: string) : Promise<Item|undefined> => {
    console.debug(`Posting item: ${itemText}`)
    const response = await axios.post<Item, AxiosResponse<Item, Item>, Item>(
      this.BaseUrl, {text: itemText});
    console.debug('Response received for submitItem:')
    console.debug(response)
    if (response?.status === 201 && response.data){
      return response.data;
    }
    console.error(`Unexpected API response, status text: ${response?.statusText}`);
    return undefined;
  }
}

export default ApiClient