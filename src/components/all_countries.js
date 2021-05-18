import React from "react";

const AllCountries = ({ countries, showDetails, term }) => {
  return (
    <section id="all-countries">
      {countries
        .filter((c) => c.name.toLowerCase().includes(term.toLowerCase()))
        .map((country) => (
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
