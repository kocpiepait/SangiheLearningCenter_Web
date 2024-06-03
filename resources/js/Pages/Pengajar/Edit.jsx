import React, { useState } from "react";
import { Inertia, Method } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react"; // Pastikan import InertiaLink
import "bootstrap/dist/css/bootstrap.min.css";

const Edit = ({ pengajar, programs }) => {
    console.log(programs);
    const [values, setValues] = useState({
        nama_pengajar: pengajar.nama_pengajar,
        id_program: pengajar.id_program,
        foto_pengajar: null,
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
        formData.append("nama_pengajar", values.nama_pengajar);
        formData.append("id_program", values.id_program);
        // formData.append("foto_pengajar", values.foto_pengajar);
        if (values.foto_pengajar) {
            formData.append("foto_pengajar", values.foto_pengajar);
        }
        formData.append("_method", "PUT"); // untuk menyatakan metode PUT

        // const handleSubmit = (e) => {
        //     e.preventDefault();
        //     Inertia.put(`/pengajar/${pengajar.id_pengajar}`, {
        //         nama_pengajar,
        //         id_program,
        //         foto_pengajar,
        //     });

        // Inertia.put(`/pengajar/${pengajar.id_pengajar}`, formData);
        Inertia.post(route("pengajar.update", pengajar.id_pengajar), formData); // metode POST untuk pembaruan inertia
    };
    return (
        <div className="container">
            <h1>Edit Pengajar</h1>
            <InertiaLink href="/pengajar" className="btn btn-secondary">
                {" "}
                kembali{" "}
            </InertiaLink>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nama Pengajar</label>
                    <input
                        type="text"
                        name="nama_pengajar"
                        // value={nama_pengajar}
                        value={values.nama_pengajar}
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
                    <label>Foto Pengajar</label>
                    <input
                        type="file"
                        // value={foto_pengajar}
                        name="foto_pengajar"
                        onChange={handleChange}
                        // onChange={(e) => setFotoPengajar(e.target.value)}
                    />
                </div>
                <button type="submit">Simpan</button>
            </form>
        </div>
    );
};

export default Edit;
