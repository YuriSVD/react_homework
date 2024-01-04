import "./Episode.css"
import React from 'react';
import {Link} from "react-router-dom";

const Episode = ({item}) => {
    const {id, name, episode, characters} = item;
    return (
        <Link to={"/characters"} state={{...characters}} className={"Episode"}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Episode: {episode}</div>
        </Link>
    );
};

export default Episode;