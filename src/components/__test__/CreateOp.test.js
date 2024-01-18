import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreateOp from '../CreateOp';

window.alert = jest.fn();

describe('Test CreateOp Component', () => {
    test('First name element render with empty value', () => {
        render(<CreateOp />);
        const firstNameElement = screen.getByPlaceholderText(/First Name/i);
        expect(firstNameElement.value).toBe('');
        userEvent.type(firstNameElement, "test");
        const buttonElement = screen.getByRole('button');
        buttonElement.click();
        expect(window.alert).toHaveBeenCalledWith('Please fill all the fields');
    });

    test('Last name element render with empty value', () => {
        render(<CreateOp />);
        const lastNameElement = screen.getByPlaceholderText(/Last Name/i);
        expect(lastNameElement.value).toBe('');
        userEvent.type(lastNameElement, "name");
        const buttonElement = screen.getByRole('button');
        buttonElement.click();
        expect(window.alert).toHaveBeenCalledWith('Please fill all the fields');
    });

    test('Checkbox element render with false value', () => {
        render(<CreateOp />);
       
        const firstNameElement = screen.getByPlaceholderText(/First Name/i);
        userEvent.type(firstNameElement, "User");
        const lastNameElement = screen.getByPlaceholderText(/Last Name/i);
        userEvent.type(lastNameElement, "Patel");
        const checkboxLabelElement = screen.getByRole('checkbox');
        expect(checkboxLabelElement.checked).toBe(false);
        const buttonElement = screen.getByRole('button');
        buttonElement.click();
        expect(window.alert).toHaveBeenCalledWith('Please agree to the terms and conditions');
    });  

    test('Checkbox element render with true value', () => {
        render(<CreateOp />);
       
        const firstNameElement = screen.getByPlaceholderText(/First Name/i);
        userEvent.type(firstNameElement, "Test");
        const lastNameElement = screen.getByPlaceholderText(/Last Name/i);
        userEvent.type(lastNameElement, "User");
        const checkboxLabelElement = screen.getByRole('checkbox');
        expect(checkboxLabelElement.checked).toBe(false);
        userEvent.click(checkboxLabelElement, { currentTraget: { checked: true } });
        const buttonElement = screen.getByRole('button');
        buttonElement.click();
        expect(window.alert).toHaveBeenCalledWith('Form submitted successfully');
    });  
});
