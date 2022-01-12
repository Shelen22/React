import { createStore } from 'redux';
import { reducer as TodoReducer } from './store/store.js';

export const store = createStore(TodoReducer)