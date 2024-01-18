import { render, screen } from '@testing-library/react';
import App from './App';

test('Header element render in App component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Fill Below Form/i);
  expect(headerElement).toBeInTheDocument();

});

test('CreateOp Component available in App Component', () => {
  const component = render(<App />);
  const firstNameElement = component.getByPlaceholderText(/First Name/i);
  expect(firstNameElement).toBeInTheDocument();
  const lastNameElement = component.getByPlaceholderText(/Last Name/i);
  expect(lastNameElement).toBeInTheDocument();
  const checkElement = component.getByLabelText(/I agree to the terms and conditions/i);
  expect(checkElement).toBeInTheDocument();
});