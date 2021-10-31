import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRedux from '../util';

describe('Testando o botão de desfazer', () => {
  test('Verificando se o botão desfaz uma tarefa adicionada', () => {
    const { getByLabelText, getByText, queryByText } = renderWithRedux(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const addBtn = getByText(/adicionar/i);
    const undoBtn = getByText(/desfazer/i);
    expect(addBtn).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
    userEvent.type(inputTask, 'my task');
    userEvent.click(addBtn);
    expect(getByText('my task')).toBeInTheDocument();

    userEvent.click(undoBtn);

    expect(queryByText('my task')).not.toBeInTheDocument();
  });

  test('Verificano se o botão desfaz uma tarefa removida', () => {
    const { getByLabelText, getByText, queryByText } = renderWithRedux(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const addBtn = getByText(/adicionar/i);
    const undoBtn = getByText(/desfazer/i);
    userEvent.type(inputTask, 'i will be removed and brought back');
    userEvent.click(addBtn);

    const removeTask = getByText(/i will be removed and brought back/i);
    expect(removeTask).toBeInTheDocument();
    const removeBtn = getByText(/remover/i);
    expect(removeBtn.disabled).toBe(true);

    userEvent.click(removeTask);

    expect(removeBtn.disabled).toBe(false);
    userEvent.click(removeBtn);

    expect(removeTask).not.toBeInTheDocument();
    userEvent.click(undoBtn);

    const removeTaskBack = getByText(/i will be removed and brought back/i);
    expect(removeTaskBack).toBeInTheDocument();
    
    // expect(getByText(/i will be removed nd brought back/i)).toBeInTheDocument();

  })
});
