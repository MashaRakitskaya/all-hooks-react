import React from 'react';

function User(props) {
    // console.log('User');
    function handleDeleteClick() {
        props.onUserDelete(props.user);
    };
    return(
        <article className="todo">
            <div className="todo__box">
                <h2 className="todo__text">{props.user.name}</h2>
                <button onClick={handleDeleteClick} className="" type="button">delete users</button>
            </div>
        </article>
    )
}
// export default User;
export default React.memo(User);