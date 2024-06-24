import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head, Link, usePage } from "@inertiajs/react";
import { Form, Button, Alert } from "react-bootstrap";

const EditPeserta = ({ auth, peserta, programs, errors }) => {
  const { data, setData, put } = useForm({
    nama_peserta: peserta.nama_peserta ?? "",
    jenis_kelamin: peserta.jenis_kelamin ?? "",
    alamat: peserta.alamat ?? "",
    TTL: peserta.TTL ?? "",
    id_program: peserta.id_program ?? "",
    usia_peserta: peserta.usia_peserta ?? "",
  });

  const { url } = usePage();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nama_peserta", data.nama_peserta);
    formData.append("jenis_kelamin", data.jenis_kelamin);
    formData.append("alamat", data.alamat);
    formData.append("TTL", data.TTL);
    formData.append("usia_peserta", data.usia_peserta);
    formData.append("id_program", data.id_program);

    put(`/peserta/${peserta.id_peserta}`, formData, {
      onSuccess: () => {
        setData({
          nama_peserta: "",
          jenis_kelamin: "",
          alamat: "",
          TTL: "",
          id_program: "",
          usia_peserta: "",
        });
      },
    });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Edit Peserta
        </h2>
      }
    >
      <Head title="Edit Peserta" />

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
                <Form.Group controlId="nama_peserta">
                  <Form.Label>Nama Peserta</Form.Label>
                  <Form.Control
                    type="text"
                    value={data.nama_peserta}
                    onChange={(e) => setData("nama_peserta", e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="jenis_kelamin">
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Control
                    as="select"
                    value={data.jenis_kelamin}
                    onChange={(e) => setData("jenis_kelamin", e.target.value)}
                  >
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="alamat">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={data.alamat}
                    onChange={(e) => setData("alamat", e.target.value)}
                    rows={3}
                  />
                </Form.Group>

                <Form.Group controlId="TTL">
                  <Form.Label>Tanggal Lahir</Form.Label>
                  <Form.Control
                    type="date"
                    value={data.TTL}
                    onChange={(e) => setData("TTL", e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="usia_peserta">
                  <Form.Label>Usia Peserta</Form.Label>
                  <Form.Control
                    type="number"
                    value={data.usia_peserta}
                    onChange={(e) => setData("usia_peserta", e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="id_program">
                  <Form.Label>Nama Program</Form.Label>
                  <Form.Control
                    as="select"
                    value={data.id_program}
                    onChange={(e) => setData("id_program", e.target.value)}
                  >
                    <option value="">Pilih Program</option>
                    {programs.map((program) => (
                      <option
                        key={program.id_program}
                        value={program.id_program}
                      >
                        {program.nama_program}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Button type="submit" className="mt-4">
                  Simpan
                </Button>
                <Link
                  href="/peserta"
                  className="btn btn-secondary mb-3 mt-4 ml-2"
                >
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

export default EditPeserta;
