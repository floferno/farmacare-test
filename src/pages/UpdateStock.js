import React from 'react'
import arrowIcon from '../images/arrow-forward.svg'
import editIcon from '../images/edit.svg'
import { Table, Button } from 'react-bootstrap';


export default function UpdateStock() {
    return (
        <div className="update-stock-page">
            <h1 className="update-stock-title">Konfirmasi update stok</h1>
            <div>
                <p className="update-stock-subtitle">Selisih</p>
                <p className="update-stock-difference">+533 pcs</p>
            </div>
            <div class="row d-flex justify-content-center ">
                <div class="col">
                    <p>Di sistem</p>
                    <p>10 pcs</p>
                </div>
                <div class="col-1 align-center ">
                    <img width="21" height="21" src={arrowIcon}></img>
                </div>
                <div class="col">
                    <p>Hasil update stok</p>
                    <p>544 pcs</p>
                </div>
            </div>
            <Table className='col-xs-12 mt-4' responsive>
                <thead>
                    <tr className="th-border ">
                        <th scope="col">Keterangan</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Jumlah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="align-items-center">
                        <td className="table-link">Hasil update stock</td>
                        <td className="">3 pcs, 45 lusin (12s)</td>
                        <td className="">543 </td>
                        <img src={editIcon}></img>

                    </tr>
                    <tr className="align-items-center">
                        <td className="table-link">Total hasil stok opname</td>
                        <td className=""></td>
                        <td className="">543</td>

                    </tr>
                </tbody>
            </Table>

            <div className="update-stock-note-group">
                <p className="update-stock-note-title">Catatan</p>
                <textarea className="update-stock-note-input" placeholder="Contoh: stok awal"></textarea>
            </div>

            <div className="d-flex justify-content-end gap-2">
                <Button variant="primary">Simpan</Button>
                <Button variant="secondary">Batal</Button>
            </div>
        </div>
    )
}
