import React from 'react';

const RickAndMortyCharacter = ({rickAndMortyCharacter}) => {
    const {id, name, status, species, gender, image} = rickAndMortyCharacter;
    return (
        <div>
            <img src={image} alt={name}/>
            <h2>{id} {name}</h2>
            <ul>
                <li>Status: {status}</li>
                <li>Species: {species}</li>
                <li>Gender: {gender}</li>
            </ul>
        </div>
    );
};

export default RickAndMortyCharacter;