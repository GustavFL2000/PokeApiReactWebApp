import '../styles/Home.css';
import React, { useState, useEffect } from 'react'
import { get } from '../services/PokeService'


function Home() {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon'
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await get(apiURL);
                setPokemon(response.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return (

        <div>
            <h1>HomePage</h1>

            {pokemon.map(p => (
                <p key={p.name}>{p.name.toUpperCase()}  ---  Url: {p.url}</p>
                
            ))}
        </div>

    );
}

export default Home;