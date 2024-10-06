import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
    // console.log(country);

    const {name, flags, population, area, cca2} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={`country ${visited ? 'visited' : 'visited-soon'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca2}</p>
            <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'coming soon'}</button>
            {visited ? 'i have visited' : 'coming soon'}
        </div>
    );
};

export default Country;