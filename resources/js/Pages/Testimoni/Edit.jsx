import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import "bootstrap/dist/css/bootstrap.min.css";

const Edit = ({ testimoni }) => {
    // State untuk menyimpan nilai field berita
    const [form, setForm] = useState({
        isi_testimoni: testimoni.isi_testimoni,
        nama_testimoni: testimoni.nama_testimoni,
        status_testimoni: testimoni.status_testimoni,
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
        Inertia.put(`/testimoni/${testimoni.id}`, form);
    };

    return (
        <div className="container">
            <h1>Edit Testimoni</h1>
            <a href="/testimoni" class="btn btn-secondary">
                {" "}
                kembali{" "}
            </a>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Isi Testimoni</label>
                    <textarea
                        name="isi_testimoni"
                        value={form.isi_testimoni}
                        onChange={handleChange}
                        className="form-control"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Nama Testimoni</label>
                    <input
                        type="text"
                        name="nama_testimoni"
                        value={form.nama_testimoni}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Status Testimoni</label>
                    <input
                        type="text"
                        name="status_testimoni"
                        value={form.status_testimoni}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Simpan
                </button>
            </form>
        </div>
    );
};

export default Edit;
