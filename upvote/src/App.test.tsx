import { render, screen } from "@testing-library/react";
import App from "./App";

describe('app', () =>{
  it('handles empty item list', () => {
    jest.mock('./ApiClient', () => { getItems: async () => Promise.resolve([])})

    render(<App></App>);

    const header = screen.findAllByText('Item List')
    expect(header).toHaveLength(1);
  });
});