import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRedux from '../util';

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    renderWithRedux(<App />);
    const addBtn = screen.getByRole('button', {
      name: "Adicionar",
    });
    expect(addBtn).not.toBeNull();
    expect(addBtn.value).toBe("Adicionar");
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    renderWithRedux(<App />);
    const input = screen.getByLabelText(/tarefa/i);
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'Estudar');
    const addBtn = screen.getByRole('button', {
      name: "Adicionar",
    });
    userEvent.click(addBtn);
    
    const task = screen.getByText('Estudar');
    expect(task).not.toBeNull();
  });

  test('Ao adicionar múltiplas tarefas, elas são renderizadas na tela', () => {
    renderWithRedux(<App />);
    const input = screen.getByLabelText(/tarefa/i);
    expect(input).toBeInTheDocument();
    const addBtn = screen.getByRole('button', {
      name: "Adicionar",
    });
    userEvent.type(input, 'Estudar');
    userEvent.click(addBtn);
    
    userEvent.type(input, 'Exercícios');
    userEvent.click(addBtn);
    
    userEvent.type(input, 'Lazer');
    userEvent.click(addBtn);
    
    const taskList = screen.getAllByRole('listitem');
    expect(taskList.length).toBe(3);
  })
});
