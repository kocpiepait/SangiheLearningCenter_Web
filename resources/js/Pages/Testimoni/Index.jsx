import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Table, Button } from "react-bootstrap";

const Index = ({ testimonis }) => {
    const handleDelete = (id) => {
        if (confirm("Apakah anda yakin akan menghapus testimoni?")) {
            Inertia.delete(`/testimoni/${id}`);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Testimoni</h1>
            <Link href="/testimoni/create" className="btn btn-primary mb-3">
                Tambah Testimoni
            </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Isi Testimoni</th>
                        <th>Nama Testimoni</th>
                        <th>Satus Testimoni</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {testimonis.map((testimoni, index) => (
                        <tr key={testimoni.id}>
                            <td>{index + 1}</td>
                            <td>{testimoni.isi_testimoni}</td>
                            <td>{testimoni.nama_testimoni}</td>
                            <td>{testimoni.status_testimoni}</td>
                            <td>
                                <Link
                                    href={`/testimoni/${testimoni.id}/edit`}
                                    className="btn btn-warning btn-sm mr-2"
                                >
                                    Edit
                                </Link>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleDelete(testimoni.id)}
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
