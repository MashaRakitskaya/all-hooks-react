import React from 'react';

function Todo(props) {
console.log('mama');
    return(
        <article className="todo">
            <div className="todo__box">
                <h2 className="todo__text">{props.todo.title}</h2>
            </div>
        </article>
    )
}
export default React.memo(Todo);
// export default Todo;