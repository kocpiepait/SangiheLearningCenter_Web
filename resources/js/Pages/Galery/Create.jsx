import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink } from "@inertiajs/inertia-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Create = () => {
    const [foto, setFoto] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("foto", foto);

        Inertia.post(route("galery.store"), formData);
    };

    return (
        <div className="container mt-5">
            <h1>Tambah Gambar</h1>
            <InertiaLink
                href={route("galery.index")}
                className="btn btn-secondary mb-3"
            >
                Kembali
            </InertiaLink>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Foto:</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setFoto(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                    Simpan
                </button>
            </form>
        </div>
    );
};

export default Create;
