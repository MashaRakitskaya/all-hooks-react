import React from 'react';
// import * as api from "../utils/api";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import Todo from "./Todo";

function num(todos) {
    //не происходит повторный вызов функции(мемеизация значений функции)
    // console.log(todos);
    return todos.length
}

function Todos({todos, handleAddTodo}) {
    // console.count()
    console.log('Todos');
    // console.log(todos);
    const [todo, setTodo] = useState('');
    //useRef для работы с Dom элементами напрямую, не происходит рендеринг всего компонента 
    const ref = useRef(null);
    const [clicked, setClicked] = useState(false);
    const numberTodos = useMemo(() => num(todos), [todos]);
    // const numberTodos = num(todos);

    function handleChangeTodo(e) {
        setTodo(e.target.value);
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddTodo({
            title: todo,
        })
        setTodo('')
        // console.log(refe.current.focus());
    }

    function showSomething() {
        setClicked(s => !s);
        ref.current.style.visibility ="visible"
    }
    
    return(
        <main className="content">
            <section className="add-todo">
                <h1 className="add-todo__question">What's the Plan for Today?</h1>
                <div className="click-box">
                    <button onClick={showSomething} className="сlick" type="button">Click</button>
                    {clicked ? (
                        <div ref={ref} className="cat"></div>
                    ) : (
                        <div ref={ref} className="cat_hidden"></div>
                    )}
                </div>

                <form className="add-todo__form" onSubmit={handleSubmit} noValidate>
                    <input
                        value={todo}
                        id='auth-title-input'
                        className="add-todo__input"
                        type="text"
                        name="todo"
                        placeholder="Add a todo"
                        required
                        onChange={handleChangeTodo}
                    />
                    <button onClick={handleSubmit} className="add-todo__button" type="button">add Todo</button>
                </form>
            </section>

            <p className="count-todos">Number of todos: <span className="span">{numberTodos}</span></p>
            
            <section className="todos">
            {todos.map((item) => {
                    return(
                        <Todo
                            key={item.id}
                            todo={item}
                            // completeTodo={completeTodo}
                            // removeTodo={removeTodo}
                            // updateTodo={updateTodo}
                        />
                    )
                } 
            )}
        </section>
            
        </main>
    )
}
export default React.memo(Todos);