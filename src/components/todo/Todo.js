import React from 'react';

const Todo = ({todo}) => {
    const {userId, id, title, completed} = todo;
    return (
        <div>
            {id} {title}
        </div>
    );
};

export default Todo;