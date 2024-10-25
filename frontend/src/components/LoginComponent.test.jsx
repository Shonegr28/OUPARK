// LoginComponent.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import LoginComponent from './LoginComponent';

test('renders LoginComponent with correct elements', () => {
  render(
    <BrowserRouter>
      <LoginComponent />
    </BrowserRouter>
  );

  // Check if the login title is rendered
  const titleElement = screen.getByText(/login/i);
  expect(titleElement).toBeInTheDocument();

  // Check if email label is rendered
  const emailLabel = screen.getByLabelText(/email/i);
  expect(emailLabel).toBeInTheDocument();

  // Check if password label is rendered
  const passwordLabel = screen.getByLabelText(/password/i);
  expect(passwordLabel).toBeInTheDocument();

  // Check if Sign In button is rendered
  const buttonElement = screen.getByRole('button', { name: /sign in/i });
  expect(buttonElement).toBeInTheDocument();

  // Check if link to create an account is rendered
  const linkElement = screen.getByText(/create an account/i);
  expect(linkElement).toBeInTheDocument();
});
