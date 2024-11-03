import App from './App';
import { render, screen } from '@testing-library/react'

describe('app', () => {
  it('loads first item', async () => {
    render(<App></App>);
    const firstItem = await screen.findAllByText('test')
    expect(firstItem).toHaveLength(1);
  });
});
