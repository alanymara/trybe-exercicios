import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App, { Home } from './App';

describe('teste da aplicação toda', () => {
  it('Deve renderizar o componente App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: 'Você está na página Início',
    });
    expect(homeTitle).toBeInTheDocument();
  });

  it('Deve renderizar o componente Sobre', () => {
    const {history} = renderWithRouter(<App />)
    const linkToAbout = screen.getByRole('link', {name: /sobre/i});
    expect(linkToAbout).toBeDefined(); // Mesma coisa de toBeInTheDocument

    userEvent.click(linkToAbout);

    const {location: {pathname}} = history;
    const title = screen.getByRole('heading', { name: /Você está na página Sobre/i, level:1});
    expect(pathname).toBe('/about')
    expect(title).toBeDefined();
    /* const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', { name: 'Sobre' });
    expect(aboutLink).toBeInTheDocument();
    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading',
      { name: 'Você está na página Sobre' });
    expect(aboutTitle).toBeInTheDocument(); */
  });

  it('Deve testar um caminho não existente e a renderização do Not Found', () => {
    const {history} = renderWithRouter(<App />);
    history.push('/pagina-nao-existe');

    const title = screen.getByRole('heading', {name: /Página não encontrada/i, level:1 })
    expect(title).toBeDefined();
   /*  const { history } = renderWithRouter(<App />);

    history.push('/pagina/que-nao-existe/');

    const notFoundTitle = screen.getByRole('heading',
      { name: 'Página não encontrada' });
    expect(notFoundTitle).toBeInTheDocument(); */
  });
  it('Verifica a página Home', () => {
    renderWithRouter(<Home />);
    const title = screen.getByRole('heading', {name: /Você está na página Início/i, level:1 });
    expect(title).toBeDefined();
  })
});