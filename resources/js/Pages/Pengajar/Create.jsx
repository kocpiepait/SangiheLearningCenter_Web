import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react"; // Pastikan import InertiaLink
import { Table } from "react-bootstrap";

const Create = ({ programs }) => {
    const [values, setValues] = useState({
        nama_pengajar: "",
        id_program: "",
        foto_pengajar: null,
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]:
                e.target.type === "file" ? e.target.files[0] : e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama_pengajar", values.nama_pengajar);
        formData.append("id_program", values.id_program);
        formData.append("foto_pengajar", values.foto_pengajar);

        // Inertia.post("/pengajar", formData);
        Inertia.post(route("pengajar.store"), formData);
    };

    return (
        <div className="container mt-5">
            <h1>Tambah Pengajar</h1>
            <InertiaLink
                href={route("pengajar.index")}
                className="btn btn-secondary"
            >
                {" "}
                kembali{" "}
            </InertiaLink>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nama Pengajar</label>
                    <input
                        type="text"
                        name="nama_pengajar"
                        placeholder="Masukan nama pengajar"
                        value={values.nama_pengajar}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Program</label>
                    <select
                        name="id_program"
                        value={values.id_program}
                        onChange={handleChange}
                        required
                    >
                        {programs.map((program) => (
                            <option
                                key={program.id_program}
                                value={program.id_program}
                            >
                                {program.nama_program}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Foto Pengajar</label>
                    <input
                        type="file"
                        name="foto_pengajar"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Tambah</button>
            </form>
        </div>
    );
};

export default Create;

// import React, { useState } from "react";
// import { Inertia } from "@inertiajs/inertia";
// import { usePage } from "@inertiajs/inertia-react";

// const Create = () => {
//     const { programs } = usePage().props;
//     const [nama_pengajar, setNamaPengajar] = useState("");
//     const [id_program, setIdProgram] = useState("");
//     const [foto_pengajar, setFotoPengajar] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         Inertia.post("/pengajar", {
//             nama_pengajar,
//             id_program,
//             foto_pengajar,
//         });
//     };

//     return (
//         <div>
//             <h1>Create Pengajar</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         value={nama_pengajar}
//                         onChange={(e) => setNamaPengajar(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Program</label>
//                     <select
//                         value={id_program}
//                         onChange={(e) => setIdProgram(e.target.value)}
//                     >
//                         <option value="">Select Program</option>
//                         {programs.map((program) => (
//                             <option
//                                 key={program.id_program}
//                                 value={program.id_program}
//                             >
//                                 {program.nama_program}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label>Photo</label>
//                     <input
//                         type="text"
//                         value={foto_pengajar}
//                         onChange={(e) => setFotoPengajar(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Create</button>
//             </form>
//         </div>
//     );
// };

// export default Create;
