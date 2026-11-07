import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { get } from '../services/PokeService';

export default function PokemonDetails() {
    const { name } = useParams();

    const [pokemon, setPokemon] = useState(null);

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`

    useEffect(() => {
        async function fetchPokemon() {
            const data = await get(apiUrl);
            setPokemon(data);
        }
        fetchPokemon();
    }, [name]);

    if (!pokemon) return <p>Vent venligst...</p>;

    return (
        <div>
            <h1>{pokemon.name}</h1>

            <img src={pokemon.sprites.front_default} />

            <h2>ID: {pokemon.id}</h2>
            <h2>Height: {pokemon.height}</h2>
            <h2>Weight: {pokemon.weight}</h2>

            <h3>Abilities:</h3>
            {pokemon.abilities.map(ability => (
                <p key={ability.ability.name}>
                    {ability.ability.name}
                </p>
            ))}

            <h3>Moves:</h3>
            {pokemon.moves.map(move => (
                <p key ={move.move.name}>
                    {move.move.name}
                </p>
            ))}
        </div>
    );
}