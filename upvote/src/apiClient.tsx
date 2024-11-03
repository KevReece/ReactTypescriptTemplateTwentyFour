import axios from 'axios';


class ApiClient {
  private BaseUrl = 'http://localhost:8081'

  public getItems = async () => {
    const response = await axios.get<string[]>(this.BaseUrl);
    if (response?.status === 200){
      return response.data;
    }
    console.error(`Unexpected API response, status text: ${response?.statusText}`);
    return [];
  }
}

export default ApiClient