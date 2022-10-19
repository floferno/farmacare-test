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
        pokemonData.history.push({
            date: new Date(),
            activity: 'Stok awal',
            note: 'test note',
            count: 0,
            totalStock: 0
        })
        localStorage.setItem('pokemon', JSON.stringify(pokemonData));
    }
}

export default function UpdateStock() {
    let { name } = useParams()
    let navigate = useNavigate();
    const [pokemonData, setPokemonData] = useState([]);
    const [note, setNote] = useState({})
    const [modalShow, setModalShow] = useState(false);





    useEffect(() => {
        let pokemon = JSON.parse(localStorage.getItem('pokemon') || "[]");
        setPokemonData(pokemon)
        // console.log(pokemon, "ini data apa")
        // if (pokemonData) {
        //     pokemonData.map(pokemon => {
        //         setPokemonData(pokemonData);
        //     })
        // }
    }, []);

    const handleChange = e => {
        //ambil data pokemon
        let pokemonData = JSON.parse(localStorage.getItem('pokemon'))
        // console.log(pokemonData, "ini di updated")
        // let updatedPokemonData =
        let addNote = {
            ...note,
            [e.target.name]: e.target.value,
        };
        // console.log(addNote, "object add Note // dinamis")
        // console.log(pokemonData[0].history, "// obejct of pokemon sudah ada note tp masih sejajar history")


        pokemonData[0].history = {
            ...pokemonData[0],
            note: note
        }
        console.log(pokemonData[0].history, "ini updated history")

        setNote(addNote);



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
        console.log(pokemonData, "ini pokemon data // arr of object")
        localStorage.setItem('pokemon', JSON.stringify(pokemonData));
        JSON.parse(localStorage.getItem('pokemon'))
        // Object.assign(myObject, { test4: 'test4' })
        // Object.assign(pokemonData)
        // if (pokemonData[0].pokemonName == name) {
        //     let updatedPokemonDataHistory = pokemonData[0].history[0]
        //     updatedPokemonDataHistory = note
        //     console.log(updatedPokemonDataHistory, "updated data history")
        //     localStorage.setItem('pokemon', JSON.stringify(pokemonData));

        // }
        // const elementsIndex = pokemonData.findIndex(element => element.pokemonName == name)
        // console.log(elementsIndex, "el poke data")
        // let newArray = [...pokemonData]
        // newArray[elementsIndex] = { ...newArray[elementsIndex], note: note }
        // setPokemonData({
        //     pokemon: newArray,
        // });
        // localStorage.setItem('pokemon', JSON.stringify(pokemonData));
        // addNoteHistory()

    }

    // const addNoteHistory = (historyId, note) => {
    //     const data = localStorage.getItem('pokemon')
    //     console.log(data, "ini data apan nih di addnote history")
    //     // const dataForEdit = data[0].history.filter(_ => _.id === history.id)[0]
    //     // const dataWithoutDataForEdit = data.history.filter(_.id !== historyId)

    //     // localStorage.setItem("pokemon", data.JSON.stringify({
    //     //     ...data, history: [...dataWithoutDataForEdit,
    //     //     {
    //     //         ...dataForEdit,
    //     //         note
    //     //     }]
    //     // }))
    // }




    return (
        <div className="update-stock-page">
            <h1 className="update-stock-title">Konfirmasi update stok</h1>
            {
                pokemonData.map((pokemon, i) => {
                    // if (pokemon.pokemonName == name) { //
                    // console.log(pokemon.pokemonName, "pokemonName", name, "name di confirm")
                    console.log(pokemon.history, "ini history di confirmation page")
                    console.log(pokemon.history[0].note, "ini note di confirmation page")
                    let historyArr = pokemon.history


                    return (
                        <>
                            <div>
                                <p className="update-stock-subtitle">Selisih</p>
                                <p className="update-stock-difference">{`${pokemon.total} pcs`}</p>
                            </div>
                            <div className="row d-flex justify-content-center ">
                                <div className="col">
                                    <p>Di sistem</p>
                                    <p>{`pcs`}</p>
                                </div>
                                <div className="col-1 align-center ">
                                    <img width="21" height="21" src={arrowIcon} alt="Arrow Icon" />
                                </div>
                                <div className="col">
                                    <p>Hasil update stok</p>
                                    <p>{`pcs`}</p>
                                </div>
                            </div>
                        </>

                    )
                    // }
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
                        pokemonData.map((pokemon, i) => {
                            if (pokemon.pokemonName == name) {
                                console.log(pokemon.pokemonName, "pokemonName di confirm", name, "name di confirm")
                                return (
                                    <>
                                        <tr className="align-items-center">
                                            <td className="table-link">Hasil update stock</td>
                                            <td className="">{`${pokemon.pcs ? pokemon.pcs : 0} pcs, ${pokemon.dozen ? pokemon.dozen : 0} lusin (12s)`}</td>
                                            <td className="">{pokemon.total ? pokemon.total : 0}</td>
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
                <textarea className="update-stock-note-input" name="note" onChange={handleChange} placeholder="Contoh: stok awal"></textarea>
            </div>

            <div className="d-flex justify-content-end gap-2">
                <Button variant="primary" onClick={saveChange} className="modal-save-button">Simpan</Button>
                <Button variant="secondary" className="modal-cancel-button">Batal</Button>
            </div>
        </div>
    )
}

