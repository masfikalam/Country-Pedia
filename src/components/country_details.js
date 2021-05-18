import React from "react";

const Country = ({ country, setIsOpen }) => {
  const {
    flag,
    name,
    area,
    region,
    nativeName,
    capital,
    callingCodes,
    demonym,
    population,
    timezones,
    currencies,
    languages,
  } = country;

  return (
    <section id="details">
      <div className="flex-1">
        <div className="photo">
          <h2 className="name">{name}</h2>
          <img src={flag} alt="National Flag" />
        </div>
        <div className="flex-2">
          <div className="one">
            <h3>
              Native name: <span>{nativeName}</span>
            </h3>
            <h3>
              Capital: <span>{capital}</span>
            </h3>
            <h3>
              Area: <span>{area} sq.km</span>
            </h3>
            <h3>
              Region: <span>{region}</span>
            </h3>
            <h3>
              Timezone: <span>{timezones[0]}</span>
            </h3>
          </div>
          <div className="two">
            <h3>
              People: <span>{demonym}</span>
            </h3>
            <h3>
              Population: <span>{population.toLocaleString()}</span>
            </h3>
            <h3>
              Phone Code: <span>{callingCodes[0]}</span>
            </h3>
            <h3>
              Currency:{" "}
              <span>
                {currencies[0].code} ({currencies[0].name})
              </span>
            </h3>
            <h3>
              Language:{" "}
              <span>
                {languages[0].name} ({languages[0].nativeName})
              </span>
            </h3>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="close">
          Close
        </button>
      </div>
    </section>
  );
};

export default Country;
