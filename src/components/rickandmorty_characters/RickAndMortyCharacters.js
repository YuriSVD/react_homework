import React from 'react';
import RickAndMortyCharacter from "../rickandmorty_character/RickAndMortyCharacter";

const RickAndMortyCharacters = ({rickAndMortyCharacters}) => {
    return (
        <div>
            {rickAndMortyCharacters.map(rickAndMortyCharacter => <RickAndMortyCharacter rickAndMortyCharacter={rickAndMortyCharacter} key={rickAndMortyCharacter.id}/>)}
        </div>
    );
};

export default RickAndMortyCharacters;