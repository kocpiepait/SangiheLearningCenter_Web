import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Form, Button } from "react-bootstrap";

const Create = () => {
    const [form, setForm] = useState({
        media: "",
        headline_berita: "",
        isi_berita: "",
        tanggal_publikasi: "",
        corresponden: "",
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
        Inertia.post("/berita", form);
    };

    return (
        <div className="container mt-5">
            <h1>Tambah Berita</h1>
            <a href="/berita" class="btn btn-secondary">
                {" "}
                kembali{" "}
            </a>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Media</Form.Label>
                    <Form.Control
                        type="text"
                        name="media"
                        value={form.media}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Headline Berita</Form.Label>
                    <Form.Control
                        type="text"
                        name="headline_berita"
                        value={form.headline_berita}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Isi Berita</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="isi_berita"
                        value={form.isi_berita}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tanggal Publikasi</Form.Label>
                    <Form.Control
                        type="date"
                        name="tanggal_publikasi"
                        value={form.tanggal_publikasi}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Corresponden</Form.Label>
                    <Form.Control
                        type="text"
                        name="corresponden"
                        value={form.corresponden}
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
