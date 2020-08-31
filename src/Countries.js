import React from 'react';
import './Countries.css'
import { Link } from 'react-router-dom';

function Countries(props) {
    return (
      <div className="details">
        <Link className="what" to={"/" + props.country.name}>
          <h2 className="country-name">{props.country.name}</h2>
        </Link>
      </div>
  )}

export default Countries;