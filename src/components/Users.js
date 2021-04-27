import React from 'react';
import User from "./User";

function Users({users}) {
    
    return(
        <main className="content">
            <section className="todos">
            {users.map((item) => {
                    return(
                        <User
                            key={item.id}
                            user={item}
                        />
                    )
                } 
            )}
        </section>
            
        </main>
    )
}
export default React.memo(Users);