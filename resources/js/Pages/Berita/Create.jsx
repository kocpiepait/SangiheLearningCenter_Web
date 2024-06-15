import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react"; // Pastikan import InertiaLink
import { Table } from "react-bootstrap";

const Create = () => {
    const [values, setValues] = useState({
        headline_berita: "",
        isi_berita: "",
        tanggal_publikasi: "",
        corresponden: "",
        media: null,
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
        formData.append("headline_berita", values.headline_berita);
        formData.append("isi_berita", values.isi_berita);
        formData.append("tanggal_publikasi", values.tanggal_publikasi);
        formData.append("corresponden", values.corresponden);
        formData.append("media", values.media);

        // Inertia.post("/pengajar", formData);
        Inertia.post(route("berita.store"), formData);
    };

    return (
        <div className="container mt-5">
            <h1>Tambah Berita</h1>
            <InertiaLink
                href={route("berita.index")}
                className="btn btn-secondary"
            >
                {" "}
                kembali{" "}
            </InertiaLink>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Headline Berita</label>
                    <input
                        type="text"
                        name="headline_berita"
                        value={values.headline_berita}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Isi Berita</label>
                    <input
                        as="textarea"
                        name="isi_berita"
                        value={values.isi_berita}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Tanggal Publikasi</label>
                    <input
                        type="date"
                        name="tanggal_publikasi"
                        value={values.tanggal_publikasi}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Corresponden</label>
                    <input
                        type="text"
                        name="corresponden"
                        value={values.corresponden}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Media</label>
                    <input
                        type="file"
                        name="media"
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
//         media: null,
//         headline_berita: "",
//         isi_berita: "",
//         tanggal_publikasi: "",
//         corresponden: "",
//     });

//     // Fungsi untuk menangani perubahan nilai field
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleFileChange = (e) => {
//         setForm((prevState) => ({
//             ...prevState,
//             media: e.target.files[0],
//         }));
//     };

//     // Fungsi untuk menangani perubahan nilai field
//     // const handleChange = (e) => {
//     //     const { name, value } = e.target;
//     //     setForm((prevState) => ({
//     //         ...prevState,
//     //         [name]: value,
//     //     }));
//     // };
//     // const handleChange = (e) => {
//     //     setForm({ ...form, [e.target.name]: e.target.value });
//     // };

//     // Fungsi untuk menangani pengiriman data formulir
//     // const handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     Inertia.post("/berita", form);
//     // };

//     // Fungsi untuk menangani pengiriman data formulir
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append("media", form.media);
//         formData.append("headline_berita", form.headline_berita);
//         formData.append("isi_berita", form.isi_berita);
//         formData.append("tanggal_publikasi", form.tanggal_publikasi);
//         formData.append("corresponden", form.corresponden);

//         Inertia.post("/berita", formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             },
//         });
//     };

//     return (
//         <div className="container mt-5">
//             <h1>Tambah Berita</h1>
//             <a href="/berita" class="btn btn-secondary">
//                 {" "}
//                 kembali{" "}
//             </a>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group>
//                     <Form.Label>Media</Form.Label>
//                     <Form.Control
//                         type="file"
//                         name="media"
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Headline Berita</Form.Label>
//                     <Form.Control
//                         type="text"
//                         name="headline_berita"
//                         value={form.headline_berita}
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Isi Berita</Form.Label>
//                     <Form.Control
//                         as="textarea"
//                         name="isi_berita"
//                         value={form.isi_berita}
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Tanggal Publikasi</Form.Label>
//                     <Form.Control
//                         type="date"
//                         name="tanggal_publikasi"
//                         value={form.tanggal_publikasi}
//                         onChange={handleChange}
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Corresponden</Form.Label>
//                     <Form.Control
//                         type="text"
//                         name="corresponden"
//                         value={form.corresponden}
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
