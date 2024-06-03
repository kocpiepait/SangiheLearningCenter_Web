import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react"; // Pastikan import InertiaLink
import { Table } from "react-bootstrap";

const Create = ({ programs }) => {
    const [values, setValues] = useState({
        nama_peserta: "",
        id_program: "",
        usia_peserta: "",
        alamat: "",
        jenis_kelamin: "",
        TTL: "",
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
        formData.append("nama_peserta", values.nama_peserta);
        formData.append("id_program", values.id_program);
        formData.append("usia_peserta", values.usia_peserta);
        formData.append("alamat", values.alamat);
        formData.append("jenis_kelamin", values.jenis_kelamin);
        formData.append("TTL", values.TTL);

        // Inertia.post("/pengajar", formData);
        Inertia.post(route("peserta.store"), formData);
    };

    return (
        <div className="container mt-5">
            <h1>Tambah Peserta</h1>
            <InertiaLink
                href={route("peserta.index")}
                className="btn btn-secondary"
            >
                {" "}
                kembali{" "}
            </InertiaLink>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nama Peserta</label>
                    <input
                        type="text"
                        name="nama_peserta"
                        placeholder="Masukan nama peserta"
                        value={values.nama_peserta}
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
                <div className="form-group">
                    <label>Usia Peserta</label>
                    <input
                        type="text"
                        name="usia_peserta"
                        placeholder="Masukan usia peserta"
                        value={values.usia_peserta}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Alamat</label>
                    <input
                        type="text"
                        name="alamat"
                        placeholder="Masukan alamat yang benar"
                        value={values.alamat}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Jenis Kelamin</label>
                    <input
                        type="text"
                        name="jenis_kelamin"
                        placeholder="Masukan jenis kelamin"
                        value={values.jenis_kelamin}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>TTL</label>
                    <input
                        type="date"
                        name="TTL"
                        value={values.TTL}
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
