import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head, Link } from "@inertiajs/react";
import { Form, Button, Alert } from "react-bootstrap";

const EditBerita = ({ auth, berita }) => {
  const { data, setData, put, errors, reset } = useForm({
    headline_berita: berita.headline_berita || "",
    isi_berita: berita.isi_berita || "",
    tanggal_publikasi: berita.tanggal_publikasi || "",
    corresponden: berita.corresponden || "",
    media: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("headline_berita", data.headline_berita);
    formData.append("isi_berita", data.isi_berita);
    formData.append("tanggal_publikasi", data.tanggal_publikasi);
    formData.append("corresponden", data.corresponden);
    if (data.media) {
      formData.append("media", data.media);
    }

    put(route("beritas.update", berita.id), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Edit Berita
        </h2>
      }
    >
      <Head title="Edit Berita" />

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
                <Form.Group controlId="headline_berita">
                  <Form.Label>Headline Berita</Form.Label>
                  <Form.Control
                    type="text"
                    value={data.headline_berita}
                    onChange={(e) => setData("headline_berita", e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="isi_berita">
                  <Form.Label>Isi Berita</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={data.isi_berita}
                    onChange={(e) => setData("isi_berita", e.target.value)}
                    rows={10}
                    maxLength={2000}
                  />
                </Form.Group>

                <Form.Group controlId="tanggal_publikasi">
                  <Form.Label>Tanggal Publikasi</Form.Label>
                  <Form.Control
                    type="date"
                    value={data.tanggal_publikasi}
                    onChange={(e) =>
                      setData("tanggal_publikasi", e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group controlId="corresponden">
                  <Form.Label>Corresponden</Form.Label>
                  <Form.Control
                    type="text"
                    value={data.corresponden}
                    onChange={(e) => setData("corresponden", e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="media">
                  <Form.Label>Media</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setData("media", e.target.files[0])}
                  />
                </Form.Group>

                <Button type="submit" className="mt-4">
                  Update
                </Button>
                <Link href="/berita" className="btn btn-secondary mt-4 ml-2">
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

export default EditBerita;
