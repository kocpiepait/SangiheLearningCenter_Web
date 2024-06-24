import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Table, Button } from "react-bootstrap";
import { Head } from "@inertiajs/react";

const Index = ({ auth, beritas }) => {
  // const { csrfToken } = usePage().props;

  const handleDelete = (id) => {
    if (confirm("Apakah anda yakin akan menghapus pengajar?")) {
      Inertia.delete(route("berita.destroy", id));
    }
  };
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Berita
        </h2>
      }
    >
      <Head title="Program" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Link href="/pengajar/create" className="btn btn-primary mb-3">
            Tambah Berita
          </Link>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-black dark:text-gray-100">
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
                        <Link
                          // href={route(
                          //     "pengajar.edit",
                          //     pengajar.id_pengajar
                          // )}
                          href={`/berita/${berita.id}/edit`}
                          className="btn btn-warning"
                        >
                          Edit
                        </Link>
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
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
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
