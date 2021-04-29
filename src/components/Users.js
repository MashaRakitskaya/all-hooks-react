import React, { useCallback, useState, useEffect, useRef }  from 'react';
import User from "./User";
import { CustomInput } from './CustomInput'

function Users({users, handleAddUser, handleUserDelete}) {
    console.log('Users');
    const [numberUsers, setNumberUsers] = useState(0);
    const [user, setUser] = useState('');

    // const addUsers = useCallback(() => {
    //     setNumberUsers(users.length)
    // }, [users]);

    // useEffect(() => {
    //     addUsers()
    // }, [addUsers]);
    const addUsers = useCallback(() => {
        setNumberUsers(users.length)
    }, [users]);
    
    useEffect(() => {
        addUsers()
    }, [addUsers]);

    function handleChangeUser(e) {
        setUser(e.target.value);
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAddUser({
            name: user,
        })
        setUser('')
        // console.log(refe.current.focus());
    }

    const inputEl = useRef(null)
    useEffect(() => {
        //прокинуть функцию фокус
        inputEl.current.focus()
    }, [])
    
    return(
        <main className="content">
            <form className="add-todo__form" onSubmit={handleSubmit} noValidate>
                    {/* <input
                        value={user}
                        id='auth-title-input'
                        className="add-todo__input"
                        type="text"
                        name="user"
                        placeholder="Add a user"
                        required
                        onChange={handleChangeUser}
                    /> */}
                    <CustomInput
                        value={user}
                        name="user"
                        id="auth-title-input"
                        onChange={handleChangeUser}
                        ref={inputEl}
                    />
                    <button onClick={handleSubmit} className="add-todo__button" type="button">add Users</button>
                </form>
            <section className="todos">
            <p className="count-todos">Number of users: <span className="span">{numberUsers}</span></p>
            {/* <button onClick={() => setNumberUsers(0)} className="" type="button">delete users</button> */}
            {users.map((item) => {
                    return(
                        <User
                            key={item.id}
                            user={item}
                            onUserDelete={handleUserDelete}
                        />
                    )
                } 
            )}
        </section>
            
        </main>
    )
}
export default React.memo(Users);