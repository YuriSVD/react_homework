import React from 'react';

const Todo = ({todo}) => {
    const {id, title} = todo;
    return (
        <div>
            {id} {title}
        </div>
    );
};

export default Todo;