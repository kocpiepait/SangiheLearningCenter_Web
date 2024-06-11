import React, { useState } from "react";
import { Inertia, Method } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react"; // Pastikan import InertiaLink
import "bootstrap/dist/css/bootstrap.min.css";

const Edit = ({ testimoni }) => {
    const [values, setValues] = useState({
        isi_testimoni: testimoni.isi_testimoni,
        nama_testimoni: testimoni.nama_testimoni,
        status_testimoni: testimoni.status_testimoni,
        gambar_testimoni: null,
    });

    // const Edit = () => {
    //     const { pengajar, programs } = usePage().props;
    //     const [nama_pengajar, setNamaPengajar] = useState(pengajar.nama_pengajar);
    //     const [id_program, setIdProgram] = useState(pengajar.id_program);
    //     const [foto_pengajar, setFotoPengajar] = useState(pengajar.foto_pengajar);

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
        formData.append("isi_testimoni", values.isi_testimoni);
        formData.append("nama_testimoni", values.nama_testimoni);
        formData.append("status_testimoni", values.status_testimoni);
        if (values.foto_pengajar) {
            formData.append("gambar_testimoni", values.gambar_testimoni);
        }
        formData.append("_method", "PUT"); // untuk menyatakan metode PUT

        // Inertia.put(`/pengajar/${pengajar.id_pengajar}`, formData);
        Inertia.post(route("testimoni.update", testimoni.id), formData); // metode POST untuk pembaruan inertia
    };
    return (
        <div className="container">
            <h1>Edit Testimoni</h1>
            <InertiaLink href="/testimoni" className="btn btn-secondary">
                {" "}
                kembali{" "}
            </InertiaLink>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Isi Testimoni</label>
                    <input
                        as="textarea"
                        name="isi_testimoni"
                        value={values.isi_testimoni}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Nama Testimoni</label>
                    <input
                        type="text"
                        name="nama_testimoni"
                        value={values.nama_testimoni}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Status Testimoni</label>
                    <input
                        type="text"
                        name="status_testimoni"
                        value={values.status_testimoni}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Gamabar Testimoni</label>
                    <input
                        type="file"
                        name="gambar_testimoni"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Simpan</button>
            </form>
        </div>
    );
};

export default Edit;

// import React, { useState } from "react";
// import { Inertia } from "@inertiajs/inertia";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Edit = ({ testimoni }) => {
//     // State untuk menyimpan nilai field berita
//     const [form, setForm] = useState({
//         isi_testimoni: testimoni.isi_testimoni,
//         nama_testimoni: testimoni.nama_testimoni,
//         status_testimoni: testimoni.status_testimoni,
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
//         Inertia.put(`/testimoni/${testimoni.id}`, form);
//     };

//     return (
//         <div className="container">
//             <h1>Edit Testimoni</h1>
//             <a href="/testimoni" class="btn btn-secondary">
//                 {" "}
//                 kembali{" "}
//             </a>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Isi Testimoni</label>
//                     <textarea
//                         name="isi_testimoni"
//                         value={form.isi_testimoni}
//                         onChange={handleChange}
//                         className="form-control"
//                     ></textarea>
//                 </div>
//                 <div className="form-group">
//                     <label>Nama Testimoni</label>
//                     <input
//                         type="text"
//                         name="nama_testimoni"
//                         value={form.nama_testimoni}
//                         onChange={handleChange}
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Status Testimoni</label>
//                     <input
//                         type="text"
//                         name="status_testimoni"
//                         value={form.status_testimoni}
//                         onChange={handleChange}
//                         className="form-control"
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
