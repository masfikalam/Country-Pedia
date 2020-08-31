import React, { useState, useEffect } from 'react';
import './Details.css'
import { useParams } from 'react-router-dom';

const Details = () => {
    // fetching country data
    const {countryName} = useParams();
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [countryName]);
    
    // All country details
    let Name, Img, Area, Region, Native, Capital, Phone, People, Pop, Time, Currency, Language;

    countries.map(country => {
        let {flag, name, area, region, nativeName, capital, callingCodes, demonym, population, timezones, currencies, languages} = country;
        Name = <h2 className="name">{name}</h2>
        Img = <img src={flag} alt="National Flag"/>;
        Area = <span>Area: {area} sq.km</span>;
        Region = <span>Region: {region}</span>;
        Native = <span>Native name: {nativeName}</span>;
        Capital = <span>Capital: {capital}</span>;
        Phone = <span>Phone Code: {callingCodes[0]}</span>;
        People = <span>People: {demonym}</span>;
        Pop = <span>Population: {(population).toLocaleString()}</span>;
        Time = <span>Timezone: {timezones[0]}</span>;
        Currency = <span>Currency: {currencies[0].code} ({currencies[0].name})</span>;
        Language = <span>Language: {languages[0].name} ({languages[0].nativeName})</span>;
        return country;
    })
    

    return (
        <section id="details">
            {Name}
            {Img}
            <div className="more">
                {Area}
                {Region}
                {Native}
                {Capital}
                {Phone}
                {People}
                {Pop}
                {Time}
                {Currency}
                {Language}
            </div>
        </section>
    );
};

export default Details;