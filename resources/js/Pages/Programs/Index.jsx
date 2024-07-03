import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Table, Button, Alert, Modal } from "react-bootstrap";
import { Head, Link, router, usePage } from "@inertiajs/react";

const Index = ({ auth, programs }) => {
  console.log(programs);
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

  const deleteProgram = (program) => {
    if (!window.confirm("Apakah anda yakin ingin menghapus program ?")) {
      return;
    }
    router.delete(route("programs.destroy", program.id_program));
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
          Program
        </h2>
      }
    >
      <Head title="Program" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Link
            href={route("programs.create")}
            className="btn btn-primary mb-3"
          >
            Tambah Program
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
                    <th className="w-24 text-nowrap">Foto Program</th>
                    <th className="w-48 text-nowrap">Nama Program</th>
                    <th className="w-64">Deskripsi</th>
                    <th className="w-48">Lesson</th>
                    <th className="w-48">Pengajar</th>
                    <th className="w-48">Peserta</th>
                    <th className="w-32">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.data.map((program, index) => (
                    <tr key={index}>
                      <td>{program.id_program}</td>
                      <td>
                        <img
                          src={`/images/${program.img_program}`}
                          alt={program.nama_program}
                          width="50"
                          className="cursor-pointer"
                          onClick={() =>
                            handleShowModal(
                              `/images/${program.img_program}`,
                              true
                            )
                          }
                        />
                      </td>
                      <td
                        className="truncate max-w-xs cursor-pointer"
                        onClick={() => handleShowModal(program.nama_program)}
                      >
                        {program.nama_program}
                      </td>
                      <td
                        className="truncate max-w-xs cursor-pointer"
                        onClick={() => handleShowModal(program.deskripsi)}
                      >
                        {program.deskripsi}
                      </td>
                      <td
                        className="truncate max-w-xs cursor-pointer"
                        onClick={() => handleShowModal(program.lesson)}
                      >
                        {program.lesson}
                      </td>
                      <td className="text-nowrap">
                        {program.pengajar
                          ? program.pengajar.nama_pengajar
                          : "Tidak ada pengajar"}
                      </td>
                      <td>{program.pesertas.length}</td>
                      <td>
                        <div className="flex flex-row flex-nowrap">
                          <Link
                            href={`/programs/${program.id_program}/edit`}
                            className="btn btn-warning btn-sm mr-2"
                          >
                            Edit
                          </Link>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={(e) => deleteProgram(program)}
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
            <img src={modalContent} alt="Program" className="w-full" />
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
