import React from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Table } from "react-bootstrap";

const Index = ({ beritas }) => {
    // const { csrfToken } = usePage().props;

    const handleDelete = (id) => {
        if (confirm("Apakah anda yakin akan menghapus pengajar?")) {
            Inertia.delete(route("berita.destroy", id));
        }
    };
    return (
        <div className="container mt-5">
            <h1>Berita</h1>
            <InertiaLink href="/berita/create" className="btn btn-primary mb-3">
                Tambah Berita
            </InertiaLink>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Headline Berita</th>
                        <th>Isi Berita</th>
                        <th>Tanggal Publikasi</th>
                        <th>Corresponden</th>
                        <th>Media</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {beritas.map((berita) => (
                        <tr key={berita.id}>
                            <td>{berita.headline_berita}</td>
                            <td>{berita.isi_berita}</td>
                            <td>{berita.tanggal_publikasi}</td>
                            <td>{berita.corresponden}</td>
                            <td>
                                <img
                                    src={`/storage/${berita.media}`}
                                    alt={berita.headline_berita}
                                    width="50"
                                />
                            </td>
                            <td>
                                <InertiaLink
                                    // href={route(
                                    //     "pengajar.edit",
                                    //     pengajar.id_pengajar
                                    // )}
                                    href={`/berita/${berita.id}/edit`}
                                    className="btn btn-warning"
                                >
                                    Edit
                                </InertiaLink>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(berita.id)}
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
// import { Inertia } from "@inertiajs/inertia";
// import { Link } from "@inertiajs/inertia-react";
// import { Table, Button } from "react-bootstrap";

// const Index = ({ beritas }) => {
//     const handleDelete = (id) => {
//         if (confirm("Apakah anda yakin akan menghapus berita?")) {
//             Inertia.delete(`/berita/${id}`);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h1>Berita</h1>
//             <Link href="/berita/create" className="btn btn-primary mb-3">
//                 Tambah Berita
//             </Link>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>No</th>
//                         <th>Media</th>
//                         <th>Headline</th>
//                         <th>Isi Berita</th>
//                         <th>Tanggal Publikasi</th>
//                         <th>Corresponden</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {beritas.map((berita, index) => (
//                         <tr key={berita.id}>
//                             <td>{index + 1}</td>
//                             <td>
//                                 <img
//                                     src={`/storage/${berita.media}`}
//                                     alt={berita.media}
//                                     width="50"
//                                 />
//                             </td>
//                             <td>{berita.headline_berita}</td>
//                             <td>{berita.isi_berita}</td>
//                             <td>{berita.tanggal_publikasi}</td>
//                             <td>{berita.corresponden}</td>
//                             <td>
//                                 <Link
//                                     href={`/berita/${berita.id}/edit`}
//                                     className="btn btn-warning btn-sm mr-2"
//                                 >
//                                     Edit
//                                 </Link>
//                                 <Button
//                                     variant="danger"
//                                     size="sm"
//                                     onClick={() => handleDelete(berita.id)}
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
