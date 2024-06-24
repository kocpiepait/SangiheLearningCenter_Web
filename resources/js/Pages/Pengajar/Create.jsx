import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head, Link } from "@inertiajs/react";
import Select from "react-select";
import { Form, Button, Alert } from "react-bootstrap";

const CreatePengajar = ({ auth, programs }) => {
  const { data, setData, post, errors, reset } = useForm({
    nama_pengajar: "",
    foto_pengajar: null,
    pengalaman: "",
    status: "",
    id_programs: [], // Inisialisasi dengan array kosong
  });

  const handleProgramChange = (selectedOptions) => {
    const selectedProgramIds = selectedOptions.map((option) => option.value);
    setData("id_programs", selectedProgramIds);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama_pengajar", data.nama_pengajar);
    formData.append("foto_pengajar", data.foto_pengajar);
    formData.append("pengalaman", data.pengalaman);
    formData.append("status", data.status);
    formData.append("id_programs", JSON.stringify(data.id_programs)); // Mengubah array menjadi JSON string

    post("/pengajars", {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  // Menyusun semua pilihan program dari data programs yang diterima
  const programOptions = programs.map((program) => ({
    value: program.id_program,
    label: program.nama_program,
  }));

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Tambah Pengajar
        </h2>
      }
    >
      <Head title="Tambah Pengajar" />

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
                <Form.Group controlId="nama_pengajar">
                  <Form.Label>Nama Pengajar</Form.Label>
                  <Form.Control
                    type="text"
                    value={data.nama_pengajar}
                    onChange={(e) => setData("nama_pengajar", e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="foto_pengajar">
                  <Form.Label>Foto Pengajar</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) =>
                      setData("foto_pengajar", e.target.files[0])
                    }
                  />
                </Form.Group>

                <Form.Group controlId="pengalaman">
                  <Form.Label>Pengalaman</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={data.pengalaman}
                    onChange={(e) => setData("pengalaman", e.target.value)}
                    rows={10}
                    maxLength={2000}
                  />
                </Form.Group>

                <Form.Group controlId="status">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={data.status}
                    onChange={(e) => setData("status", e.target.value)}
                  >
                    <option value="">Pilih Status</option>
                    <option value="Founder">Founder</option>
                    <option value="Admin">Admin</option>
                    <option value="Direktur">Direktur</option>
                    <option value="Marketing Direktur">
                      Marketing Direktur
                    </option>
                    <option value="Pengajar">Pengajar</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="id_programs">
                  <Form.Label>Nama Program</Form.Label>
                  <Select
                    isMulti
                    options={programOptions}
                    value={programOptions.filter((option) =>
                      data.id_programs.includes(option.value)
                    )}
                    onChange={handleProgramChange}
                  />
                </Form.Group>

                <Button type="submit" className="mt-4">
                  Tambah
                </Button>
                <Link href="/pengajars" className="btn btn-secondary mt-4 ml-2">
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

export default CreatePengajar;
