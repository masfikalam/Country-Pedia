import React, { useState, useEffect } from 'react';
import './Details.css'
import { useParams } from 'react-router-dom';

const Details = () => {
    // fetching country data
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data))
    }, [countryName]);
    
    // All country details
    if (country[0]){
        const {flag, name, area, region, nativeName, capital, callingCodes, demonym, population, timezones, currencies, languages} = country[0];

        return (
            <section id="details">
                <h2 className="name">{name}</h2>
                <img src={flag} alt="National Flag"/>
                <div className="more">
                <span>Area: {area} sq.km</span>
                <span>Region: {region}</span>
                <span>Native name: {nativeName}</span>
                <span>Capital: {capital}</span>
                <span>Phone Code: {callingCodes[0]}</span>
                <span>People: {demonym}</span>
                <span>Population: {(population).toLocaleString()}</span>
                <span>Timezone: {timezones[0]}</span>
                <span>Currency: {currencies[0].code} ({currencies[0].name})</span>
                <span>Language: {languages[0].name} ({languages[0].nativeName})</span>
                </div>
            </section>
        )
    } else {
        return <h2 className="loading">Loading...</h2>
    }
}

export default Details;