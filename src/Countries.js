import React from 'react';
import './Countries.css'
import { Link } from 'react-router-dom';

function Countries(props) {
    return (
    <Link className="link" to={"/" + props.country.name}>
      <div className="country">
        <h2 className="country-name">{props.country.name}</h2>
      </div>
    </Link>
  )}

export default Countries;