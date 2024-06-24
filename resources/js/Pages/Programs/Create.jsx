import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/inertia-react";
import { Form, Button } from "react-bootstrap";
import { InertiaLink as Link } from "@inertiajs/inertia-react";

const Edit = ({ program, pengajar }) => {
  const { data, setData, put, errors } = useForm({
    nama_program: program.nama_program,
    deskripsi: program.deskripsi,
    lesson: program.lesson,
    id_pengajar: program.id_pengajar,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(`/programs/${program.id_program}`, {
      data,
      preserveScroll: true,
    });
  };

  return (
    <AuthenticatedLayout>
      <div className="container mt-4">
        <h2>Edit Program</h2>
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
              rows={3}
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

          <Form.Group controlId="id_pengajar">
            <Form.Label>Nama Pengajar</Form.Label>
            <Form.Control
              as="select"
              value={data.id_pengajar}
              onChange={(e) => setData("id_pengajar", e.target.value)}
            >
              <option value="">Pilih pengajar...</option>
              {pengajar.map((pengajar) => (
                <option key={pengajar.id_pengajar} value={pengajar.id_pengajar}>
                  {pengajar.nama_pengajar}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Simpan
          </Button>
          <Link href="/programs" className="btn btn-secondary ml-2">
            Batal
          </Link>
        </Form>
      </div>
    </AuthenticatedLayout>
  );
};

export default Edit;
