import App from './App';
import { render, screen } from '@testing-library/react'

describe('app', () => {
    it('loads first item', async () => {
        render(<App></App>);
        const firstItem = await screen.findAllByText('Item1')
        expect(firstItem).toHaveLength(1);
    });
});
