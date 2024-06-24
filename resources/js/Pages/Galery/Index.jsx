import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { InertiaLink, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-react";
import { Table, Button } from "react-bootstrap";
import { Head } from "@inertiajs/react";

const Index = ({ auth, galeries }) => {
  const handleDelete = (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus gambar ini?")) {
      Inertia.delete(route("galery.destroy", id));
    }
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Galery
        </h2>
      }
    >
      <Head title="Program" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Link href="/pengajar/create" className="btn btn-primary mb-3">
            Tambah Galery
          </Link>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-black dark:text-gray-100">
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
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
