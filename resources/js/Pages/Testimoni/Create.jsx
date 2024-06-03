import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Form, Button } from "react-bootstrap";

const Create = () => {
    const [form, setForm] = useState({
        isi_testimoni: "",
        nama_testimoni: "",
        status_testimoni: "",
    });

    // Fungsi untuk menangani perubahan nilai field
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    // const handleChange = (e) => {
    //     setForm({ ...form, [e.target.name]: e.target.value });
    // };

    // Fungsi untuk menangani pengiriman data formulir
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/testimoni", form);
    };

    return (
        <div className="container mt-5">
            <h1>Tambah Testimoni</h1>
            <a href="/testimoni" class="btn btn-secondary">
                {" "}
                kembali{" "}
            </a>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Isi Testimoni</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="isi_testimoni"
                        placeholder="Isi Testimoni"
                        value={form.isi_testimoni}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nama Testimoni</Form.Label>
                    <Form.Control
                        type="text"
                        name="nama_testimoni"
                        placeholder="Nama Testimoni"
                        value={form.nama_testimoni}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status Testimoni</Form.Label>
                    <Form.Control
                        type="text"
                        name="status_testimoni"
                        placeholder="Status Testimoni"
                        value={form.status_testimoni}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" className="mt-3">
                    Tambah
                </Button>
            </Form>
        </div>
    );
};

export default Create;
