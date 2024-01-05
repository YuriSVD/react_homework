import React, {useEffect, useState} from 'react';
import {characterService} from "../../services/character.service";

const Character = ({characterLink}) => {
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        characterService.getCharacterByLink(characterLink)
            .then(value => value.data)
            .then(value => setCharacter(value));
    }, []);
    return (
        <>
            {character && <div>
                <div>
                    {character.id}. {character.name}
                </div>
                <img src={character.image} alt={character.name}/>
            </div>}
        </>
    );
};

export default Character;