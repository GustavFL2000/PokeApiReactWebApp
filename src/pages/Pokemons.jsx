import '../styles/Pokemons.css';
import React, { useState, useEffect } from 'react'
import { get } from '../services/PokeService'
import { Link } from 'react-router';

function Pokemons() {
    const apiURL = 'https://pokeapi.co/api/v2/pokemon'
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function fetchPokemons() {
            try {
                let response = await get(apiURL);
                setPokemon(response.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPokemons()
    }, [])

    return (
        <div>
            {pokemon.map(p => (
                <Link to={`/Pokemons/${p.name}`} key={p.name}>
                    <h3>{p.name}</h3>
                </Link>
            ))}
        </div>
    );
}

export default Pokemons;