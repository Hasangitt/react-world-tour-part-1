import { useEffect, useState } from "react";
import Country from "./Country/Country";
import './countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountry, setVisitedCountry] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountry = country => {
        console.log('add this visited country');
        const myVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(myVisitedCountry);
    }


    return (
        <div>
            <h3>Countries: {countries.length} </h3>
            <div>
                <h4>Visited Countries: {visitedCountry.length} </h4>
                <ul>
                    {
                    visitedCountry.map(country => <li key={country.cca2}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country
                         key={country.cca2} 
                         country={country}
                         handleVisitedCountry={handleVisitedCountry}
                         ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;