import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';
import renderWithRedux from '../util';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    renderWithRedux(<App />) // Caso precise de uma nova query adicione no object destructuring
    const btnAdd = screen.getByRole('button', { name: /adicionar/i });
    const input = screen.getByLabelText(/tarefa/i);
    listTodo.forEach((item) => {
      userEvent.type(input, item);
      userEvent.click(btnAdd);
    })
    const todoList = screen.getAllByRole('listitem');
    expect(todoList.length).toBe(3);
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    renderWithRedux(<Item content="Exercitar-se" />);
    const item = screen.getByText('Exercitar-se');
    expect(item).toBeInTheDocument();
  })
})
