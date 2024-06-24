import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Table, Button } from "react-bootstrap";
import { Head } from "@inertiajs/react";

const Index = ({ auth, testimonis }) => {
  console.log(testimonis);
  const handleDelete = (id_program) => {
    if (confirm("Apakah anda yakin akan menghapus program?")) {
      Inertia.delete(`/program/${id_program}`);
    }
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Testimoni
        </h2>
      }
    >
      <Head title="Program" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Link href="/pengajar/create" className="btn btn-primary mb-3">
            Tambah Testimoni
          </Link>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-black dark:text-gray-100">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Testimoni</th>
                    <th>Foto Testimoni</th>
                    <th>Isi Testimoni</th>
                    <th>Status Testimoni</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonis.map((testimoni, index) => (
                    <tr key={index}>
                      <td>{testimoni.id}</td>
                      <td>{testimoni.nama_testimoni}</td>
                      <td>{testimoni.gambar_testimoni}</td>
                      <td>{testimoni.isi_testimoni}</td>
                      <td>{testimoni.status_testimoni}</td>
                      <td>
                        <Link className="btn btn-warning btn-sm mr-2">
                          Edit
                        </Link>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(program.id_program)}
                        >
                          Delete
                        </Button>
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

// const Index = ({ testimonis }) => {
//     const handleDelete = (id) => {
//         if (confirm("Apakah anda yakin akan menghapus testimoni?")) {
//             Inertia.delete(`/testimoni/${id}`);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h1>Testimoni</h1>
//             <Link href="/testimoni/create" className="btn btn-primary mb-3">
//                 Tambah Testimoni
//             </Link>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>No</th>
//                         <th>Isi Testimoni</th>
//                         <th>Nama Testimoni</th>
//                         <th>Satus Testimoni</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {testimonis.map((testimoni, index) => (
//                         <tr key={testimoni.id}>
//                             <td>{index + 1}</td>
//                             <td>{testimoni.isi_testimoni}</td>
//                             <td>{testimoni.nama_testimoni}</td>
//                             <td>{testimoni.status_testimoni}</td>
//                             <td>
//                                 <Link
//                                     href={`/testimoni/${testimoni.id}/edit`}
//                                     className="btn btn-warning btn-sm mr-2"
//                                 >
//                                     Edit
//                                 </Link>
//                                 <Button
//                                     variant="danger"
//                                     size="sm"
//                                     onClick={() => handleDelete(testimoni.id)}
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
