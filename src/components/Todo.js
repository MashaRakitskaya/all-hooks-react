import React from 'react';
// import { CurrentUserContext }  from "../contexts/CurrentUserContext";

function Todo(props) {

    return(
        <article className="todo">
            <div className="todo__box">
                <h2 className="todo__title">{props.todo.title}</h2>
            </div>
        </article>
    )
}
export default Todo;