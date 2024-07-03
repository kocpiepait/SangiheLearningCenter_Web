import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Table, Button, Alert, Modal } from "react-bootstrap";
import { Head, Link, router, usePage } from "@inertiajs/react";

const IndexTestimoni = ({ auth, testimonis }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isImage, setIsImage] = useState(false);

  const { props } = usePage();
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    if (props.flash && props.flash.success) {
      console.log(props.flash.success);
    }
  }, [props.flash]);

  const deleteTestimoni = (testimoni) => {
    if (!window.confirm("Apakah anda yakin ingin menghapus testimoni ?")) {
      return;
    }
    router.delete(route("testimoni.destroy", testimoni.id));
  };

  const handleShowModal = (content, isImage = false) => {
    setModalContent(content);
    setIsImage(isImage);
    setShowModal(true);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Testimoni
        </h2>
      }
    >
      <Head title="Testimoni" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Link
            href={route("testimoni.create")}
            className="btn btn-primary mb-3"
          >
            Tambah Testimoni
          </Link>

          {successMessage && (
            <Alert
              variant="success"
              onClose={() => setSuccessMessage(null)}
              dismissible
            >
              {successMessage}
            </Alert>
          )}

          <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg">
            <div className="p-6 text-black dark:text-gray-100">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="w-16">No</th>
                    <th className="w-24 text-nowrap">Foto Testimoni</th>
                    <th className="w-48 text-nowrap">Nama Testimoni</th>
                    <th className="w-64">Isi Testimoni</th>
                    <th className="w-32">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonis.map((testimoni, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={`/images/${testimoni.gambar_testimoni}`}
                          alt={testimoni.nama_testimoni}
                          width="50"
                          className="cursor-pointer"
                          onClick={() =>
                            handleShowModal(
                              `/images/${testimoni.gambar_testimoni}`,
                              true
                            )
                          }
                        />
                      </td>
                      <td
                        className="truncate max-w-xs cursor-pointer"
                        onClick={() =>
                          handleShowModal(testimoni.nama_testimoni)
                        }
                      >
                        {testimoni.nama_testimoni}
                      </td>
                      <td
                        className="truncate max-w-xs cursor-pointer"
                        onClick={() => handleShowModal(testimoni.isi_testimoni)}
                      >
                        {testimoni.isi_testimoni}
                      </td>
                      <td>
                        <div className="flex flex-row flex-nowrap">
                          <Link
                            href={`/testimoni/${testimoni.id}/edit`}
                            className="btn btn-warning btn-sm mr-2"
                          >
                            Edit
                          </Link>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={(e) => deleteTestimoni(testimoni)}
                          >
                            Delete
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isImage ? (
            <img src={modalContent} alt="Testimoni" className="w-full" />
          ) : (
            <p>{modalContent}</p>
          )}
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

export default IndexTestimoni;
