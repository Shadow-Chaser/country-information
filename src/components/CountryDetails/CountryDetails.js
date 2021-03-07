import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams()

    const [countryDetails, setCountryDetails] = useState([]);

    useEffect(()=> {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => {
           
            setCountryDetails(data[0])
        })


    }, [])
    
   
    const {name, capital, region} = countryDetails;
    return (
        <div>
            <h1>Name: {name}</h1>
            <h3>Capital: {capital}</h3>
            <h3>Region: {region}</h3>

            

        </div>
    );
};

export default CountryDetails;