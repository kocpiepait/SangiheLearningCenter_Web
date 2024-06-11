import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react"; // Pastikan import InertiaLink
import { Table } from "react-bootstrap";

const Create = () => {
    const [values, setValues] = useState({
        isi_testimoni: "",
        nama_testimoni: "",
        status_testimoni: "",
        gambar_testimoni: null,
    });

    // const handleChange = (e) => {
    //     const { name, type, files, value } = e.target;
    //     const newValue = type === "file" ? files[0] : value;

    //     setValues({
    //         ...values,
    //         [name]: newValue,
    //     });
    // };

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
        formData.append("gambar_testimoni", values.gambar_testimoni);

        // Inertia.post("/pengajar", formData);
        Inertia.post(route("testimoni.store"), formData);
    };

    return (
        <div className="container mt-5">
            <h1>Tambah Testimoni</h1>
            <InertiaLink
                href={route("testimoni.index")}
                className="btn btn-secondary"
            >
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
                    <label>Gambar Testimoni</label>
                    <input
                        type="file"
                        name="gambar_testimoni"
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
// import { Form, Button } from "react-bootstrap";

// const Create = () => {
//     const [form, setForm] = useState({
//         isi_testimoni: "",
//         nama_testimoni: "",
//         status_testimoni: "",
//     });

//     // Fungsi untuk menangani perubahan nilai field
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };
//     // const handleChange = (e) => {
//     //     setForm({ ...form, [e.target.name]: e.target.value });
//     // };

//     // Fungsi untuk menangani pengiriman data formulir
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         Inertia.post("/testimoni", form);
//     };

//     return (
//         <div className="container mt-5">
//             <h1>Tambah Testimoni</h1>
//             <a href="/testimoni" class="btn btn-secondary">
//                 {" "}
//                 kembali{" "}
//             </a>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group>
//                     <Form.Label>Isi Testimoni</Form.Label>
//                     <Form.Control
//                         as="textarea"
//                         name="isi_testimoni"
//                         placeholder="Isi Testimoni"
//                         value={form.isi_testimoni}
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Nama Testimoni</Form.Label>
//                     <Form.Control
//                         type="text"
//                         name="nama_testimoni"
//                         placeholder="Nama Testimoni"
//                         value={form.nama_testimoni}
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Status Testimoni</Form.Label>
//                     <Form.Control
//                         type="text"
//                         name="status_testimoni"
//                         placeholder="Status Testimoni"
//                         value={form.status_testimoni}
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Button type="submit" className="mt-3">
//                     Tambah
//                 </Button>
//             </Form>
//         </div>
//     );
// };

// export default Create;
