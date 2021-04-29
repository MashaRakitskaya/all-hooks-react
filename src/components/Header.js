import React, { useRef } from 'react';
import { Link, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Header() {
    const refTodos = useRef(null);
    const refUsers = useRef(null);

    function handleClick() {
        refUsers.current.style.color= '#ffffff'
        refTodos.current.style.color= '#ff95f1'
    }

    function handleClickUsers() {
        refTodos.current.style.color= '#ffffff'
        refUsers.current.style.color= '#ff95f1'
    }
    return (
        <header className="header">
            <Switch>
                <ul className="header__links">
                    <li onClick={handleClick} className="header__link">
                        <Link ref={refTodos} to="/todos" className="header__todos">
                            Todos
                        </Link>
                    </li>

                    <li className="header__link">
                        <Link ref={refUsers} onClick={handleClickUsers} to="/users" className="header__users">
                            Users
                        </Link>
                    </li>
                </ul>
            </Switch>
        </header>
    );
}
export default Header;