import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Table } from "react-bootstrap";

const Index = ({ pengajars }) => {
    // const { csrfToken } = usePage().props;

    const handleDelete = (id_pengajar) => {
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

            Inertia.delete(route("pengajar.destroy", id_pengajar));
        }
    };
    return (
        <div className="container mt-5">
            <h1>Pengajar</h1>
            <InertiaLink
                href="/pengajar/create"
                className="btn btn-primary mb-3"
            >
                Tambah Pengajar
            </InertiaLink>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Program</th>
                        <th>Foto</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pengajars.map((pengajar) => (
                        <tr key={pengajar.id_pengajar}>
                            <td>{pengajar.nama_pengajar}</td>
                            <td>{pengajar.program.nama_program}</td>
                            <td>
                                <img
                                    src={`/storage/${pengajar.foto_pengajar}`}
                                    alt={pengajar.nama_pengajar}
                                    width="50"
                                />
                            </td>
                            <td>
                                <InertiaLink
                                    // href={route(
                                    //     "pengajar.edit",
                                    //     pengajar.id_pengajar
                                    // )}
                                    href={`/pengajar/${pengajar.id_pengajar}/edit`}
                                    className="btn btn-warning"
                                >
                                    Edit
                                </InertiaLink>
                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        handleDelete(pengajar.id_pengajar)
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

// import React from "react";
// // import { InertiaLink, usePage } from "@inertiajs/inertia-react";
// import { Inertia } from "@inertiajs/inertia";
// import { Link } from "@inertiajs/inertia-react";
// import { Table, Button } from "react-bootstrap";

// const Index = ({ pengajars }) => {
//     const handleDelete = (id_pengajar) => {
//         if (confirm("Apakah anda yakin akan menghapus program?")) {
//             Inertia.delete(`/pengajar/${id_pengajar}`);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h1>Pengajar</h1>
//             <Link href="/pengajar/create" className="btn btn-primary mb-3">
//                 Tambah Pengajar
//             </Link>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>No</th>
//                         <th>Nama Pengajar</th>
//                         <th>Id Program</th>
//                         <th>Foto Pengajar</th>
//                         <th>Nama Program</th>
//                         <th>Aksi</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {pengajars.map((pengajar, index) => (
//                         <tr key={pengajar.id_pengajar}>
//                             <td>{index + 1}</td>
//                             <td>{pengajar.nama_pengajar}</td>
//                             <td>{pengajar.id_program}</td>
//                             <td>{pengajar.foto_pengajar}</td>
//                             {pengajar.nama_pengajar} -{" "}
//                             {pengajar.program.nama_program}
//                             <td>
//                                 <Link
//                                     href={`/pengajar/${pengajar.id_pengajar}/edit`}
//                                     className="btn btn-warning btn-sm mr-2"
//                                 >
//                                     Edit
//                                 </Link>
//                                 <Button
//                                     variant="danger"
//                                     size="sm"
//                                     onClick={() =>
//                                         handleDelete(pengajar.id_pengajar)
//                                     }
//                                 >
//                                     Delete
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//     );
// };

// export default Index;
