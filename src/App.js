import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data => setCountries(data))
  }, []);

  return (
    <>
    <header>
      <h1>Country Pedia</h1>
      <h3>Nations Details</h3>
    </header>
    
    <main>
      {countries.map(country =>
      <Details
       flag={country.flag}
       name={country.name} 
       native={country.nativeName} 
       capital={country.capital} 
       phone={country.callingCodes[0]} 
       area={country.area} 
       region={country.region} 
       population={country.population} 
       timezones={country.timezones[0]} 
       people={country.demonym} 
       money={country.currencies[0].code} 
       moneyName={country.currencies[0].name} 
       lang={country.languages[0].name} 
       nativeLang={country.languages[0].nativeName}>
      </Details>)}
    </main>

    <footer>
      <h2>Developed by : <a href="https://fb.com/masfik.alam/" target="_blank">MASFIK</a></h2>
    </footer>
    </>
  );
}



function Details(props) {
  return (
    <div className="details">
      <img src={props.flag} alt="National Flag"/>
      <h2>{props.name}</h2>
      <div className="more">
          <span>Area: {props.area} sq.km</span>
          <span>Region: {props.region}</span>
          <span>Native name: {props.native}</span>
          <span>Capital: {props.capital}</span>
          <span>Phone Code: {props.phone}</span>
          <span>People: {props.people}</span>
          <span>Population: {(props.population).toLocaleString()}</span>
          <span>Timezone: {props.timezones}</span>
          <span>Currency: {props.money} ({props.moneyName})</span>
          <span>Language: {props.lang} ({props.nativeLang})</span>
      </div>
    </div>
)}


export default App;



// 'https://restcountries.eu/rest/v2/name/bangladesh?fullText=true'