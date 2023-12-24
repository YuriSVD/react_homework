import React from 'react';

const Simpson = ({simpson}) => {
    const {name, surname, info, photo} = simpson;
    return (
        <div className="simpsonDiv">
            <img src={photo} alt={name}/>
            <h2>{name} {surname}</h2>
            <p>{info}</p>
        </div>
    );
};

export default Simpson;