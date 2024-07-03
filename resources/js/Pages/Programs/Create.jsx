import React from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import Select from "react-select";
import { Form, Button, Alert } from "react-bootstrap";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const CreateProgram = ({ auth, pengajar }) => {
  const { data, setData, post, errors, reset } = useForm({
    nama_program: "",
    deskripsi: "",
    lesson: "",
    id_pengajar: null,
    img_program: null, // Field baru untuk gambar
  });

  const handlePengajarChange = (selectedOption) => {
    setData("id_pengajar", selectedOption ? selectedOption.value : null);
  };

  const handleFileChange = (e) => {
    setData("img_program", e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_program", data.nama_program);
    formData.append("deskripsi", data.deskripsi);
    formData.append("lesson", data.lesson);
    formData.append("id_pengajar", data.id_pengajar);
    formData.append("img_program", data.img_program); // Menambahkan gambar ke formData

    post("/programs", {
      data: formData,
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  const pengajarOptions = pengajar.map((pengajarItem) => ({
    value: pengajarItem.id_pengajar,
    label: pengajarItem.nama_pengajar,
  }));

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Tambah Program
        </h2>
      }
    >
      <Head title="Tambah Program" />

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
                    rows={10}
                    maxLength={2000}
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

                <Form.Group controlId="id_pengajar">
                  <Form.Label>Nama Pengajar</Form.Label>
                  <Select
                    options={pengajarOptions}
                    value={pengajarOptions.find(
                      (option) => option.value === data.id_pengajar
                    )}
                    onChange={handlePengajarChange}
                  />
                </Form.Group>

                <Form.Group controlId="gambar_program">
                  <Form.Label>Gambar Program</Form.Label>
                  <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>

                <Button type="submit" className="mt-4">
                  Tambah
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

export default CreateProgram;
