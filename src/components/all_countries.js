import React from "react";

const AllCountries = ({ countries, showDetails }) => {
  return (
    <section id="all-countries">
      {countries.map((country) => (
        <div
          onClick={() => showDetails(country)}
          key={country.alpha3Code}
          className="country"
        >
          <h2 className="country-name">{country.name}</h2>
        </div>
      ))}
    </section>
  );
};

export default AllCountries;
