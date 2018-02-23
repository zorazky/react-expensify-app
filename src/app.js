import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import { setTextFilter, sortByAmount,sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();


store.dispatch(addExpense({ description: 'water bill', amount: 500, createdAt: -21000}));
store.dispatch(addExpense({ description: 'gas bill', amount: 50600, createdAt: -20000}));
store.dispatch(addExpense({ description: 'rent', amount: 9000, createdAt: 1000}));

//store.dispatch(sortByDate());

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (

  <Provider store={store}>
    <AppRouter />
  </Provider>

);

ReactDOM.render(jsx, document.getElementById('app'));
