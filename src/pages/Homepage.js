import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import searchIcon from '../images/search.svg'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
const baseUrl = `https://pokeapi.co/api/v2/pokemon`

export default function Homepage() {
    const [pokemons, setPokemons] = useState([])
    const [query, setQuery] = useState("")
    const [search, setSearch] = useState("")
    let navigate = useNavigate();

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
                setSearch(search)
            }
        } catch (err) {
            console.log(err.message)
        }

    }

    useEffect(() => {
        getPokemons()
    }, [])



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
                                    // console.log(pokemon)
                                    return (
                                        <tr className="d-flex justify-content-between">
                                            <td key={i + 1} className="table-link" onClick={() => {
                                                navigate(`/pokemon/${pokemon.name}`)
                                            }} style={{ textTransform: 'capitalize' }}>{pokemon.name}</td>
                                            <td className="pokemon-stock">10 pcs</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div >
    )
}
