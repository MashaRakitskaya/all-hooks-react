import React from 'react';
import Todos from "./Todos";
import Users from './Users';
import Header from './Header'
import * as api from "../utils/api";
import { useEffect, useReducer } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
 
//отложеный вычесления для получения первоначального состояния reducer
//получаем обьект
//можем добавить состояние новое либо изменить текущее делая промежуточный перерасчет
function initializer(state){
    // console.log(state);
    // return state;
    //добавить состояние
    // return {...state, theme: 'dark'};
    return {...state};
}

//action {} благодоря которому используя switch меняет state в редьюсере и возвращать новый обьект 
 function reducer(state, action) {
     
    switch(action.type) {
        case 'todos': 
            return {
            ...state,
            todos: action.payload
            }
  
        case 'users': 
            return {
            ...state,
            users: action.payload
            }
        // case "reset":  
        //     return initializer(action.payload);
        default:
            return state;
    }
}

function App() {
    // const [todos, setTodos] = useState([]);
    // const [users, setUser] = useState([]);

    //сам useReducer возвращает [] 
    //1 элеме явл state, 2 элем явл дисптч функция передавая action в которую будем менять axtion в редьюсере
    //data {} в котором мы храним все состояния 
    const [data, dispatch] = useReducer(reducer, {todos:[], users:[]}, initializer)

    //data.todos
    //data.users

    function handleAddTodo({title}) {
        api.addTodos({title:title})
        // .then(response => console.log(response))
        // .then((result) => {
        //     setTodos([result, ...todos]);
        // })
        .then(response => {
            dispatch({type: 'todos', payload: [response, ...data.todos]})
        })
        .catch((err) => {
            console.log(`Ошибка отправки информации${err}`)
        })
    };

    function handleAddUser({name}) {
        api.addUsers({name:name})
        .then(response => {
            dispatch({type: 'users', payload: [response, ...data.users]})
        })
        .catch((err) => {
            console.log(`Ошибка отправки информации${err}`)
        })
    }

    useEffect(() => {
        // console.log(data);
        //можем изменить значение у ключа с todos:[] на todos:{}
        // dispatch({type: 'reset', payload:{todos:[], users:[]}})
        api.getInitialTodos()
        .then(response => {
            dispatch({type: 'todos', payload: response})
        })
        .catch(err => console.log(`Ошибка получения информации${err}`));
    },[]);

    useEffect(() => {
        api.getInitialUser()
        // .then(response => setUser(response))
        .then(response => {
            dispatch({type: 'users', payload: response})
        })
        .catch(err => console.log(`Ошибка получения информации${err}`));
    },[]);

    function handleUserDelete(user) {
        api.removeUser(user.id)
        .then((result) => {
            const removeCard = data.users.filter((c) => c.id !== user.id);
            // setPosts({...posts, data:removeCard});
            dispatch({type: 'users', payload: [result, ...data.users]})
        })
        .catch((err) => {
            console.log(`Ошибка отправки информации${err}`)
        })

    }

    return(
        <div className="page" >
            <div className="page__container">
                <Header/>
                <Switch>
                    <Route path="/todos">
                        <Todos 
                            handleAddTodo={handleAddTodo}
                            // todos={todos}
                            todos={data.todos}
                            pageTitle={'todos'}
                        />
                    </Route>
                    <Route path="/users">
                        <Users
                            handleAddUser={handleAddUser}
                            users={data.users}
                            pageTitle={'users'}
                            handleUserDelete={handleUserDelete}
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