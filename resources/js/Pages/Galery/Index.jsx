import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import "bootstrap/dist/css/bootstrap.min.css";

const Index = ({ galeries }) => {
    const handleDelete = (id) => {
        if (confirm("Apakah Anda yakin ingin menghapus gambar ini?")) {
            Inertia.delete(route("galery.destroy", id));
        }
    };

    return (
        <div className="container">
            <h1>Galeri</h1>
            <Link
                href={route("galery.create")}
                className="btn btn-primary mb-3"
            >
                Tambah Gambar
            </Link>
            <div className="row">
                {galeries.map((galery) => (
                    <div key={galery.id} className="col-md-4 mb-3">
                        <div className="card">
                            <img
                                src={`/storage/${galery.foto}`}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <Link
                                    href={route("galery.edit", galery.id)}
                                    className="btn btn-warning mr-2"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(galery.id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;
