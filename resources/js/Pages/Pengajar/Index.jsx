import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Link, Head, router } from "@inertiajs/react";
import { Table, Button, Modal } from "react-bootstrap";

const Index = ({ auth, pengajars }) => {
  console.log(pengajars);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isImage, setIsImage] = useState(false);

  // const handleDelete = (id_pengajar) => {
  //   if (confirm("Apakah anda yakin akan menghapus pengajar?")) {
  //     Inertia.delete(`/pengajars/${id_pengajar}`);
  //   }
  // };

  const deletePengajar = (pengajar) => {
    if (!window.confirm("Apakah anda yakin ingin menghapus program ?")) {
      return;
    }
    router.delete(route("pengajars.destroy", pengajar.id_pengajar));
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
          Pengajar
        </h2>
      }
    >
      <Head title="Pengajar" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Link href="/pengajars/create" className="btn btn-primary mb-3">
            Tambah Pengajar
          </Link>
          <div className="overflow-x-auto bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-black dark:text-gray-100">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th className="text-nowrap">Foto Pengajar</th>
                    <th>Nama Pengajar</th>
                    <th>Status</th>
                    <th>Pengalaman</th>
                    <th className="text-nowrap">Nama Program</th>
                    <th>Peserta</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {pengajars &&
                    pengajars.data &&
                    pengajars.data.map((pengajar, index) => (
                      <tr key={index}>
                        <td>{pengajar.id_pengajar}</td>
                        <td>
                          <img
                            src={pengajar.foto_pengajar}
                            alt={pengajar.nama_pengajar}
                            width="50"
                            className="cursor-pointer"
                            onClick={() =>
                              handleShowModal(pengajar.foto_pengajar, true)
                            }
                          />
                        </td>
                        <td
                          className="truncate max-w-xs cursor-pointer"
                          onClick={() =>
                            handleShowModal(pengajar.nama_pengajar)
                          }
                        >
                          {pengajar.nama_pengajar}
                        </td>
                        <td>{pengajar.status}</td>
                        <td
                          className="truncate max-w-xs cursor-pointer"
                          onClick={() => handleShowModal(pengajar.pengalaman)}
                        >
                          {pengajar.pengalaman}
                        </td>
                        <td className="text-nowrap">
                          {pengajar.programs.length > 0 ? (
                            <Button
                              variant="link"
                              onClick={() =>
                                handleShowModal(
                                  pengajar.programs.map(
                                    (program) => program.nama_program + ", "
                                  )
                                )
                              }
                            >
                              Lihat Program
                            </Button>
                          ) : (
                            "Tidak ada program"
                          )}
                        </td>
                        <td>{pengajar.pesertas && pengajar.pesertas.length}</td>
                        <td>
                          <div className="flex flex-nowrap">
                            <Link
                              href={`/pengajars/${pengajar.id_pengajar}/edit`}
                              className="btn btn-warning btn-sm mr-2"
                            >
                              Edit
                            </Link>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={(e) => deletePengajar(pengajar)}
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
            <img src={modalContent} alt="Pengajar" className="w-full" />
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
