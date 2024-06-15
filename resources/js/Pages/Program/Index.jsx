import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Table, Button } from "react-bootstrap";

const Index = ({ auth, programs }) => {
    const handleDelete = (id_program) => {
        if (confirm("Apakah anda yakin akan menghapus program?")) {
            Inertia.delete(`/program/${id_program}`);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="container mt-5">
                    <h1>Program</h1>
                    <Link
                        href="/program/create"
                        className="btn btn-primary mb-3"
                    >
                        Tambah Program
                    </Link>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Program</th>
                                <th>Detail Program</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {programs.map((program, index) => (
                                <tr key={program.id_program}>
                                    <td>{index + 1}</td>
                                    <td>{program.nama_program}</td>
                                    <td>{program.detail_program}</td>
                                    <td>
                                        <Link
                                            href={`/program/${program.id_program}/edit`}
                                            className="btn btn-warning btn-sm mr-2"
                                        >
                                            Edit
                                        </Link>
                                        <Button
                                            variant="danger"
                                            size="sm"
                                            onClick={() =>
                                                handleDelete(program.id_program)
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            }
        ></AuthenticatedLayout>
    );
};

export default Index;

// import React from "react";
// import { InertiaLink, usePage } from "@inertiajs/inertia-react";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Index = () => {
//     const { programs } = usePage().props;

//     return (
//         <div>
//             <h1>Programs</h1>
//             <InertiaLink href="/programs/create" className="btn btn-primary">
//                 Create Program
//             </InertiaLink>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Details</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {programs.map((program) => (
//                         <tr key={program.id_program}>
//                             <td>{program.id_program}</td>
//                             <td>{program.nama_program}</td>
//                             <td>{program.detail_program}</td>
//                             <td>
//                                 <InertiaLink
//                                     href={`/programs/${program.id_program}/edit`}
//                                     className="btn btn-warning"
//                                 >
//                                     Edit
//                                 </InertiaLink>
//                                 <InertiaLink
//                                     href={`/programs/${program.id_program}`}
//                                     method="delete"
//                                     className="btn btn-danger"
//                                 >
//                                     Delete
//                                 </InertiaLink>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Index;
