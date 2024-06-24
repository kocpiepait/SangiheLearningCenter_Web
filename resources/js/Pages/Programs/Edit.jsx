// Edit.jsx
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head, Link } from "@inertiajs/react";
import { Form, Button, Alert } from "react-bootstrap";

const Edit = ({ auth, program, pengajar }) => {
  console.log(pengajar);
  const { data, setData, put, errors } = useForm({
    nama_program: program.nama_program || "",
    deskripsi: program.deskripsi || "",
    lesson: program.lesson || "",
    img_program: null,
    id_pengajar: program.id_pengajar || "",
    // Add other fields as necessary
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_program", data.nama_program);
    formData.append("deskripsi", data.deskripsi);
    formData.append("lesson", data.lesson);
    formData.append("img_program", data.img_program);
    formData.append("id_pengajar", data.id_pengajar);

    put(`/programs/${program.id_program}`, formData);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Edit Program
        </h2>
      }
    >
      <Head title="Edit Program" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-black dark:text-gray-100">
              {Object.keys(errors).length > 0 && (
                <Alert variant="danger">
                  {Object.values(errors).map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="nama_program">
                  <Form.Label>Nama Program</Form.Label>
                  <Form.Control
                    type="text"
                    value={data.nama_program}
                    onChange={(e) => setData("nama_program", e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="deskripsi">
                  <Form.Label>Deskripsi</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={data.deskripsi}
                    onChange={(e) => setData("deskripsi", e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="lesson">
                  <Form.Label>Lesson</Form.Label>
                  <Form.Control
                    type="text"
                    value={data.lesson}
                    onChange={(e) => setData("lesson", e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="img_program">
                  <Form.Label>Gambar Program</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setData("img_program", e.target.files[0])}
                  />
                </Form.Group>

                <Form.Group controlId="id_pengajar">
                  <Form.Label>Pengajar</Form.Label>
                  <Form.Control
                    as="select"
                    value={data.id_pengajar}
                    onChange={(e) => setData("id_pengajar", e.target.value)}
                  >
                    <option value="">Pilih Pengajar</option>
                    {pengajar.length > 0 ? (
                      pengajar.map((pengajar) => (
                        <option
                          key={pengajar.id_pengajar}
                          value={pengajar.id_pengajar}
                        >
                          {pengajar.nama_pengajar}
                        </option>
                      ))
                    ) : (
                      <option value="">Tidak ada pengajar tersedia</option>
                    )}
                  </Form.Control>
                </Form.Group>

                <Button type="submit" className="mt-4">
                  Update
                </Button>
                <Link href="/programs" className="btn btn-secondary mt-4 ml-2">
                  Kembali
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Edit;
