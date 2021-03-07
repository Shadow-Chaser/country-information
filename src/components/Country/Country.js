import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name} = props.country;
    // console.log(name);
    return (
        <div>
            <h3>{name}</h3>
            <Link to={`/country/${name}`}>
                <button>Get Details</button>
            </Link>
        </div>
    );
};

export default Country;