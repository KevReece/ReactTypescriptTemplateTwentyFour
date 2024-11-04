import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe('Home', () =>{
  it('handles empty item list', () => {
    jest.mock('../api/ApiClient', () => { getItems: async () => Promise.resolve([])})

    render(<Home></Home>);

    const header = screen.getByText('Upvote')
    expect(header).toBeInTheDocument();
  });
});