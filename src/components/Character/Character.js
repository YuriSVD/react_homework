import React, {useEffect, useState} from 'react';
import axios from "axios";

const Character = ({characterLink}) => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios.create({baseURL: characterLink}).get("").then(value => value.data).then(value => setCharacter(value));
    }, [characterLink]);


    return (
        <>
            {character &&
                <div>
                    <img src={character.image} alt={character.name}/>
                    <h4>{character.id}. {character.name}</h4>
                    <ul>
                        <li>{character.gender}</li>
                        <li>{character.species}</li>
                        <li>{character.status}</li>
                    </ul>
                </div>}
        </>

    );
};

export {Character};