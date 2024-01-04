import React, {useEffect, useState} from 'react';

const Character = ({characterLink}) => {
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        fetch(characterLink)
            .then(value => value.json())
            .then(value => setCharacter(value));
    }, [characterLink]);
    return (
        <>
            {character && <div>
                <div>Id: {character.id}</div>
                <div>Name: {character.name}</div>
                <img src={character.image} alt={character.name}/>
            </div>}
        </>
    );
};

export default Character;