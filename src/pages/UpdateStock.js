import React, { useEffect, useState } from 'react'
import arrowIcon from '../images/arrow-forward.svg'
import editIcon from '../images/edit.svg'
import { Table, Button } from 'react-bootstrap';
import { Navigate, useNavigate, useParams } from 'react-router-dom'


function EditStockModal(props) {
    let { name } = useParams()
    const [input, setInput] = useState({})

    // let stockPcs = 1 * input.pcs
    // let stockLusin = 1 * input.lusin
    // let stockLusinToPcs = 12 * input.lusin
    // let totalPcs = stockPcs + stockLusinToPcs
    let navigate = useNavigate();


    const handleChange = e => {
        let newValue = {
            ...input,
            [e.target.name]: e.target.value,
        };
        setInput(newValue);
    };

    const saveChange = () => {
        navigate(`/update-stock/${name}`)
        var pokemonData = [];
        pokemonData = JSON.parse(localStorage.getItem("pokemon") || "[]");

        localStorage.setItem('pokemon', JSON.stringify(pokemonData));
    }
}

export default function UpdateStock() {
    let { name } = useParams()
    const [pokemonData, setPokemonData] = useState([]);
    const [note, setNote] = useState({})
    let navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);


    useEffect(() => {
        let pokemon = JSON.parse(localStorage.getItem('pokemon'));
        setPokemonData(pokemon)
        console.log(pokemon, "ini data apa")
        // if (pokemonData) {
        //     pokemonData.map(pokemon => {
        //         setPokemonData(pokemonData);
        //     })
        // }
    }, []);

    const handleChange = e => {
        let newValue = {
            ...note,
            [e.target.name]: e.target.value,
        };
        // console.log(newValue)
        // setNote(newValue);

    };

    // function updateNote(updatedData) {
    //     const pokemonUpdatedData = {
    //         ...JSON.parse(localStorage.getItem('pokemon')),
    //         ...updatedData
    //     };
    //     localStorage.setItem('pokemon', JSON.stringify(pokemonUpdatedData));
    // }

    const saveChange = () => {
        navigate(`/pokemon/${name}`)
        console.log(pokemonData, "//arr kosong")
        // pokemonData.push({
        //     pokemonName: name,
        //     pcs: stockPcs,
        //     lusin: stockLusin,
        //     lusinToPcs: stockLusinToPcs,
        //     total: totalPcs,
        //     history: [
        //         {
        //             date: new Date().toLocaleString(),
        //             activity: '',
        //             note: note,
        //             count: totalPcs - count,
        //             totalStock: totalPcs + count
        //         }
        //     ]
        // })
        // updateNote(pokemonData)

    }




    return (
        <div className="update-stock-page">
            <h1 className="update-stock-title">Konfirmasi update stok</h1>
            {
                pokemonData.map((pokemon, i) => {
                    if (pokemon.pokemonName == name) {
                        console.log(pokemon.pokemonName, "pokemonName", name, "name")
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
                    }
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
                            if (pokemon.pokemonName == name) {
                                console.log(pokemon.pokemonName, "pokemonName di confirm", name, "name di confirm")
                                return (
                                    <>
                                        <tr className="align-items-center">
                                            <td className="table-link">Hasil update stock</td>
                                            <td className="">{`${pokemon.pcs} pcs, ${pokemon.dozen} lusin (12s)`}</td>
                                            <td className="">{pokemon.total}</td>
                                            <td>
                                                <img src={editIcon} onClick={() => setModalShow(true)}></img>
                                            </td>
                                        </tr>
                                        <tr className="align-items-center">
                                            <td className="table-link">Total hasil stok opname</td>
                                            <td></td>
                                            <td className="">{pokemon.total}</td>
                                        </tr>
                                    </>
                                )
                            }
                        })
                    }
                </tbody>
            </Table>

            <div className="update-stock-note-group">
                <p className="update-stock-note-title">Catatan</p>
                <textarea className="update-stock-note-input" onChange={handleChange} placeholder="Contoh: stok awal"></textarea>
            </div>

            <div className="d-flex justify-content-end gap-2">
                <Button variant="primary" onClick={saveChange}>Simpan</Button>
                <Button variant="secondary">Batal</Button>
            </div>
        </div>
    )
}

