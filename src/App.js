import React, { useEffect, useState } from 'react';
import Details from './Details';
import './App.css';

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

    <main>
      {countries.map(country =><Details key={country.alpha3Code} country={country}></Details>)}
    </main>

    <footer>
      <h2>Developed by : <a href="https://fb.com/masfik.alam/">MASFIK</a></h2>
    </footer>
    </>
  );
}

export default App;