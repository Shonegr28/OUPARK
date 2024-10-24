import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegisterComponent from './Registercomponet';

test('renders RegisterComponent correctly', () => {
  render(<RegisterComponent />);
  
  // Check if the heading is rendered
  const headingElement = screen.getByRole('heading', { name: /register/i });
  expect(headingElement).toBeInTheDocument();
  
  // Check if the input fields are rendered
  const nameInput = screen.getByPlaceholderText(/enter name/i);
  const emailInput = screen.getByPlaceholderText(/enter email/i);
  const passwordInput = screen.getByPlaceholderText(/enter password/i);
  
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();

  // Check if the button is rendered
  const buttonElement = screen.getByRole('button', { name: /create account/i });
  expect(buttonElement).toBeInTheDocument();
});
