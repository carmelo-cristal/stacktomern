import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([])
    const [rangevalue, setRangevalue] = useState(36);
    const [selectedRadio, setSelectedRradio] = useState('');
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    // les useeffet se jouer lorsque les composant est monter
    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then((res) => setData(res.data));

    }, [])
    return (
        <div className='countries'>
            <ul className='radio-container'>
                <input type='range' min='1' max='250'
                    defaultValue={rangevalue}
                    onChange={(e) => setRangevalue(e.target.value)} />
                {radios.map((continent) => (
                    <li>
                        <input type='radio' id={continent} name='continentRadio'
                            checked={continent === selectedRadio}
                            onChange={(e) => setSelectedRradio(e.target.id)} />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            {selectedRadio && <button onClick={() => setSelectedRradio('')}>
                annuler la recherche</button>}
            <h1>Countries</h1>
            <ul>
                {
                    data
                        .filter((country) => country.continents[0].includes(selectedRadio))
                        .sort((a, b) => b.population - a.population)
                        .slice(0, rangevalue)
                        .map((country, index) => (
                            <Card key={index} country={country} />
                        ))}
            </ul>
        </div>
    );
};

export default Countries;