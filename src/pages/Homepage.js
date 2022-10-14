import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import searchIcon from '../images/search.svg'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
const baseUrl = `https://pokeapi.co/api/v2/pokemon/`

export default function Homepage() {
    const [pokemons, setPokemons] = useState([])
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState("")

    // const navigateToPokemonDetail = () => {
    //     navigate('/pokemon');
    // }; 
    console.log(query)
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    const getPokemons = async () => {
        try {
            let response = await axios.get(`${baseUrl}`)
            let pokemons = await response.data.results
            setPokemons(pokemons)
        } catch (err) {
            console.log(err.message)
        }
    }

    const searchPokemon = async (pokemon, e) => {
        console.log("masuk seacrh")
        try {
            if (e.key === 'Enter') {
                let response = await axios.get(`${baseUrl} ${pokemon}`)
                let data = await response.json()
                // let pokemonDetail = await response.data.results.url
                // console.log(data, "ini detail")
                setSearch(search)
            }
        } catch (err) {
            console.log(err.message)
        }

    }

    useEffect(() => {
        getPokemons()
    }, [])

    // useEffect(() => {
    //     searchPokemon()
    // }, [])

    return (
        <div className="app-container">
            <h1 className="title">Stok Pokémon</h1>
            <div className="">
                <img src={searchIcon} className="search-icon" />
                <input type="text"
                    className="search-box"
                    placeholder="Cari Pokémon"
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyUp={searchPokemon} />
            </div>
            <div className="row">
                <div className="col">
                    <Table className="table d-flex row">
                        <thead>
                            <tr className="d-flex justify-content-between th-border">
                                <th scope="col">Nama</th>
                                <th scope="col" className="d-flex text-right">Stok</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(query)).map((pokemon, i) => {
                                    console.log(pokemon)
                                    return (
                                        <tr className="d-flex justify-content-between">
                                            <td key={i + 1} className="table-link">{capitalizeFirstLetter(pokemon.name)}</td>
                                            <td className="pokemon-stock">10 pcs</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}
