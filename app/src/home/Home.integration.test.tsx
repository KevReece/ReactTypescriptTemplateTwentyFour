import { render, screen, waitFor } from '@testing-library/react'
import Home from './Home';

describe('Home', () => {
  it('loads first item', async () => {
    render(<Home></Home>);

    await waitFor(() => screen.getAllByText('test'));

    const testItems = await screen.getAllByText('test')
    expect(testItems.length).toBeGreaterThanOrEqual(1);
  });
});
