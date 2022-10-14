import React from 'react'
import Button from 'react-bootstrap/Button';
import prevPageIcon from '../images/prevPage.svg'
import { Table, Modal, Container, Row, Col, Form } from 'react-bootstrap';

function UpdateStockModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className="modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="modal-title">
                    Update stock
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Masukkan jumlah stok yang tersedia di rak saat ini.</h4>
                <Container>
                    <Row>
                        <Col>Kemasan</Col>
                        <Col>Jumlah</Col>
                        <Col>Stok</Col>
                    </Row>
                    <Row className="modal-table-body">
                        <Col >Pcs</Col>
                        <Col className="d-flex align-items-center">1 x <Form.Control className="modal-input pcs" type="text" /> = </Col>
                        <Col>0</Col>
                    </Row>
                    <Row className="modal-table-body">
                        <Col>Lusin</Col>
                        <Col className="d-flex align-items-center">12 x <Form.Control className="modal-input lusin" type="text" /> = </Col>
                        <Col>0</Col>
                    </Row>
                    <Row className="modal-table-body">
                        <Col>Total Stok <span>(dalam pcs)</span></Col>
                        <Col>Lusin</Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide}>Simpan</Button>
                <Button variant="secondary" onClick={props.onHide}>Batal</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function PokemonDetail() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="pokemon-detail-page">
            <div className="pokemon-detail_button-group">
                <Button variant="outline-light" className="prev-button"><img src={prevPageIcon}></img>Stok Pokémon</Button>
                <Button className="update-stock-button" onClick={() => setModalShow(true)}>Update Stok</Button>
            </div>
            <p className="pokemon-detail-title">Pikachu</p>
            <div className="pokemon-detail-subtitle">
                <p className="pokemon-detail-sub1">Sisa Stok</p>
                <p className="pokemon-detail-sub2">10 pcs</p>
            </div>
            <div className="pokemon-detail-history">
                <p className="pokemon-detail-history1">Riwayat Stok</p>
                <p className="pokemon-detail-history2">Satuan stok dalam pcs</p>
            </div>
            <div>
                <Table className="table d-flex row pokemon-detail-table">
                    <thead>
                        <tr className="d-flex justify-content-between th-border ">
                            <th scope="col">Waktu</th>
                            <th scope="col">Kegiatan</th>
                            <th scope="col">Catatan</th>
                            <th scope="col">Jumlah</th>
                            <th scope="col">Stok</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="d-flex justify-content-between d-flex align-items-center">
                            <td className="">2 Apr 2021, 08:00</td>
                            <td className="table-link">Update Stok</td>
                            <td className="">"Stok Awal"</td>
                            <td className="table-count-stock">+10</td>
                            <td className="table-bold">10</td>
                        </tr>
                    </tbody>
                </Table>
            </div>

            <UpdateStockModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </div>
    )
}
