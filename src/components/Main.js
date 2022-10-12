import React, { useState, useEffect } from 'react'
import searchIcon from '../images/search.svg'
import { Input } from 'react-input-component';
import axios from 'axios'

export default function Main() {
    const [pokemons, setPokemons] = useState([])
    const [pokemonDetail, setPokemonDetail] = useState("Pikachu")

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const getPokemons = async () => {
        try {
            let response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
            let pokemons = await response.data.results
            setPokemons(pokemons)
        } catch (err) {
            console.log(err.message)
        }
    }

    const getPokemonDetail = async (pokemon) => {
        try {
            let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            let data = await response.json()
            // let pokemonDetail = await response.data.results.url
            console.log(data, "ini detail")
            setPokemonDetail(pokemonDetail)
        } catch (err) {
            console.log(err.message)
        }

    }

    useEffect(() => {
        getPokemons()
    }, [pokemons])

    useEffect(() => {
        getPokemonDetail()
    }, [pokemonDetail])

    return (
        <div className="app-container">
            <h1>Stok Pokémon</h1>
            <div className="row">
                <div className="col">
                    <image src={searchIcon} />
                    <input type="text" className="search-box" placeholder="Cari Pokémon" />
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nama</th>
                                <th scope="col">Stok</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pokemons.map(pokemon => {
                                    console.log(pokemon)
                                    return (
                                        <tr>
                                            <td>{capitalizeFirstLetter(pokemon.name)}</td>
                                            <td>10 pcs</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
