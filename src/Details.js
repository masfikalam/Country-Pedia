import React from 'react';
import './Details.css'

function Details(props) {
    // Destructuring all country details
    let {flag, name, area, region, nativeName, capital, callingCodes, demonym, population, timezones, currencies, languages} = props.country;

    return (
      <div className="details">
        <img src={flag} alt="National Flag"/>
        <h2>{name}</h2>
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
      </div>
  )}

export default Details;