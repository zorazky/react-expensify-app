import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../components/AddExpensePage';

let onSubmit, history, wrapper;

beforeEach(() => {
   onSubmit = jest.fn();
   history = { push:jest.fn() };
   wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHAveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
