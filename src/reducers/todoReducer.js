import { types } from "../components/types/types";

const initialState={
    todos:[],
    active: null
}


export const todosReducer = (state=initialState, action) => {

    switch (action.type) {
        
        case types.todosActive:
            return {
                ...state,
                active:{
                    ...action.payload
                }
            }

        case types.todoLoad:
            return{
                ...state,
                todos:[action.payload]
            }
    
        default:
            return state;
    }
}