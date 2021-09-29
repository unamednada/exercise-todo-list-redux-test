import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />) // Caso precise de uma nova query adicione no object destructuring
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
    render(<Item content="Exercitar-se" />);
    const item = screen.getByText('Exercitar-se');
    expect(item).toBeInTheDocument();
  })
})
