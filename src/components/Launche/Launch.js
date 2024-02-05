import React from 'react';

const Launch = ({launch}) => {
    const {mission_name, launch_year, links} = launch;
    const photo = links.mission_patch_small;
    return (
        <div>
            <img src={photo} alt={mission_name}/>
            <h2>{mission_name}, {launch_year} year</h2>
        </div>
    );
};

export default Launch;