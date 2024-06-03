import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Table, Button } from "react-bootstrap";

const Index = ({ beritas }) => {
    const handleDelete = (id) => {
        if (confirm("Apakah anda yakin akan menghapus berita?")) {
            Inertia.delete(`/berita/${id}`);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Berita</h1>
            <Link href="/berita/create" className="btn btn-primary mb-3">
                Tambah Berita
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Media</th>
                        <th>Headline</th>
                        <th>Isi Berita</th>
                        <th>Tanggal Publikasi</th>
                        <th>Corresponden</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {beritas.map((berita, index) => (
                        <tr key={berita.id}>
                            <td>{index + 1}</td>
                            <td>{berita.media}</td>
                            <td>{berita.headline_berita}</td>
                            <td>{berita.isi_berita}</td>
                            <td>{berita.tanggal_publikasi}</td>
                            <td>{berita.corresponden}</td>
                            <td>
                                <Link
                                    href={`/berita/${berita.id}/edit`}
                                    className="btn btn-warning btn-sm mr-2"
                                >
                                    Edit
                                </Link>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(berita.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Index;
