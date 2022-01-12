import { createStore } from 'redux';
import { reducer as TodoReducer } from './reducer.js';

export const store = createStore(TodoReducer)