import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Table, Button, Alert, Modal } from "react-bootstrap";
import { Head, Link, usePage } from "@inertiajs/react";

const Index = ({ auth, pesertas }) => {
  console.log(pesertas);
  const { props } = usePage();
  const [showModal, setShowModal] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("");
  const [isImage, setIsImage] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState(null);

  React.useEffect(() => {
    if (props.flash && props.flash.success) {
      setSuccessMessage(props.flash.success);
    }
  }, [props.flash]);

  const handleDelete = (id_peserta) => {
    if (window.confirm("Apakah anda yakin akan menghapus peserta?")) {
      Inertia.delete(route("peserta.destroy", id_peserta), {
        onSuccess: () => {
          setSuccessMessage("Peserta berhasil dihapus.");
        },
        onError: (error) => {
          console.log("Error deleting peserta:", error);
        },
      });
    }
  };

  const handleShowModal = (content, isImage = false) => {
    setModalContent(content);
    setIsImage(isImage);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent("");
    setIsImage(false);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Daftar Peserta
        </h2>
      }
    >
      <Head title="Daftar Peserta" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <Link href={route("peserta.create")} className="btn btn-primary mb-3">
            Tambah Peserta
          </Link>

          {successMessage && (
            <Alert
              variant="success"
              onClose={() => setSuccessMessage(null)}
              dismissible
              className="my-3"
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
                    <th>Nama Peserta</th>
                    <th className="text-nowrap">Jenis Kelamin</th>
                    <th>Alamat</th>
                    <th>TTL</th>
                    <th>Nama Program</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {pesertas.map((peserta, index) => (
                    <tr key={index}>
                      <td>{peserta.id_peserta}</td>
                      <td>{peserta.nama_peserta}</td>
                      <td>{peserta.jenis_kelamin}</td>
                      <td>{peserta.alamat}</td>
                      <td className="text-nowrap">{peserta.TTL}</td>
                      <td className="text-nowrap">
                        {peserta.program ? peserta.program.nama_program : "-"}
                      </td>
                      <td>
                        <div className="flex flex-row">
                          <Link
                            href={route("peserta.edit", peserta.id_peserta)}
                            className="btn btn-warning btn-sm mr-2"
                          >
                            Edit
                          </Link>
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => handleDelete(peserta.id_peserta)}
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

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detail Peserta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isImage ? (
            <img src={modalContent} alt="Foto Peserta" className="w-full" />
          ) : (
            <p>{modalContent}</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </AuthenticatedLayout>
  );
};

export default Index;
