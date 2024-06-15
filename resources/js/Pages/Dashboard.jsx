// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head } from "@inertiajs/react";

// export default function Dashboard({ auth }) {
//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={
//                 <h2 className="font-semibold text-xl text-gray-800 leading-tight">
//                     Dashboard
//                 </h2>
//             }
//         >
//             <Head title="Dashboard" />

//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="p-6 text-gray-900">
//                             You're logged in!
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }

// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head } from "@inertiajs/react";
// import { Link } from "@inertiajs/inertia-react";

// export default function Dashboard({
//     auth,
//     programs,
//     pengajars,
//     pesertas,
//     beritas,
//     testimonis,
//     galerys,
// }) {
//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={
//                 <h2 className="font-semibold text-xl text-gray-800 leading-tight">
//                     Dashboard
//                 </h2>
//             }
//         >
//             <Head title="Dashboard" />

//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="p-6 text-gray-900">
//                             You're logged in!
//                         </div>
//                     </div>

//                     <div className="mt-8">
//                         <Link
//                             href={route("program.index")}
//                             className="text-lg font-medium text-blue-900"
//                         >
//                             Program
//                         </Link>
//                         <ul>
//                             {programs.map((program) => (
//                                 <li key={program.id_program}>
//                                     {program.nama_program}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Pengajar
//                         </h3>
//                         <ul>
//                             {pengajars.map((pengajar) => (
//                                 <li key={pengajar.id_pengajar}>
//                                     {pengajar.nama_pengajar}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Peserta
//                         </h3>
//                         <ul>
//                             {pesertas.map((peserta) => (
//                                 <li key={peserta.id_peserta}>
//                                     {peserta.nama_peserta}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Berita
//                         </h3>
//                         <ul>
//                             {beritas.map((berita) => (
//                                 <li key={berita.id}>
//                                     {berita.headline_berita}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Testimoni
//                         </h3>
//                         <ul>
//                             {testimonis.map((testimoni) => (
//                                 <li key={testimoni.id}>
//                                     {testimoni.isi_testimoni}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Galery
//                         </h3>
//                         <ul>
//                             {galerys.map((galery) => (
//                                 <li key={galery.id}>{galery.foto}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }

// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head } from "@inertiajs/react";
// import { useState } from "react";

// export default function Dashboard({
//     auth,
//     programs,
//     pengajars,
//     pesertas,
//     beritas,
//     testimonis,
//     galerys,
// }) {
//     const [selectedSection, setSelectedSection] = useState("dashboard");

//     const renderSection = () => {
//         switch (selectedSection) {
//             case "programs":
//                 return (
//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Program
//                         </h3>
//                         <ul>
//                             {programs.map((program) => (
//                                 <li key={program.id_program}>
//                                     {program.nama_program}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 );
//             case "pengajars":
//                 return (
//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Pengajar
//                         </h3>
//                         <ul>
//                             {pengajars.map((pengajar) => (
//                                 <li key={pengajar.id_pengajar}>
//                                     {pengajar.nama_pengajar}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 );
//             case "pesertas":
//                 return (
//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Peserta
//                         </h3>
//                         <ul>
//                             {pesertas.map((peserta) => (
//                                 <li key={peserta.id_peserta}>
//                                     {peserta.nama_peserta}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 );
//             case "beritas":
//                 return (
//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Berita
//                         </h3>
//                         <ul>
//                             {beritas.map((berita) => (
//                                 <li key={berita.id}>
//                                     {berita.headline_berita}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 );
//             case "testimonis":
//                 return (
//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Testimoni
//                         </h3>
//                         <ul>
//                             {testimonis.map((testimoni) => (
//                                 <li key={testimoni.id}>
//                                     {testimoni.isi_testimoni}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 );
//             case "galerys":
//                 return (
//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Galery
//                         </h3>
//                         <ul>
//                             {galerys.map((galery) => (
//                                 <li key={galery.id}>{galery.foto}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 );
//             default:
//                 return (
//                     <div className="p-6 text-gray-900">You're logged in!</div>
//                 );
//         }
//     };

//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={
//                 <h2 className="font-semibold text-xl text-gray-800 leading-tight">
//                     Dashboard
//                 </h2>
//             }
//         >
//             <Head title="Dashboard" />

//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         {renderSection()}
//                     </div>

//                     <div className="mt-8 space-x-4">
//                         <button
//                             onClick={() => setSelectedSection("dashboard")}
//                             className="text-lg font-medium text-blue-900"
//                         >
//                             Dashboard
//                         </button>
//                         <button
//                             onClick={() => setSelectedSection("programs")}
//                             className="text-lg font-medium text-blue-900"
//                         >
//                             Program
//                         </button>
//                         <button
//                             onClick={() => setSelectedSection("pengajars")}
//                             className="text-lg font-medium text-blue-900"
//                         >
//                             Pengajar
//                         </button>
//                         <button
//                             onClick={() => setSelectedSection("pesertas")}
//                             className="text-lg font-medium text-blue-900"
//                         >
//                             Peserta
//                         </button>
//                         <button
//                             onClick={() => setSelectedSection("beritas")}
//                             className="text-lg font-medium text-blue-900"
//                         >
//                             Berita
//                         </button>
//                         <button
//                             onClick={() => setSelectedSection("testimonis")}
//                             className="text-lg font-medium text-blue-900"
//                         >
//                             Testimoni
//                         </button>
//                         <button
//                             onClick={() => setSelectedSection("galerys")}
//                             className="text-lg font-medium text-blue-900"
//                         >
//                             Galery
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }

// Dashboard.js

import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({
    auth,
    programs,
    pengajars,
    pesertas,
    beritas,
    testimonis,
    galerys,
}) {
    const [selectedSection, setSelectedSection] = useState("dashboard");

    const renderSection = () => {
        switch (selectedSection) {
            case "programs":
                return (
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">
                            Program
                        </h3>
                        <ul>
                            {programs.map((program) => (
                                <li key={program.id_program}>
                                    {program.nama_program}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "pengajars":
                return (
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">
                            Pengajar
                        </h3>
                        <ul>
                            {pengajars.map((pengajar) => (
                                <li key={pengajar.id_pengajar}>
                                    {pengajar.nama_pengajar}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "pesertas":
                return (
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">
                            Peserta
                        </h3>
                        <ul>
                            {pesertas.map((peserta) => (
                                <li key={peserta.id_peserta}>
                                    {peserta.nama_peserta}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "beritas":
                return (
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">
                            Berita
                        </h3>
                        <ul>
                            {beritas.map((berita) => (
                                <li key={berita.id}>
                                    {berita.headline_berita}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "testimonis":
                return (
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">
                            Testimoni
                        </h3>
                        <ul>
                            {testimonis.map((testimoni) => (
                                <li key={testimoni.id}>
                                    {testimoni.isi_testimoni}
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            case "galerys":
                return (
                    <div className="mt-8">
                        <h3 className="text-lg font-medium text-gray-900">
                            Galery
                        </h3>
                        <ul>
                            {galerys.map((galery) => (
                                <li key={galery.id}>{galery.foto}</li>
                            ))}
                        </ul>
                    </div>
                );
            // Tambahkan case lainnya untuk pesertas, beritas, testimonis, galerys
            default:
                return (
                    <div className="p-6 text-gray-900">You're logged in!</div>
                );
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {renderSection()}
                    </div>

                    <div className="mt-8 space-x-4">
                        <button
                            onClick={() => setSelectedSection("dashboard")}
                            className="text-lg font-medium text-blue-900"
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => setSelectedSection("programs")}
                            className="text-lg font-medium text-blue-900"
                        >
                            Program
                        </button>
                        <button
                            onClick={() => setSelectedSection("pengajars")}
                            className="text-lg font-medium text-blue-900"
                        >
                            Pengajar
                        </button>
                        <button
                            onClick={() => setSelectedSection("pesertas")}
                            className="text-lg font-medium text-blue-900"
                        >
                            Peserta
                        </button>
                        <button
                            onClick={() => setSelectedSection("beritas")}
                            className="text-lg font-medium text-blue-900"
                        >
                            Berita
                        </button>
                        <button
                            onClick={() => setSelectedSection("testimonis")}
                            className="text-lg font-medium text-blue-900"
                        >
                            Testimoni
                        </button>
                        <button
                            onClick={() => setSelectedSection("galerys")}
                            className="text-lg font-medium text-blue-900"
                        >
                            Galery
                        </button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

// import React, { useState } from "react";
// import { Head, Inertia } from "@inertiajs/react";
// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

// export default function Dashboard({ auth, programs }) {
//     const [selectedSection, setSelectedSection] = useState("dashboard");
//     const [newProgram, setNewProgram] = useState("");
//     const [editProgram, setEditProgram] = useState(null);

//     const renderSection = () => {
//         switch (selectedSection) {
//             case "programs":
//                 return (
//                     <div className="mt-8">
//                         <h3 className="text-lg font-medium text-gray-900">
//                             Program
//                         </h3>
//                         <ul>
//                             {programs.map((program) => (
//                                 <li key={program.id_program}>
//                                     {program.nama_program}
//                                     <button onClick={() => handleEdit(program)}>
//                                         Edit
//                                     </button>
//                                     <button
//                                         onClick={() =>
//                                             handleDelete(program.id_program)
//                                         }
//                                     >
//                                         Delete
//                                     </button>
//                                 </li>
//                             ))}
//                         </ul>
//                         <input
//                             type="text"
//                             value={newProgram}
//                             onChange={(e) => setNewProgram(e.target.value)}
//                             placeholder="New Program"
//                         />
//                         <button onClick={handleAdd}>Add Program</button>
//                         {editProgram && (
//                             <div>
//                                 <input
//                                     type="text"
//                                     value={editProgram.nama_program}
//                                     onChange={(e) =>
//                                         setEditProgram({
//                                             ...editProgram,
//                                             nama_program: e.target.value,
//                                         })
//                                     }
//                                 />
//                                 <button onClick={handleUpdate}>
//                                     Update Program
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 );
//             default:
//                 return (
//                     <div className="p-6 text-gray-900">You're logged in!</div>
//                 );
//         }
//     };

//     const handleAdd = () => {
//         Inertia.post("/programs", { nama_program: newProgram });
//         setNewProgram("");
//     };

//     const handleEdit = (program) => {
//         setEditProgram(program);
//     };

//     const handleUpdate = () => {
//         Inertia.put(`/programs/${editProgram.id_program}`, editProgram);
//         setEditProgram(null);
//     };

//     const handleDelete = (id) => {
//         Inertia.delete(`/programs/${id}`);
//     };

//     return (
//         <AuthenticatedLayout
//             user={auth.user}
//             header={
//                 <h2 className="font-semibold text-xl text-gray-800 leading-tight">
//                     Dashboard
//                 </h2>
//             }
//         >
//             <Head title="Dashboard" />

//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         {renderSection()}
//                     </div>

//                     <div className="mt-8 space-x-4">
//                         <button
//                             onClick={() => setSelectedSection("dashboard")}
//                             className="text-lg font-medium text-blue-900"
//                         >
//                             Dashboard
//                         </button>
//                         <button
//                             onClick={() => setSelectedSection("programs")}
//                             className="text-lg font-medium text-blue-900"
//                         >
//                             Program
//                         </button>
//                         {/* Tambahkan tombol lainnya sesuai kebutuhan */}
//                     </div>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }
