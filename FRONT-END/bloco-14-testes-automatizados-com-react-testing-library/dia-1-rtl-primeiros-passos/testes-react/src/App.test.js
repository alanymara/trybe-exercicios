import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('Verificando se existe o campo Email.', () => {
  render(<App />);
  const inputEmail = screen.getByLabelText('Email');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveProperty('type', 'email');
});

test('Verificando se existem dois botões', () => {
  render(<App />);
  const buttons = screen.getAllByRole('button');
  expect(buttons).toHaveLength(2);
});

test('Verificando se existe um botão de enviar', () => {
  render(<App />);
  const btnSend = screen.getByTestId('id-send');
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveProperty('type', 'button');
  expect(btnSend).toHaveValue('Enviar');
});

test('Verificando se o botão e o campo email estão funcionando.', () => {
  render(<App />);

  const EMAIL_USER = 'email@email.com';

  const textEmail = screen.queryByTestId('id-email-user');
  expect(textEmail).not.toBeInTheDocument();

  const btnSend = screen.getByTestId('id-send');
  const inputEmail = screen.getByLabelText('Email');
  userEvent.type(inputEmail, EMAIL_USER);
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(screen.queryByTestId('id-email-user')).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
});

test('Não exibir a mensagem caso o email ainda não tenha sido enviado.', () => {
  render(<App />);
  const textEmail = screen.queryByTestId('id-email-user');
  const inputEmail = screen.getByLabelText('Email');
  const btnSend = screen.getByTestId('id-send');
  expect(textEmail).not.toBeInTheDocument()
  userEvent.type(inputEmail, 'alanymara@gmail.com')
  expect(textEmail).not.toBeInTheDocument()
  userEvent.click(btnSend);
  expect(screen.getByTestId('id-email-user')).toBeInTheDocument()
})