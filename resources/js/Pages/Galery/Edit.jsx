import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Edit = ({ galery }) => {
    const { data, setData, put, errors } = useForm({
        foto: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("foto", data.foto);
        formData.append("_method", "PUT"); // tambahkan ini untuk menyatakan metode PUT
        Inertia.post(route("galery.update", galery.id), formData); // gunakan metode POST untuk pembaruan inertia
    };

    return (
        <div className="container">
            <h1>Edit Gambar</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="foto">Foto</label>
                    <input
                        type="file"
                        className="form-control"
                        id="foto"
                        name="foto"
                        onChange={handleChange}
                    />
                    {errors.foto && (
                        <div className="text-danger">{errors.foto}</div>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">
                    Simpan
                </button>
            </form>
        </div>
    );
};

export default Edit;
