import React, { useEffect, useState } from 'react';
import Countries from './Countries';
import Details from './Details';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  // Getting country data
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
    
    <h4 id="total">Information of {countries.length} countries in a single page!</h4>
   
    <Router>
      <Route path="/" exact>
        <main>
          {countries.map(country =><Countries key={country.alpha3Code} country={country}></Countries>)}
        </main>
      </Route>
      <Route path="/:countryName">
        <Details></Details>
      </Route>
    </Router>
    

    <footer>
      <h3>Developed by : <a href="https://fb.com/masfik.alam/">MASFIK</a></h3>
    </footer>
    </>
  );
}

export default App;