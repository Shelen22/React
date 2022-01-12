 import { ADD_TODO ,REMOVE_TODO, ADD_TODO_LOADING, ADD_TODO_SUCCESS,ADD_TODO_ERROR } from "./actionTypes"

export const addTodo = (data) => ({
    type: ADD_TODO,
    payload: data
});

export const addTodoLoading = () =>{
    return {
        type: ADD_TODO_LOADING,
    }
}
export const addTodoSuccess = (data) =>{
    return {
        type: ADD_TODO_SUCCESS,
        payload: data
    }
}
export const addTodoError = (err) =>{ 
    return {
        type: ADD_TODO_ERROR,
        payload: err
    }
}

export const removeTod0 = (id) => ({
    type: REMOVE_TODO,
    payload: id
});
