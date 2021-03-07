import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css'

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
    
   
    const {name, capital, region, subregion, population, area, timezones, nativeName} = countryDetails;
    const borders = countryDetails.borders;
   console.log(borders);
    return (
        <div className='country-detail-container'>
            <h3>Name: {name}</h3>
            <p>Native Name: {nativeName}</p>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area} km<sup>2</sup></p>
            <p>Timezones: {timezones}</p>

            {/* <p>Borders: {borders.map(border => <li>{border}</li>)}</p>  */}

          

            <p>Region: {region}</p>
            <p>Sub-Region: {subregion}</p>


            

        </div>
    );
};

export default CountryDetails;