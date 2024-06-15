import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Table } from "react-bootstrap";

const Index = ({ pesertas }) => {
    // const { csrfToken } = usePage().props;

    const handleDelete = (id_peserta) => {
        if (confirm("Apakah anda yakin akan menghapus pengajar?")) {
            // Inertia.delete(`/pengajar/${id_pengajar}`, {
            //     headers: {
            //         "X-CSRF-TOKEN": csrfToken,
            //     },
            //     onSuccess: () => {
            //         // Refresh halaman setelah penghapusan berhasil
            //         window.location.reload();
            //     },
            //     onError: (errors) => {
            //         console.error("Gagal menghapus pengajar", errors);
            //     },
            // });

            Inertia.delete(route("peserta.destroy", id_peserta));
        }
    };
    return (
        <div className="container mt-5">
            <h1>Peserta</h1>
            <InertiaLink
                href="/peserta/create"
                className="btn btn-primary mb-3"
            >
                Tambah Peserta
            </InertiaLink>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nama Peserta</th>
                        <th>Program</th>
                        <th>Usia Peserta</th>
                        <th>Alamat</th>
                        <th>Jenis Kelamin</th>
                        <th>TTL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pesertas.map((peserta) => (
                        <tr key={peserta.id_peserta}>
                            <td>{peserta.nama_peserta}</td>
                            <td>{peserta.program.nama_program}</td>
                            <td>{peserta.usia_peserta}</td>
                            <td>{peserta.alamat}</td>
                            <td>{peserta.jenis_kelamin}</td>
                            <td>{peserta.TTL}</td>

                            <td>
                                <InertiaLink
                                    // href={route(
                                    //     "pengajar.edit",
                                    //     pengajar.id_pengajar
                                    // )}
                                    href={`/peserta/${peserta.id_peserta}/edit`}
                                    className="btn btn-warning"
                                >
                                    Edit
                                </InertiaLink>
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        handleDelete(peserta.id_peserta)
                                    }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Index;
