import React from 'react';
import Main from "./Main";
// import * as api from "../utils/api";
import { useEffect,useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);

    function handleAddTodo() {

    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(response => setTodos(response))
        .catch(err => console.log(`Ошибка получения информации${err}`));
    },[]);

    console.log(todos)
    return(
        <div className="page" >
            <div className="page__container">
                <Main
                    handleAddTodo={handleAddTodo}
                    todos={todos}
                />
            </div>
        </div>    
    )
}
export default App;