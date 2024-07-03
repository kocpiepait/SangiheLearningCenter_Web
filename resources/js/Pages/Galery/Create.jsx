import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { useForm, Head, Link } from "@inertiajs/react";
import { Form, Button, Alert } from "react-bootstrap";

const CreateGalery = ({ auth, errors }) => {
  const { data, setData, post, reset } = useForm({
    foto: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/galery", {
      onSuccess: () => reset(),
    });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Tambah Galeri
        </h2>
      }
    >
      <Head title="Tambah Galeri" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-black dark:text-gray-100">
              {errors && (
                <Alert variant="danger">
                  {Object.values(errors).map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="foto">
                  <Form.Label>Upload Foto</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setData("foto", e.target.files[0])}
                  />
                </Form.Group>
                <Button type="submit" className="mt-4">
                  Simpan
                </Button>
                <Link
                  href="/galery"
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

export default CreateGalery;
