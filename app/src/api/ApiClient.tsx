import axios, { AxiosResponse } from 'axios';
import { Item } from './Item';
import { ZodIssue } from 'zod';

type ApiResponse<T> = {
  data: T,
  errorMessage: string,
  validationErrors: ZodIssue[]
}

class ApiClient {
  private BaseUrl = 'http://localhost:8081'

  public getItems = async () : Promise<Item[]> => {
    const response = await axios.get<ApiResponse<Item[]>>(this.BaseUrl);
    console.debug('Response received for getItems:')
    console.debug(response)
    if (response?.status === 200){
      return response.data?.data;
    }
    this.logApiError(response);
    return Promise.resolve([]);
  }
  
  public submitItem = async (itemText: string) : Promise<Item|undefined> => {
    console.debug(`Posting item: ${itemText}`)
    const response = await axios.post<ApiResponse<Item>, AxiosResponse<ApiResponse<Item>, Item>, Item>(
      this.BaseUrl, {text: itemText});
    console.debug('Response received for submitItem:')
    console.debug(response)
    if (response?.status === 201 && response.data?.data){
      return response.data.data;
    }
    this.logApiError(response);
    return undefined;
  }

  private logApiError = (response: AxiosResponse<ApiResponse<any>,any>) => {
    const message = `Unexpected API response, status text: '${response?.statusText}'`
      + `, status code ${response?.status}`
      + response?.data?.errorMessage ? `, error message ${response?.data?.errorMessage}` : ''
      + response?.data?.validationErrors ? `, validation errors ${response?.data?.validationErrors}` : '';
    console.error(message);
  };
}

export default ApiClient