import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react"; // Pastikan import InertiaLink

const Create = ({ pengajars, pesertas, programs }) => {
    // const { pengajars, pesertas, programs } = usePage().props;
    const [values, setValues] = useState({
        id_pengajar: "",
        id_peserta: "",
        id_program: "",
        jumlah_peserta: "",
        tahun_ajaran: "",
    });

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route("processing.store"), values);
    };

    return (
        <div className="container">
            <h1>Tambah Processing</h1>
            <InertiaLink
                href={route("processing.index")}
                className="btn btn-secondary"
            >
                Kembali
            </InertiaLink>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Pengajar</label>
                    <select
                        name="id_pengajar"
                        onChange={handleChange}
                        className="form-control"
                        required
                    >
                        <option value="">Pilih Pengajar</option>
                        {pengajars.map((pengajar) => (
                            <option
                                key={pengajar.id_pengajar}
                                value={pengajar.id_pengajar}
                            >
                                {pengajar.nama_pengajar}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Peserta</label>
                    <select
                        name="id_peserta"
                        onChange={handleChange}
                        className="form-control"
                        required
                    >
                        <option value="">Pilih Peserta</option>
                        {pesertas.map((peserta) => (
                            <option
                                key={peserta.id_peserta}
                                value={peserta.id_peserta}
                            >
                                {peserta.nama_peserta}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Program</label>
                    <select
                        name="id_program"
                        onChange={handleChange}
                        className="form-control"
                        required
                    >
                        <option value="">Pilih Program</option>
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
                    <label>Jumlah Peserta</label>
                    <input
                        type="number"
                        name="jumlah_peserta"
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Tahun Ajaran</label>
                    <input
                        type="text"
                        name="tahun_ajaran"
                        className="form-control"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Simpan
                </button>
            </form>
        </div>
    );
};

export default Create;
