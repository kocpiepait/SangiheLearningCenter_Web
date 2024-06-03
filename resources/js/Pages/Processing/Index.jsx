import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Table } from "react-bootstrap";

const Index = ({ processings }) => {
    // const { processings } = usePage().props;
    const handleDelete = (id_kursus) => {
        if (confirm("Apakah anda yakin akan menghapus processing?")) {
            Inertia.delete(route("processing.destroy", id_kursus));
        }
    };

    return (
        <div className="container mt-5">
            <h1>Processing</h1>
            <InertiaLink
                href={route("processing.create")}
                className="btn btn-primary"
            >
                Tambah Processing
            </InertiaLink>
            <Table className="table">
                <thead>
                    <tr>
                        <th>ID Kursus</th>
                        <th>Nama Pengajar</th>
                        <th>Nama Peserta</th>
                        <th>Nama Program</th>
                        <th>Jumlah Peserta</th>
                        <th>Tahun Ajaran</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {processings.map((processing) => (
                        <tr key={processing.id}>
                            <td>{processing.id_kursus}</td>
                            <td>{processing.nama_pengajar}</td>
                            <td>{processing.nama_peserta}</td>
                            <td>{processing.nama_program}</td>
                            <td>{processing.jumlah_peserta}</td>
                            <td>{processing.tahun_ajaran}</td>
                            <td>
                                <InertiaLink
                                    href={route(
                                        "processing.edit",
                                        processing.id
                                    )}
                                    className="btn btn-warning"
                                >
                                    Edit
                                </InertiaLink>
                                <buton
                                    // href={route(
                                    //     "processing.destroy",
                                    //     processing.id
                                    // )}
                                    // method="delete"
                                    // as="button"
                                    className="btn btn-danger"
                                    onClick={() =>
                                        handleDelete(processing.id_kursus)
                                    }
                                >
                                    Delete
                                </buton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Index;
