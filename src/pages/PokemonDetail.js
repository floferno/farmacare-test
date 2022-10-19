import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import prevPageIcon from '../images/prevPage.svg'
import { Table, Modal, Container, Row, Col, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'

function UpdateStockModal(props) {
    let { name } = useParams()
    const [input, setInput] = useState({})

    let stockPcs = 1 * input.pcs
    let stockDozen = 1 * input.dozen
    let stockDozenToPcs = 12 * input.dozen
    let totalPcs = stockPcs + stockDozenToPcs
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
        //kalo gak ada data render empty array
        //kalo ada data get dari localStorage && push 
        pokemonData = JSON.parse(localStorage.getItem("pokemon") || "[]");

        // pokemonData = JSON.parse(localStorage.getItem("pokemon"))
        console.log(pokemonData, "pokemon data di detail mau akses history")
        pokemonData.push({
            pokemonName: name,
            pcs: stockPcs,
            dozen: stockDozen,
            dozenToPcs: stockDozenToPcs,
            total: totalPcs,
            history: [
                {
                    date: new Date(),
                    // activity: '',
                    note: ''
                    // count: 0,
                    // totalStock: 0
                }
            ]
        })


        localStorage.setItem('pokemon', JSON.stringify(pokemonData));
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className="modal-lg"
            centered
        >
            {/* <Modal.Header > */}
            <Modal.Title className="modal-title ">
                Update stock
            </Modal.Title>
            {/* </Modal.Header> */}
            <Modal.Body>
                <h4 className="modal-subtitle">Masukkan jumlah stok yang tersedia di rak saat ini.</h4>
                <Container>
                    <Row className="modal-table-header header-borderline modal-first-row d-flex align-items-center">
                        <Col>Kemasan</Col>
                        <Col></Col>
                        <Col className="d-flex text-align-start">Jumlah</Col>
                        <Col>Stok</Col>
                    </Row>
                    <Row className="modal-table-body body-borderline">
                        <Col className="modal-table-header d-flex align-items-center" >Pcs</Col>
                        <Col className="d-flex align-items-center justify-content-end">1 x </Col>
                        <Col className="d-flex align-items-center justify-content-start"><Form.Control className="modal-input pcs" type="number" name="pcs" value={input.pcs} onChange={handleChange} /> = </Col>
                        <Col className="d-flex align-items-center justify-content-end">{input.pcs || 0}</Col>
                    </Row>
                    <Row className="modal-table-body header-borderline">
                        <Col className="modal-table-header d-flex align-items-center">Lusin</Col>
                        <Col className="d-flex align-items-center justify-content-end">12 x </Col>
                        <Col className="d-flex align-items-center justify-content-start"><Form.Control name="dozen" className="modal-input dozen" type="number" value={input.dozen} onChange={handleChange} /> = </Col>
                        <Col className="d-flex align-items-center justify-content-end">{12 * input.dozen || 0}</Col>
                    </Row>
                    <Row className="modal-table-body modal-last-row align-items-center">
                        <Col><span className="modal-table-header">Total Stok</span> (dalam pcs)</Col>
                        {/* <Col></Col>
                        <Col></Col> */}
                        <Col className="d-flex align-items-center justify-content-end">{(12 * input.dozen) + (1 * input.pcs) || 0}</Col>
                    </Row>
                </Container>
            </Modal.Body>
            {/* <Modal.Footer> */}
            <div className="modal-button-group">

                <Button
                    // variant="primary"
                    className="modal-save-button"
                    onClick={saveChange} >
                    Simpan
                </Button>
                <Button
                    // variant="secondary"
                    className="modal-cancel-button"
                    onClick={() => props.setModalShow(false)}
                >
                    Batal
                </Button>
            </div>
            {/* </Modal.Footer > */}
        </Modal >
    );
}

export default function PokemonDetail() {
    let navigate = useNavigate();
    let { name } = useParams()
    const [modalShow, setModalShow] = useState(false);
    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        let pokemonData = JSON.parse(localStorage.getItem('pokemon') || "[]");
        // console.log(pokemonData, "ini di detail")
        setPokemonData(pokemonData)
    }, [])

    return (
        <div className="pokemon-detail-page">
            <div className="pokemon-detail_button-group">
                <Button variant="outline-light" className="prev-button" onClick={() => {
                    navigate('/')
                }}><img src={prevPageIcon} alt="Previous Page Arrow"></img>Stok Pokémon</Button>
                <Button className="update-stock-button " onClick={() => setModalShow(true)}>Update Stok</Button>
            </div>
            <p className="pokemon-detail-title" style={{ textTransform: 'capitalize' }}>{name}</p>
            <div className="pokemon-detail-subtitle">
                <p className="pokemon-detail-sub1">Sisa Stok</p>
                <p className="pokemon-detail-sub2">10 pcs</p>
            </div>
            <div className="pokemon-detail-history">
                <p className="pokemon-detail-history1">Riwayat Stok</p>
                <p className="pokemon-detail-history2">Satuan stok dalam pcs</p>
            </div>
            <div>
                <Table className='col-xs-12 mt-4' responsive>
                    <thead>
                        <tr className="th-border ">
                            <th scope="col">Waktu</th>
                            <th scope="col">Kegiatan</th>
                            <th scope="col">Catatan</th>
                            <th scope="col">Jumlah</th>
                            <th scope="col">Stok</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pokemonData.filter(pokemon => pokemon.pokemonName).map((pokemon, i) => {
                                if (pokemon.pokemonName == name) {
                                    console.log(pokemon.pokemonName, "pokemonname")
                                    console.log(name, "name")
                                    // console.log(pokemon.history[0].date, "pokemon di update")
                                    return (
                                        <tr className="align-items-center">
                                            <td className="">{new Date(pokemon.history[0].date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                                            <td className="table-link">{i >= 1 ? `Update Stok` : `Stok awal`}</td>
                                            <td className=""></td>
                                            <td className="table-count-stock">+</td>
                                            <td className="table-bold"></td>
                                        </tr>
                                    )
                                }



                            })
                        }
                    </tbody>
                </Table>
            </div>

            <UpdateStockModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </div >
    )

}
