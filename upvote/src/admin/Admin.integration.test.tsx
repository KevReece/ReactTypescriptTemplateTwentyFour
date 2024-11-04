import { render, screen, waitFor } from "@testing-library/react";
import Admin from "./Admin";
import userEvent from "@testing-library/user-event";

describe('Admin', () => {
  it('posts item text', async () => {
    render(<Admin />)
    const textInput = screen.getByLabelText('Item text:');
    const submitButton = screen.getByText('Submit item');
    
    await userEvent.type(textInput, 'test');
    await userEvent.click(submitButton);
    await waitFor(() => screen.getByText('Successfully created item with ID:'));

    const successMessage = screen.getByText('Successfully created item with ID:');
    expect(successMessage).toBeInTheDocument();
  });
});