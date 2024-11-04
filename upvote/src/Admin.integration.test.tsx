import { render, screen } from "@testing-library/react";
import Admin from "./Admin";
import { userEvent } from "@testing-library/user-event";

describe('Admin', () => {
  it('posts item text', () => {
    render(<Admin />)
    const textInput = screen.getByLabelText('Item text:');
    const submitButton = screen.getByText('Submit item');
    
    userEvent.type(textInput, 'test');
    userEvent.click(submitButton);

    const successMessage = screen.findAllByText('Successfully submitted');
    expect(successMessage).toBeInTheDocument();
  });
});