import React from 'react';

function User(props) {
console.log('User');
    return(
        <article className="todo">
            <div className="todo__box">
                <h2 className="todo__text">{props.user.name}</h2>
            </div>
        </article>
    )
}
// export default User;
export default React.memo(User);