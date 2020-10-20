import React, { useState, useEffect } from 'react';
import './Details.css'
import { useParams } from 'react-router-dom';

const Details = () => {
    const {countryName} = useParams();
    const [country, setCountry] = useState({});

    // fetching country data
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [countryName]);
    
    // All country details
    const {flag, name, area, region, nativeName, capital, callingCodes, demonym, population, timezones, currencies, languages} = country;

    return (
        <section id="details">
            {
                country.timezones ? 
                <div className="flex">
                    <div className="one">
                        <h2 className="name">{name}</h2>
                        <img src={flag} alt="National Flag"/>
                    </div>
                    <div className="two">
                        <h3>Native name: <span>{nativeName}</span></h3>
                        <h3>Capital: <span>{capital}</span></h3>
                        <h3>Area: <span>{area} sq.km</span></h3>
                        <h3>Region: <span>{region}</span></h3>
                        <h3>Timezone: <span>{timezones[0]}</span></h3>
                    </div>
                    <div className="more">
                        <h3>People: <span>{demonym}</span></h3>
                        <h3>Population: <span>{(population).toLocaleString()}</span></h3>
                        <h3>Phone Code: <span>{callingCodes[0]}</span></h3>
                        <h3>Currency: <span>{currencies[0].code} ({currencies[0].name})</span>
                        </h3>
                        <h3>Language: <span>{languages[0].name} ({languages[0].nativeName})</span></h3>
                    </div>
                </div> :
                <h2 className="loading">Loading...</h2>
            }
        </section>
    )
}

export default Details;