import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Table, Button, Alert, Modal } from "react-bootstrap";
import { Head, Link, router, usePage } from "@inertiajs/react";
// Sesuaikan path sesuai struktur proyek Anda

const Index = ({ auth, beritas }) => {
  console.log(beritas);
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

  const deleteBerita = (berita) => {
    if (!window.confirm("Apakah anda yakin ingin menghapus berita?")) {
      return;
    }
    router.delete(route("beritas.destroy", berita.id));
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
          Berita
        </h2>
      }
    >
      <Head title="Berita" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Link href={route("beritas.create")} className="btn btn-primary mb-3">
            Tambah Berita
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
                    <th className="w-24 text-nowrap">Media</th>
                    <th className="w-48 text-nowrap">Headline</th>
                    <th className="w-64">Isi Berita</th>
                    <th className="w-48">Tanggal Publikasi</th>
                    <th className="w-48">Corresponden</th>
                    <th className="w-32">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {beritas.map((berita, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={`/storage/${berita.media}`}
                          alt={berita.headline_berita}
                          width="50"
                          className="cursor-pointer"
                          onClick={() =>
                            handleShowModal(
                              `/public/media/${berita.media}`,
                              true
                            )
                          }
                        />
                      </td>
                      <td
                        className="truncate max-w-xs cursor-pointer"
                        onClick={() => handleShowModal(berita.headline_berita)}
                      >
                        {berita.headline_berita}
                      </td>
                      <td
                        className="truncate max-w-xs cursor-pointer"
                        onClick={() => handleShowModal(berita.isi_berita)}
                      >
                        {berita.isi_berita}
                      </td>
                      <td className="text-nowrap">
                        {berita.tanggal_publikasi}
                      </td>
                      <td className="text-nowrap">{berita.corresponden}</td>
                      <td>
                        <div className="flex flex-row flex-nowrap">
                          <Link
                            href={`/beritas/${berita.id}/edit`}
                            className="btn btn-warning btn-sm mr-2"
                          >
                            Edit
                          </Link>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={(e) => deleteBerita(berita)}
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
            <img src={modalContent} alt="Berita" className="w-full" />
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

export default Index;
