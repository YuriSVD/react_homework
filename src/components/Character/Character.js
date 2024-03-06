import React from 'react';

const Character = ({character}) => {

    const {id, name, image, gender, species, status} = character;

    return (
        <div>
            <img src={image} alt={name}/>
            <h4>{id}. {name}</h4>
            <ul>
                <li>{gender}</li>
                <li>{species}</li>
                <li>{status}</li>
            </ul>
        </div>

    );
};

export {Character};