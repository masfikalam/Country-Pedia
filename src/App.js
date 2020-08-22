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
  );
}



function Details(props) {
  return (
    <div className="details">
      <img src={props.flag} width="250px" alt="National Flag"/>
      <h2>{props.name}</h2>
      <div className="more">
          <span>Area: {props.area} sq. km</span>
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



// function User() {
//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);
//   return(
//     <div>
//       <h3>Dynamic Users</h3>
//       {users.map(user => <li key={user.id}>{user.name}</li>)}
//     </div>
//   )
// }
// console.log(country)
// console.log(country)

// flag
// name
// native name
// short name
// phone code
// capital
// region
// population
// people
// area
// timezone
// currency
// language
// 'https://restcountries.eu/rest/v2/name/bangladesh?fullText=true'