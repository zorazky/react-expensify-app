import { createStore } from 'redux';


//action generator
const incrementCount = ({ incrementBy = 1 } = {}) => ({

  type: 'INCREMENT',
  incrementBy

});

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});
const setCount = ({ count }) => ({
  type: 'SET',
  count
});
const resetCount = () => ({
  type: 'RESET'
});


//reducer

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }


}
const store = createStore(countReducer);
/* how to stop store subscribe
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

unsubscribe();
*/

store.subscribe(() => {
  console.log(store.getState());
});



store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 3}));

store.dispatch(setCount({ count: 101 }));
