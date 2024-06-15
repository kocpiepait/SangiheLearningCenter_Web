import React, { useState } from "react";
import { Inertia, Method } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react"; // Pastikan import InertiaLink
import "bootstrap/dist/css/bootstrap.min.css";

const Edit = ({ berita }) => {
    const [values, setValues] = useState({
        headline_berita: berita.headline_berita,
        isi_berita: berita.isi_berita,
        tanggal_publikasi: berita.tanggal_publikasi,
        corresponden: berita.corresponden,
        media: null,
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
        formData.append("headline_berita", values.headline_berita);
        formData.append("isi_berita", values.isi_berita);
        formData.append("tanggal_publikasi", values.tanggal_publikasi);
        formData.append("corresponden", values.corresponden);
        if (values.media) {
            formData.append("media", values.media);
        }
        formData.append("_method", "PUT"); // untuk menyatakan metode PUT
        Inertia.post(route("berita.update", berita.id), formData); // metode POST untuk pembaruan inertia
    };
    return (
        <div className="container">
            <h1>Edit Berita</h1>
            <InertiaLink href="/berita" className="btn btn-secondary">
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
                    <input type="file" name="media" onChange={handleChange} />
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

// const Edit = ({ berita }) => {
//     // State untuk menyimpan nilai field berita
//     const [form, setForm] = useState({
//         media: berita.media,
//         headline_berita: berita.headline_berita,
//         isi_berita: berita.isi_berita,
//         tanggal_publikasi: berita.tanggal_publikasi,
//         corresponden: berita.corresponden,
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
//         Inertia.put(`/berita/${berita.id}`, form);
//     };

//     return (
//         <div className="container">
//             <h1>Edit Berita</h1>
//             <a href="/berita" class="btn btn-secondary">
//                 {" "}
//                 kembali{" "}
//             </a>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Media</label>
//                     <input
//                         type="file"
//                         name="media"
//                         value={form.media}
//                         onChange={handleChange}
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Headline Berita</label>
//                     <input
//                         type="text"
//                         name="headline_berita"
//                         value={form.headline_berita}
//                         onChange={handleChange}
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Isi Berita</label>
//                     <textarea
//                         name="isi_berita"
//                         value={form.isi_berita}
//                         onChange={handleChange}
//                         className="form-control"
//                     ></textarea>
//                 </div>
//                 <div className="form-group">
//                     <label>Tanggal Publikasi</label>
//                     <input
//                         type="date"
//                         name="tanggal_publikasi"
//                         value={form.tanggal_publikasi}
//                         onChange={handleChange}
//                         className="form-control"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Corresponden</label>
//                     <input
//                         type="text"
//                         name="corresponden"
//                         value={form.corresponden}
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

// import React, { useState } from "react";
// import { Inertia } from "@inertiajs/inertia";
// import { Form, Button } from "react-bootstrap";

// const Edit = ({ berita }) => {
//     const [form, setForm] = useState({
//         media: berita.media,
//         headline_berita: berita.headline_berita,
//         isi_berita: berita.isi_berita,
//         tanggal_publikasi: berita.tanggal_publikasi,
//         corresponden: berita.corresponden,
//     });

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.id]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         Inertia.put(`/berita/${berita.id}`, form);
//     };

//     return (
//         <div className="container mt-5">
//             <h1>Edit Berita</h1>
//             <Form onSubmit={handleSubmit}>
//                 <Form.Group>
//                     <Form.Label>Media</Form.Label>
//                     <Form.Control
//                         id="media"
//                         value={berita.media}
//                         onChange={handleChange}
//                         type="text"
//                         placeholder="Masukan Media"
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Headline Berita</Form.Label>
//                     <Form.Control
//                         id="headline_berita"
//                         value={berita.headline_berita}
//                         onChange={handleChange}
//                         type="text"
//                         Placeholder="Masukan Headline Berita"
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Isi Berita</Form.Label>
//                     <Form.Control
//                         id="isi_berita"
//                         value={berita.isi_berita}
//                         onChange={handleChange}
//                         type="textarea"
//                         placeholder="Masukan Isi Berita"
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Tanggal Publikasi</Form.Label>
//                     <Form.Control
//                         id="tanggal_publikasi"
//                         value={berita.tanggal_publikasi}
//                         onChange={handleChange}
//                         type="date"
//                     />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Corresponden</Form.Label>
//                     <Form.Control
//                         id="corresponden"
//                         value={berita.corresponden}
//                         onChange={handleChange}
//                         type="text"
//                         placeholder="Masukan Corresponden"
//                     />
//                 </Form.Group>
//                 <Button type="submit" className="mt-3">
//                     Update
//                 </Button>
//             </Form>
//         </div>
//     );
// };

// export default Edit;
