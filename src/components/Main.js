import React from 'react';
// import * as api from "../utils/api";
import { useEffect,useState } from "react";
import Todo from "./Todo";

function Main({todos, completeTodo, removeTodo, updateTodo}) {
    const [todo, setTodo] = useState('');

    function handleChangeTodo(e) {
        setTodo(e.target.value);
    };
    function handleSubmit(evt) {
        evt.preventDefault();

    }
    
    return(
        <main className="content">
            <section className="add-todo">
                {/* <h1>What's the Plan for Today?</h1> */}
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
            <section className="todos">
            {todos.map((item) => {
                    return(
                        <Todo
                            key={item.id}
                            todo={item}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo}
                        />
                    )
                } 
            )}
        </section>
            
        </main>
    )
}
export default Main;