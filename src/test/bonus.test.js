import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRedux from '../util';

describe('Testando o botão de desfazer', () => {
  const { getByLabelText, getByText, queryByText } = renderWithRedux(<App />)
  const inputTask = getByLabelText('Tarefa:');
  const addBtn = getByText(/adicionar/i);
  const undoBtn = getByText(/desfazer/i);
  test('Verificando se o botão desfaz uma tarefa adicionada', () => {
    expect(addBtn).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
    userEvent.type(inputTask, 'my task');
    userEvent.click(addBtn);
    expect(getByText('my task')).toBeInTheDocument();

    userEvent.click(undoBtn);

    expect(queryByText('my task')).not.toBeInTheDocument();
  });

});
