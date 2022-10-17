// import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import prevPageIcon from '../images/prevPage.svg'
// import { Table, Modal, Container, Row, Col, Form } from 'react-bootstrap';
// import { useNavigate, useParams } from 'react-router-dom'

// function UpdateStockModal(props) {
//     let { name } = useParams()
//     let initialValue = [{}]
//     const [pokemons, setPokemons] = {
//         date: new Date(),
//         pokemonName: name,
//         pcs: 0,
//         lusin: 0
//     }
//     // const [input, setInput] = useState()
//     const [pokemon, setPokemon] = useState(initialValue)

//     let stockPcs = 1 * pokemons.pcs
//     let stockLusin = 12 * pokemons.lusin
//     let totalPcs = stockPcs + stockLusin
//     let navigate = useNavigate();


//     const handleChange = e => {
//         let newValue = {
//             ...pokemons,
//             [e.target.name]: e.target.value,
//         };
//         setPokemons(newValue);
//     };

//     useEffect(() => {
//         setPokemons([pokemons])
//     }, [])
//     console.log(pokemons)

//     const saveChange = (e) => {
//         navigate(`/update-stock/`)
//         let pokemonsData = JSON.parse(localStorage.getItem('pokemonData') || "[]")
//         let pokemonsDatum = {
//             ...pokemons,
//             total: totalPcs
//         }
//         pokemonsData.push(pokemonsDatum)
//         localStorage.setItem("pokemonData", JSON.stringify({
//             pokemonsDatum
//         }));
//         // setPokemons(storedData);
//     }

//     useEffect(() => {
//         setPokemons(pokemons);
//     }, []);

//     return (
//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             className="modal"
//             centered
//         >
//             <Modal.Header closeButton>
//                 <Modal.Title className="modal-title">
//                     Update stock
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <h4>Masukkan jumlah stok yang tersedia di rak saat ini.</h4>
//                 <Container>
//                     <Row>
//                         <Col>Kemasan</Col>
//                         <Col>Jumlah</Col>
//                         <Col>Stok</Col>
//                     </Row>
//                     <Row className="modal-table-body">
//                         <Col >Pcs</Col>
//                         <Col className="d-flex align-items-center">1 x <Form.Control className="modal-input pcs" type="number" name="pcs" value={pokemons.pcs} onChange={handleChange} /> = </Col>
//                         <Col>{pokemons.pcs || 0}</Col>
//                     </Row>
//                     <Row className="modal-table-body">
//                         <Col>Lusin</Col>
//                         <Col className="d-flex align-items-center">12 x <Form.Control name="lusin" className="modal-input lusin" type="number" value={pokemons.lusin} onChange={handleChange} /> = </Col>
//                         <Col>{12 * pokemons.lusin || 0}</Col>
//                     </Row>
//                     <Row className="modal-table-body">
//                         <Col>Total Stok <span>(dalam pcs)</span></Col>
//                         <Col>Lusin</Col>
//                         <Col>{(12 * pokemons.lusin) + (1 * pokemons.pcs) || 0}</Col>
//                     </Row>
//                 </Container>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button
//                     variant="primary"
//                     onClick={saveChange} >
//                     Simpan
//                 </Button>
//                 <Button
//                     variant="secondary"
//                     onClick={props.onHide}>
//                     Batal
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// }

// export default function PokemonDetail() {
//     let navigate = useNavigate();
//     let { name } = useParams()
//     const [modalShow, setModalShow] = React.useState(false);


//     // {
//     //     Object.entries(localStorage).map(([key, valueJSON]) => {
//     //         const value = JSON.parse(valueJSON);
//     //         console.log(key, "key")
//     //         console.log(value.date, "ini tanggal")
//     //         return value
//     //     })
//     // }
//     return (
//         <div className="pokemon-detail-page">
//             <div className="pokemon-detail_button-group">
//                 <Button variant="outline-light" className="prev-button" onClick={() => {
//                     navigate('/')
//                 }}><img src={prevPageIcon}></img>Stok Pokémon</Button>
//                 <Button className="update-stock-button" onClick={() => setModalShow(true)}>Update Stok</Button>
//             </div>
//             <p className="pokemon-detail-title" style={{ textTransform: 'capitalize' }}>{name}</p>
//             <div className="pokemon-detail-subtitle">
//                 <p className="pokemon-detail-sub1">Sisa Stok</p>
//                 <p className="pokemon-detail-sub2">10 pcs</p>
//             </div>
//             <div className="pokemon-detail-history">
//                 <p className="pokemon-detail-history1">Riwayat Stok</p>
//                 <p className="pokemon-detail-history2">Satuan stok dalam pcs</p>
//             </div>
//             <div>
//                 <Table className='col-xs-12 mt-4' responsive>
//                     <thead>
//                         <tr className="th-border ">
//                             <th scope="col">Waktu</th>
//                             <th scope="col">Kegiatan</th>
//                             <th scope="col">Catatan</th>
//                             <th scope="col">Jumlah</th>
//                             <th scope="col">Stok</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className="align-items-center">
//                             <td className=""></td>
//                             <td className="table-link">Update Stok</td>
//                             <td className="">"Stok Awal"</td>
//                             <td className="table-count-stock">+10</td>
//                             <td className="table-bold">10</td>
//                         </tr>
//                     </tbody>
//                 </Table>
//             </div>

//             <UpdateStockModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />

//         </div>
//     )

// }
