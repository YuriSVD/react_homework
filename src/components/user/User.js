import React from 'react';

const User = ({user}) => {
    const {id, name, username, email, address, phone, website, company} = user;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>
                Address:
                <div>Street: {address.street}</div>
                <div>Suite: {address.suite}</div>
                <div>City: {address.city}</div>
                <div>Zipcode: {address.zipcode}</div>
                <div>Geo:
                    <div>Lat: {address.geo.lat}</div>
                    <div>Lng: {address.geo.lng}</div>
                </div>
            </div>
            <div>Phone: {phone}</div>
            <div>Website: {website}</div>
            <div>Company:
                <div>Name: {company.name}</div>
                <div>CatchPhrase: {company.catchPhrase}</div>
                <div>BS: {company.bs}</div>
            </div>
            <br/>
        </div>
    );
};

export default User;