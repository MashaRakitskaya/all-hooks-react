import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Switch>
                <Route path="/users">
                    <Link to="/todos" className="header__todos">
                        Todos
                    </Link>
                </Route>
                <Route path="/todos">
                    <Link to="/users" className="header__users">
                        Users
                    </Link>
                </Route>
                
            </Switch>
        </header>
    );
}
export default Header;