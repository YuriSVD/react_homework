import React, {useEffect, useState} from 'react';

import Launch from "../Launche/Launch";
import {spaceXService} from "../../services/spacex.service";

const Launches = () => {
    const [launches, setLaunches] = useState([]);
    useEffect(() => {
        spaceXService.getAll().then(value => value.data).then(value => setLaunches(value));
    }, []);
    return (
        <div>
            {launches.filter(value => value.launch_year !== "2020").map((launch, index) => <Launch launch={launch} key={index}/>)}
        </div>
    );
};

export default Launches;