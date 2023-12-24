import React, {useEffect, useState} from 'react';
import Launch from "../launche/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(value => setLaunches(value));
    }, []);
    return (
        <div>
            {launches.filter(value => value.launch_year !== "2020").map((launch, index) => <Launch launch={launch} key={index}/>)}
        </div>
    );
};

export default Launches;