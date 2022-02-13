import { db } from "../firebase/firebase-config";
import { types } from "../components/types/types";



export const startNewTodo = () => {

    return async(dispatch, getState)  => {

        const {uid}= getState().auth;

        const newTodo = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/todos/todo`).add(newTodo)

        console.log(doc)
        dispatch( activeTodo ( doc.id, newTodo) );

    }
}

export const activeTodo = (id, todo) => ({
    type: types.todosActive,
    payload: {
        id,
        ...todo
    }
})

export const setTodo = (todos) => ({
    type: types.todoLoad,
    payload: todos
})