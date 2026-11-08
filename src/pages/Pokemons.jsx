import '../styles/Pokemons.css';
import React, { useState, useEffect } from 'react'
import { get } from '../services/PokeService'
import { Link } from 'react-router';

function Pokemons() {

    const [pokemonGen1, setPokemonGen1] = useState([]);
    const [pokemonGen2, setPokemonGen2] = useState([]);
    const [pokemonGen3, setPokemonGen3] = useState([]);
    const [pokemonGen4, setPokemonGen4] = useState([]);
    const [pokemonGen5, setPokemonGen5] = useState([]);
    const [pokemonGen6, setPokemonGen6] = useState([]);
    const [pokemonGen7, setPokemonGen7] = useState([]);
    const [pokemonGen8, setPokemonGen8] = useState([]);
    const [pokemonGen9, setPokemonGen9] = useState([]);
    //Ved tilføjelse af flere genration gives der plads i css med grid-template-columns: repeat(9, 1fr);
    //Lige nu er der palds til de seneste 9 generationer

    useEffect(() => {
        async function fetchPokemons() {
            try {
                const [responseGen1, responseGen2, responseGen3, responseGen4, responseGen5, responseGen6, responseGen7, responseGen8, responseGen9] = await Promise.all([
                    get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'),
                    get('https://pokeapi.co/api/v2/pokemon?offset=151&limit=100'),
                    get('https://pokeapi.co/api/v2/pokemon?offset=251&limit=135'),
                    get('https://pokeapi.co/api/v2/pokemon?offset=386&limit=107'),
                    get('https://pokeapi.co/api/v2/pokemon?offset=493&limit=156'),
                    get('https://pokeapi.co/api/v2/pokemon?offset=649&limit=72'),
                    get('https://pokeapi.co/api/v2/pokemon?offset=721&limit=88'),
                    get('https://pokeapi.co/api/v2/pokemon?offset=809&limit=96'),
                    get('https://pokeapi.co/api/v2/pokemon?offset=905&limit=120')

                ]);

                setPokemonGen1(responseGen1.results);
                setPokemonGen2(responseGen2.results);
                setPokemonGen3(responseGen3.results);
                setPokemonGen4(responseGen4.results);
                setPokemonGen5(responseGen5.results);
                setPokemonGen6(responseGen6.results);
                setPokemonGen7(responseGen7.results);
                setPokemonGen8(responseGen8.results);
                setPokemonGen9(responseGen9.results);

            } catch (error) {
                console.log(error);
            }
        }

        fetchPokemons();
    }, []);


    return (
        <div className="pokemon-container">

            <div className="pokemon-generation">
                <h2>Generation 1</h2>

                {pokemonGen1.map(p => {
                    const id = p.url.split('/').filter(Boolean).pop();

                    return (
                        <Link className="pokemon" to={`/Pokemons/${p.name}`} key={p.name}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                            <h3>{p.name.toUpperCase()}</h3>
                        </Link>
                    );
                })}
            </div>

            <div className="pokemon-generation">
                <h2>Generation 2</h2>

                {pokemonGen2.map(p => {
                    const id = p.url.split('/').filter(Boolean).pop();

                    return (
                        <Link className="pokemon" to={`/Pokemons/${p.name}`} key={p.name}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                            <h3>{p.name.toUpperCase()}</h3>
                        </Link>
                    );
                })}
            </div>

            <div className="pokemon-generation">
                <h2>Generation 3</h2>

                {pokemonGen3.map(p => {
                    const id = p.url.split('/').filter(Boolean).pop();

                    return (
                        <Link className="pokemon" to={`/Pokemons/${p.name}`} key={p.name}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                            <h3>{p.name.toUpperCase()}</h3>
                        </Link>
                    );
                })}
            </div>

            <div className="pokemon-generation">
                <h2>Generation 4</h2>

                {pokemonGen4.map(p => {
                    const id = p.url.split('/').filter(Boolean).pop();

                    return (
                        <Link className="pokemon" to={`/Pokemons/${p.name}`} key={p.name}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                            <h3>{p.name.toUpperCase()}</h3>
                        </Link>
                    );
                })}
            </div>

            <div className="pokemon-generation">
                <h2>Generation 5</h2>

                {pokemonGen5.map(p => {
                    const id = p.url.split('/').filter(Boolean).pop();

                    return (
                        <Link className="pokemon" to={`/Pokemons/${p.name}`} key={p.name}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                            <h3>{p.name.toUpperCase()}</h3>
                        </Link>
                    );
                })}
            </div>

            <div className="pokemon-generation">
                <h2>Generation 6</h2>

                {pokemonGen6.map(p => {
                    const id = p.url.split('/').filter(Boolean).pop();

                    return (
                        <Link className="pokemon" to={`/Pokemons/${p.name}`} key={p.name}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                            <h3>{p.name.toUpperCase()}</h3>
                        </Link>
                    );
                })}
            </div>

            <div className="pokemon-generation">
                <h2>Generation 7</h2>

                {pokemonGen7.map(p => {
                    const id = p.url.split('/').filter(Boolean).pop();

                    return (
                        <Link className="pokemon" to={`/Pokemons/${p.name}`} key={p.name}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                            <h3>{p.name.toUpperCase()}</h3>
                        </Link>
                    );
                })}
            </div>

            <div className="pokemon-generation">
                <h2>Generation 8</h2>

                {pokemonGen8.map(p => {
                    const id = p.url.split('/').filter(Boolean).pop();

                    return (
                        <Link className="pokemon" to={`/Pokemons/${p.name}`} key={p.name}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                            <h3>{p.name.toUpperCase()}</h3>
                        </Link>
                    );
                })}
            </div>

            <div className="pokemon-generation">
                <h2>Generation 9</h2>

                {pokemonGen9.map(p => {
                    const id = p.url.split('/').filter(Boolean).pop();

                    return (
                        <Link className="pokemon" to={`/Pokemons/${p.name}`} key={p.name}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                            <h3>{p.name.toUpperCase()}</h3>
                        </Link>
                    );
                })}
            </div>

        </div>
    );
}

export default Pokemons;