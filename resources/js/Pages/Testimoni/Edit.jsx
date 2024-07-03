import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head, Link } from "@inertiajs/react";
import { Form, Button, Alert } from "react-bootstrap";

const EditTestimoni = ({ auth, testimoni, errors }) => {
  const { data, setData, put } = useForm({
    nama_testimoni: testimoni.nama_testimoni ?? "",
    gambar_testimoni: "",
    isi_testimoni: testimoni.isi_testimoni ?? "",
    status_testimoni: testimoni.status_testimoni ?? "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/testimoni/${testimoni.id}`, {
      onSuccess: () => {
        setData({
          nama_testimoni: "",
          gambar_testimoni: "",
          isi_testimoni: "",
          status_testimoni: "",
        });
      },
    });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Edit Testimoni
        </h2>
      }
    >
      <Head title="Edit Testimoni" />

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
                <Form.Group controlId="nama_testimoni">
                  <Form.Label>Nama Testimoni</Form.Label>
                  <Form.Control
                    type="text"
                    value={data.nama_testimoni}
                    onChange={(e) => setData("nama_testimoni", e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="gambar_testimoni">
                  <Form.Label>Gambar Testimoni</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) =>
                      setData("gambar_testimoni", e.target.files[0])
                    }
                  />
                </Form.Group>

                <Form.Group controlId="isi_testimoni">
                  <Form.Label>Isi Testimoni</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={data.isi_testimoni}
                    onChange={(e) => setData("isi_testimoni", e.target.value)}
                    rows={3}
                  />
                </Form.Group>

                <Form.Group controlId="status_testimoni">
                  <Form.Label>Status Testimoni</Form.Label>
                  <Form.Control
                    type="text"
                    value={data.status_testimoni}
                    onChange={(e) =>
                      setData("status_testimoni", e.target.value)
                    }
                  />
                </Form.Group>

                <Button type="submit" className="mt-4">
                  Simpan
                </Button>
                <Link
                  href="/testimoni"
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

export default EditTestimoni;
