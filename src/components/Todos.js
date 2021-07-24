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
    // console.log(todos);
    const [todo, setTodo] = useState('');
    //useRef для работы с Dom элементами напрямую, не происходит рендеринг всего компонента 
    const [foto, setFoto] = useState(true);
    const [src, setRrc] = useState("");
    
    const ref = useRef(null);
    const refImg = useRef(null);
    const [clicked, setClicked] = useState(false);
    const numberTodos = useMemo(() => num(todos), [todos]);
    
    function handleChangeTodo(e) {
        setTodo(e.target.value);
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddTodo({
            title: todo,
        })
        setTodo('')
    }

    function handleChangeFoto(e) {
        setRrc(e.target.value);
    };

    function handleSubmitFoto(evt) {
        evt.preventDefault();
        setFoto(false);
    }

    function showSomething() {
        setClicked(s => !s);
        ref.current.style.visibility ="visible";
    }

    ////ФОТОREF
    const imgStyle = {
        width: "200px",
        height: "200px",
    };

    function refFunction() {
        console.log(refImg.current.src)
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

                <form className="add-todo__form" onSubmit={handleSubmitFoto} noValidate>
                    <input
                        value={src}
                        id='auth-title-input'
                        className="add-todo__input"
                        type="text"
                        name="todo"
                        placeholder="Add a фото"
                        required
                        onChange={handleChangeFoto}
                    />
                    <button onClick={handleSubmitFoto} className="add-todo__button" type="button">add url фото</button>
                </form>
                //ФОТО
                {
                    foto? <img onClick={refFunction} style={imgStyle} ref={refImg}  alt="ФОТО" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"/> 
                    : <img onClick={refFunction} style={imgStyle} ref={refImg}  alt="ФОТО" src={src}/>
                }
                
                
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