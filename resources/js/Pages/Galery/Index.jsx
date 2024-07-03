import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Table, Button, Modal } from "react-bootstrap";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, galeries }) => {
  console.log(galeries);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleDelete = (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus gambar ini?")) {
      Inertia.delete(route("galery.destroy", id));
    }
  };

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Galeri
        </h2>
      }
    >
      <Head title="Galeri" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Link href={route("galery.create")} className="btn btn-primary mb-3">
            Tambah Galeri
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
                        alt="Galeri"
                        onClick={() =>
                          handleShowModal(`/storage/${galery.foto}`)
                        }
                      />
                      <div className="card-body">
                        <Link
                          href={route("galery.edit", galery.id)}
                          className="btn btn-warning mr-2"
                        >
                          Edit
                        </Link>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(galery.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Gambar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={modalContent} alt="Galeri" className="w-full" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </AuthenticatedLayout>
  );
};

export default Index;
