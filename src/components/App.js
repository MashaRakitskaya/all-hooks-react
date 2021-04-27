import React from 'react';
import Todos from "./Todos";
import Users from './Users';
import Header from './Header'
import * as api from "../utils/api";
import { useEffect,useState } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

function App() {
    const [todos, setTodos] = useState([]);
    const [users, setUser] = useState([]);
    function handleAddTodo() {

    }
    useEffect(() => {
        api.getInitialTodos()
        .then(response => setTodos(response))
        .catch(err => console.log(`Ошибка получения информации${err}`));
    },[]);

    useEffect(() => {
        api.getInitialUser()
        // .then(response => console.log(response))
        .then(response => setUser(response))
        .catch(err => console.log(`Ошибка получения информации${err}`));
    },[]);

    return(
        <div className="page" >
            <div className="page__container">
                <Header/>
                <Switch>
                    <Route path="/todos">
                        <Todos 
                            handleAddTodo={handleAddTodo}
                            todos={todos}
                            pageTitle={'todos'}
                        />
                    </Route>
                    <Route path="/users">
                        <Users
                            users={users}
                            pageTitle={'users'} 
                        />
                    </Route>
                    <Route>
                        <Redirect to="/todos" />
                    </Route>
                </Switch>
            </div>
            
        </div>    
    )
}
export default React.memo(App);
// export default App