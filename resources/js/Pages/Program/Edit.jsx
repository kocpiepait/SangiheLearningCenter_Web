import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import "bootstrap/dist/css/bootstrap.min.css";

const Edit = ({ program }) => {
    // State untuk menyimpan nilai field berita
    const [form, setForm] = useState({
        nama_program: program.nama_program,
        detail_program: program.detail_program,
    });

    // Fungsi untuk menangani perubahan nilai field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Fungsi untuk menangani pengiriman data formulir
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/program/${program.id_program}`, form);
    };

    return (
        <div className="container">
            <h1>Edit Program</h1>
            <a href="/program" class="btn btn-secondary">
                {" "}
                kembali{" "}
            </a>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nama program</label>
                    <input
                        type="text"
                        name="nama_program"
                        value={form.nama_program}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Detail Program</label>
                    <textarea
                        name="detail_program"
                        value={form.detail_program}
                        onChange={handleChange}
                        className="form-control"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                    Simpan
                </button>
            </form>
        </div>
    );
};

export default Edit;

// import React, { useState } from "react";
// import { Inertia } from "@inertiajs/inertia";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Edit = ({ program }) => {
//     // State untuk menyimpan nilai field program
//     const [form, setForm] = useState({
//         nama_program: program.nama_program,
//         detail_program: program.detail_program,
//     });

//     // Fungsi untuk menangani perubahan nilai field
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     // Fungsi untuk menangani pengiriman data formulir
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         Inertia.put(`/program/${program.id_program}`, form);
//     };

//     return (
//         <div className="container">
//             <h1>Edit Program</h1>
//             <a href="/berita" class="btn btn-secondary">
//                 {" "}
//                 kembali{" "}
//             </a>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Nama Program</label>
//                     <input
//                         type="text"
//                         name="nama_program"
//                         value={form.nama_program}
//                         onChange={handleChange}
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Detail Program</label>
//                     <textarea
//                         name="detail_program"
//                         value={data.detail_program}
//                         className="form-control"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                     Simpan
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Edit;

// import React from "react";
// import { useForm } from "@inertiajs/inertia-react";

// const Edit = ({ program }) => {
//     const { data, setData, put, errors } = useForm({
//         nama_program: program.nama_program || "",
//         detail_program: program.detail_program || "",
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         Inertia.put(`/program/${program.id_program}`);
//     };

//     return (
//         <div>
//             <h1>Edit Program</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         value={data.nama_program}
//                         onChange={(e) =>
//                             setData("nama_program", e.target.value)
//                         }
//                     />
//                     {errors.nama_program && (
//                         <div className="text-danger">{errors.nama_program}</div>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label>Details</label>
//                     <textarea
//                         className="form-control"
//                         value={data.detail_program}
//                         onChange={(e) =>
//                             setData("detail_program", e.target.value)
//                         }
//                     />
//                     {errors.detail_program && (
//                         <div className="text-danger">
//                             {errors.detail_program}
//                         </div>
//                     )}
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                     Update
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Edit;
