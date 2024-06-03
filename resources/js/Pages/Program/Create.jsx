import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Form, Button } from "react-bootstrap";

const Create = () => {
    // const { form, setForm, post, errors } = useState({
    const [form, setForm] = useState({
        nama_program: "",
        detail_program: "",
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
        Inertia.post("/program", form);
    };

    return (
        <div className="container mt-5">
            <h1>Tambah Program</h1>
            <a href="/program" class="btn btn-secondary">
                {" "}
                kembali{" "}
            </a>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nama Program</label>
                    <input
                        type="text"
                        name="nama_program"
                        value={form.nama_program}
                        onChange={handleChange}
                        className="form-control"
                    />
                    {/* {errors.nama_program && (
                        <div className="text-danger">{errors.nama_program}</div>
                    )} */}
                </div>
                <div className="form-group">
                    <label>Detail Program</label>
                    <textarea
                        name="detail_program"
                        value={form.detail_program}
                        onChange={handleChange}
                        className="form-control"
                    />
                    {/* {errors.detail_program && (
                        <div className="text-danger">
                            {errors.detail_program}
                        </div>
                    )} */}
                </div>
                <button type="submit" className="btn btn-primary">
                    Tambah
                </button>
            </form>
        </div>
    );
};

export default Create;
