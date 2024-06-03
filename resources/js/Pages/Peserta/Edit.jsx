import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react"; // Pastikan import InertiaLink
import "bootstrap/dist/css/bootstrap.min.css";

const Edit = ({ peserta, programs }) => {
    console.log(programs);
    const [values, setValues] = useState({
        nama_peserta: peserta.nama_peserta,
        id_program: peserta.id_program,
        usia_peserta: peserta.usia_peserta,
        alamat: peserta.alamat,
        jenis_kelamin: peserta.jenis_kelamin,
        TTL: peserta.TTL,
    });

    // Menggunakan useEffect untuk memperbarui state ketika props peserta berubah
    useEffect(() => {
        if (peserta) {
            setValues({
                nama_peserta: peserta.nama_peserta,
                id_program: peserta.id_program,
                usia_peserta: peserta.usia_peserta,
                alamat: peserta.alamat,
                jenis_kelamin: peserta.jenis_kelamin,
                TTL: peserta.TTL,
            });
        }
    }, [peserta]);

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
        formData.append("nama_peserta", values.nama_peserta);
        formData.append("id_program", values.id_program);
        formData.append("usia_peserta", values.usia_peserta);
        formData.append("alamat", values.alamat);
        formData.append("jenis_kelamin", values.jenis_kelamin);
        formData.append("TTL", values.TTL);

        formData.append("_method", "PUT"); // untuk menyatakan metode PUT

        Inertia.post(route("peserta.update", peserta.id_peserta), formData); // metode POST untuk pembaruan inertia
    };
    return (
        <div className="container">
            <h1>Edit Peserta</h1>
            <InertiaLink href="/peserta" className="btn btn-secondary">
                {" "}
                kembali{" "}
            </InertiaLink>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nama Peserta</label>
                    <input
                        type="text"
                        name="nama_peserta"
                        // value={nama_pengajar}
                        value={values.nama_peserta}
                        onChange={handleChange}
                        // onChange={(e) => setNamaPengajar(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Program</label>
                    <select
                        name="id_program"
                        // value={id_program}
                        value={values.id_program}
                        onChange={handleChange}
                        // onChange={(e) => setIdProgram(e.target.value)}
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
                        // value={nama_pengajar}
                        value={values.usia_peserta}
                        onChange={handleChange}
                        // onChange={(e) => setNamaPengajar(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Alamat</label>
                    <input
                        type="text"
                        name="alamat"
                        // value={nama_pengajar}
                        value={values.alamat}
                        onChange={handleChange}
                        // onChange={(e) => setNamaPengajar(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Jenis Kelamin</label>
                    <input
                        type="text"
                        name="jenis_kelamin"
                        // value={nama_pengajar}
                        value={values.jenis_kelamin}
                        onChange={handleChange}
                        // onChange={(e) => setNamaPengajar(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>TTL</label>
                    <input
                        type="date"
                        name="TTL"
                        // value={nama_pengajar}
                        value={values.TTL}
                        onChange={handleChange}
                        // onChange={(e) => setNamaPengajar(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Simpan</button>
            </form>
        </div>
    );
};

export default Edit;
