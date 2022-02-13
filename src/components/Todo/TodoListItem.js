import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle, handleEdit}) => {

    return (
        <li
            key={ todo.id }
            className="list-group-item pointer"
        > 
            <p 
                className={`${todo.done && 'complete-todo'}`}
                onClick={()=> handleToggle(todo.id)}
            > 
                { index + 1 }. {todo.desc} 
            </p>
        
            <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>

        </li>
    )
}
