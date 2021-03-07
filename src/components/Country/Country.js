import React from 'react';

const Country = (props) => {
    const {name} = props.country;
    return (
        <div className>
            <h3>{name}</h3>
            <button>Get Details</button>
        </div>
    );
};

export default Country;