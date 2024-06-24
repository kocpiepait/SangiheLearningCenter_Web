import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { useForm, Head, Link } from "@inertiajs/react";
import { Form, Button, Alert } from "react-bootstrap";

const CreatePeserta = ({ auth, programs, errors }) => {
  const { data, setData, post } = useForm({
    nama_peserta: "",
    jenis_kelamin: "",
    alamat: "",
    TTL: "", // data TTL diinisialisasi dengan string kosong
    id_program: "",
    usia: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post("/peserta", {
      onSuccess: () => {
        setData({
          nama_peserta: "",
          jenis_kelamin: "",
          alamat: "",
          TTL: "",
          id_program: "",
          usia: "",
        });
      },
    });
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleDateChange = (e) => {
    const rawDate = e.target.value; // tangkap tanggal dalam format yyyy-mm-dd
    const [year, month, day] = rawDate.split("-"); // pisahkan tanggal menjadi tahun, bulan, dan hari
    const formattedDate = `${day}/${month}/${year}`; // gabungkan kembali dengan format dd/mm/yyyy
    setData("TTL", formattedDate); // set data TTL dengan tanggal yang sudah diformat
    const age = calculateAge(rawDate); // hitung usia berdasarkan tanggal lahir
    setData("usia", age.toString()); // set data usia sebagai string usia yang dihitung
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Tambah Peserta
        </h2>
      }
    >
      <Head title="Tambah Peserta" />

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

export default CreatePeserta;
