 import { ADD_TODO ,REMOVE_TODO, ADD_TODO_LOADING, ADD_TODO_SUCCESS,ADD_TODO_ERROR, GET_TODO_SUCCESS , GET_TODO_ERROR, GET_TODO_LOADING } from "./actionTypes"

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

export const getTodoSuccess =  (getdata) =>{
    return { 
        type : GET_TODO_SUCCESS,
        payload : getdata
    }
}
export const getTodoLoading =  () =>{
    return { 
        type : GET_TODO_LOADING
        
    }
}
export const getTodoError =  (err) =>{
    return { 
        type : GET_TODO_ERROR,
        payload : err
    }
}

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
});


