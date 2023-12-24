import React from 'react';

const RickAndMortyCharacter = ({rickAndMortyCharacter}) => {
    return (
        <div>
            <img src={rickAndMortyCharacter.image} alt={rickAndMortyCharacter.name}/>
            <h2>{rickAndMortyCharacter.name}</h2>
            <ul>
                <li>Status: {rickAndMortyCharacter.status}</li>
                <li>Species: {rickAndMortyCharacter.species}</li>
                <li>Gender: {rickAndMortyCharacter.gender}</li>
            </ul>
        </div>
    );
};

export default RickAndMortyCharacter;