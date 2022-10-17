import React, { useEffect, useState } from 'react'
import arrowIcon from '../images/arrow-forward.svg'
import editIcon from '../images/edit.svg'
import { Table, Button } from 'react-bootstrap';

export default function UpdateStock() {
    const [pokemonData, setPokemonData] = useState([]);
    const [note, setNote] = useState('')

    useEffect(() => {
        let pokemonData = JSON.parse(localStorage.getItem('pokemon'));
        if (pokemonData) {
            pokemonData.map(pokemon => {
                setPokemonData(pokemonData);
            })
        }
    }, []);

    const handleChange = e => {
        let newValue = {
            ...note,
            [e.target.name]: e.target.value,
        };
        console.log(newValue)
        setNote(newValue);
    };

    const saveChange = () => {

    }

    return (
        <div className="update-stock-page">
            <h1 className="update-stock-title">Konfirmasi update stok</h1>
            {
                pokemonData.map(pokemon => {
                    return (
                        <>
                            <div>
                                <p className="update-stock-subtitle">Selisih</p>
                                <p className="update-stock-difference">{`${pokemon.total} pcs`}</p>
                            </div>
                            <div className="row d-flex justify-content-center ">
                                <div className="col">
                                    <p>Di sistem</p>
                                    <p>{`10 pcs`}</p>
                                </div>
                                <div className="col-1 align-center ">
                                    <img width="21" height="21" src={arrowIcon} />
                                </div>
                                <div className="col">
                                    <p>Hasil update stok</p>
                                    <p>544 pcs</p>
                                </div>
                            </div>
                        </>

                    )
                })


            }

            <Table className='col-xs-12 mt-4' responsive>
                <thead>
                    <tr className="th-border">
                        <th scope="col">Keterangan</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Jumlah</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        pokemonData.map(pokemon => {
                            return (
                                <tr className="align-items-center">
                                    <td className="table-link">Hasil update stock</td>
                                    <td className="">{`${pokemon.pcs} pcs, ${pokemon.lusin} lusin (12s)`}</td>
                                    <td className="">{pokemon.total}</td>
                                    <td>
                                        <img src={editIcon}></img>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

            <div className="update-stock-note-group">
                <p className="update-stock-note-title">Catatan</p>
                <textarea className="update-stock-note-input" onChange={handleChange} placeholder="Contoh: stok awal"></textarea>
            </div>

            <div className="d-flex justify-content-end gap-2">
                <Button variant="primary">Simpan</Button>
                <Button variant="secondary">Batal</Button>
            </div>
        </div>
    )
}
