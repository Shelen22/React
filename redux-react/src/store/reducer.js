import { ADD_TODO, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS } from "./actionTypes";
import {REMOVE_TODO, ADD_TODO_LOADING, ADD_TODO_SUCCESS,ADD_TODO_ERROR } from "./actionTypes"


const init = {loading:false, todos:[], error:false};

export const reducer  = (state = init , {type, payload}) =>{
    switch(type){
        case ADD_TODO:
            return{
             ...state,
             todos : [...state.todos,payload]
            };
            case ADD_TODO_LOADING:
                return {
                    ...state,
                    loading : true
                }
                case ADD_TODO_SUCCESS:
                    return{
                        ...state,
                        todos:[...state.todos , payload],
                        loading : false
                    }
               case ADD_TODO_ERROR:
                   return{
                       ...state,
                       error: true,
                   }
                case GET_TODO_LOADING:
                    return {
                        ...state,
                        loading : true
                    }
                    case GET_TODO_SUCCESS:
                        return{
                            ...state,
                            todos:payload,
                            loading : false
                        }
                        case GET_TODO_ERROR: 
                        return{
                            ...state,
                            loading:false,
                            error: true,
                        }
            default:
                return state;
         }
}