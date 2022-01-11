 import { ADD_TODO ,REMOVE_TODO} from "./actionTypes"

export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data
});

export const removeTod0 = (id) => ({
    type: REMOVE_TODO,
    payload: id
});