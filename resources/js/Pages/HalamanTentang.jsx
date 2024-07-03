import Advantages from "@/Components/Advantages";
import Footer from "@/Components/Footer";
import Timlist from "@/Components/HalamanTentang/Timlist";
import Navbar from "@/Components/Navbar";
import { Link, Head } from "@inertiajs/react";

export default function HalamanTentang(props) {
  console.log(props);
  return (
    <>
      <Head title="Tentang" />
      <div className="w-full h-max flex flex-col items-center">
        <Navbar />

        <main className="w-full h-max flex flex-col items-center">
          <div className="absolute top-[50px] lg:top-[104px] left-[0px] w-full h-[7257px] overflow-hidden flex flex-col items-center justify-start text-[28px] lg:text-[55px] text-white">
            <div className="w-full h-[7257px] flex flex-col items-start justify-start">
              <div className="self-stretch relative h-[6878px]">
                <div className="absolute top-[0px] w-full h-[441px] flex flex-col items-center justify-start py-[150px] box-border bg-[url('/public/bg/bg-tentang.png')] bg-cover bg-no-repeat bg-[top] font-inter">
                  <div className="w-full h-[141px] flex flex-row items-start justify-center">
                    <div className="self-stretch w-full flex flex-col items-start justify-center gap-5">
                      <div className="w-full h-[71px] flex flex-col items-center justify-start pt-[23px] px-[23px] pb-[43px] box-border ">
                        <div className="w-full flex flex-col items-center justify-start">
                          <div className="w-full relative tracking-[0.3px] leading-[1px] font-extrabold flex items-center justify-center h-8 shrink-0">
                            Tentang Kami
                          </div>
                        </div>
                      </div>
                      <div className="w-full flex flex-col items-center justify-start py-0 px-[23px] box-border text-[28px] lg:text-17xl">
                        <div className="w-full flex flex-col items-center relative h-max  shrink-0">
                          <span className="w-full h-full flex flex-row items-center justify-center text-center">
                            <span className="font-extrabold whitespace-pre-wrap"></span>
                            <span className="font-extrabold font-inter">
                              pengalaman belajar yang menarik dan bermakna
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full top-[1307px] right-[0px] left-[0px] bg-white h-[874px] flex flex-col items-center justify-start py-0  xl:px-[92px] 2xl:px-[300px] box-border text-center text-7xl font-montserrat">
                  <div className="w-full h-max flex flex-row items-center justify-center py-[25px] px-0 lg:px-2.5 box-border">
                    <div className="w-full flex flex-col items-center justify-center py-0  box-border">
                      <div className="w-full h-max flex flex-row items-center flex-wrap justify-center gap-[20px] lg:gap-[20px] xl:gap-[94px] ">
                        <div className="flex-1 flex flex-row items-start justify-center py-0 px-0 lg:px-5 box-border min-h-[1px]">
                          <div className="flex-1 shadow-[0px_0px_23px_3px_rgba(0,_0,_0,_0.21)] rounded-3xs bg-darkslateblue-100 h-max md:h-[746px] overflow-hidden flex flex-row flex-wrap items-start justify-center pt-[30px] px-[30px] pb-[267.5px] box-border">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[30px]">
                              <div className="self-stretch h-[257px] flex flex-col items-center justify-start gap-[25.8px]">
                                <div className="self-stretch flex flex-row items-start justify-start">
                                  <img
                                    className="w-[88px] relative h-[88px] overflow-hidden shrink-0 object-cover max-w-[87.9800033569336px]"
                                    alt=""
                                    src="/Vector/visipng@2x.png"
                                  />
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start">
                                  <div className="self-stretch h-[39px] flex flex-col items-center justify-start py-0  box-border">
                                    <b className="self-stretch relative leading-[39px] capitalize">
                                      VISI
                                    </b>
                                  </div>
                                  <div className="self-stretch h-max flex flex-col items-center justify-start py-0 px-[9.4px] box-border text-[16px] xl:text-xl">
                                    <div className="self-stretch relative leading-[21.6px] font-medium flex items-center justify-center h-max shrink-0">
                                      Menjadi pusat pembelajaran bahasa Inggris
                                      terkemuka yang menginspirasi dan membantu
                                      siswa mencapai kemampuan berbahasa Inggris
                                      yang sangat baik serta membuka peluang
                                      global bagi masa depan yang cerah.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 h-full flex flex-row items-center justify-center py-0 px-0 lg:px-2 box-border font-roboto">
                          <div className="flex-1 shadow-[0px_0px_8px_2px_rgba(0,_0,_0,_0.21)] rounded-3xs bg-crimson-300 w-full h-max lg:h-[746px] flex flex-row flex-wrap items-start justify-center pb-[35px] p-[30px] box-border ">
                            <div className="flex-1 h-max flex flex-col items-start justify-start pt-0 px-0 box-border">
                              <div className="self-stretch h-max flex flex-col items-center justify-start gap-[25.8px]">
                                <div className="self-stretch flex flex-row items-start justify-start">
                                  <img
                                    className="w-[88px] relative h-[88px] overflow-hidden shrink-0 object-cover max-w-[87.9800033569336px]"
                                    alt=""
                                    src="/Vector/motopng@2x.png"
                                  />
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start">
                                  <div className="self-stretch flex flex-col items-center justify-start py-0 ">
                                    <div className="self-stretch relative leading-[39px] capitalize font-medium">
                                      MISI
                                    </div>
                                  </div>
                                  <div className="self-stretch h-max flex flex-col items-center justify-start py-0 pr-[0.1px] pl-0 box-border text-[15px] md:text-[16px] xl:text-xl font-montserrat ">
                                    <div className="self-stretch leading-[22px] font-medium flex items-center h-max shrink-0">
                                      <span>
                                        <p className="m-0">
                                          1. Memberikan pendidikan berkualitas
                                          tinggi dalam pembelajaran bahasa
                                          Inggris yang berpusat pada siswa.
                                        </p>
                                        <p className="m-0">
                                          2. Mengintegrasikan teknologi dan
                                          inovasi dalam proses pembelajaran
                                          untuk meningkatkan efektivitas dan
                                          daya tarik.
                                        </p>
                                        <p className="m-0">
                                          3. Mendorong keberagaman dan inklusi
                                          dalam lingkungan belajar yang
                                          mendukung dan memotivasi setiap siswa.
                                        </p>
                                        <p className="m-0">
                                          4. Melibatkan siswa dalam pengalaman
                                          pembelajaran yang menarik, kreatif,
                                          dan berorientasi pada praktik.
                                        </p>
                                        <p className="m-0">
                                          5. Mengembangkan kemitraan yang kuat
                                          dengan orang tua, sekolah, dan
                                          komunitas untuk mendukung perkembangan
                                          akademik dan pribadi siswa.
                                        </p>
                                        <p className="m-0">
                                          6. Menanamkan nilai-nilai karakter,
                                          kepemimpinan, dan kewirausahaan dalam
                                          setiap aspek pembelajaran.
                                        </p>
                                        <p className="m-0">
                                          7. Berkomitmen untuk pertumbuhan dan
                                          pengembangan berkelanjutan baik bagi
                                          siswa maupun staf pengajar.
                                        </p>
                                        <p className="m-0">
                                          8. Menjadi agen perubahan positif
                                          dalam peningkatan kemampuan berbahasa
                                          Inggris di masyarakat lokal dan
                                          global.
                                        </p>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute  w-full top-[439px] right-[0px] left-[0px] h-max flex flex-col items-center justify-start py-0 xl:px-[92px] 2xl:px-[300px] box-border text-[28px] lg:text-17xl text-darkslateblue-100">
                  <div className="w-full h-max flex flex-row items-center justify-center py-10  box-border px-[3px]">
                    <div className="w-full h-[773px] flex flex-col items-center justify-center py-0  box-border">
                      <div className="w-full h-[662px] flex flex-row items-center justify-center pt-0.5 pb-0 pr-0 box-border ">
                        <div className="w-full h-full flex flex-row items-center justify-between gap-[50px] min-h-[1px]">
                          <div className="hidden lg:flex self-stretch w-[441px] h-full rounded-3xs overflow-hidden shrink-0 flex flex-row flex-wrap items-start justify-center box-border bg-[url('/public/lkp/backgroundshadow@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="flex-1 h-[245.5px]" />
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start gap-0 lg:gap-[10px]">
                            <div className="self-stretch h-14 flex flex-col items-start justify-center pt-0 px-0 pb-[0.6px] box-border">
                              <b className="relative tracking-[0.9px] leading-[43.2px] ">
                                Mengenal Kami Lebih Dekat
                              </b>
                            </div>
                            <div className="w-full h-max relative text-[15px] xl:text-xl leading-[25px] font-medium text-slategray flex items-center">
                              <p>
                                LKP Sangihe Learning Center adalah lembaga
                                kursus yang didirikan pada tahun 2020 dan telah
                                mendapatkan pengakuan resmi dari Kementerian
                                Pendidikan dan Kebudayaan serta Dinas Penanaman
                                Modal dan Pelayanan Terpadu Satu Pintu Daerah
                                Kabupaten Kepulauan Sangihe. Dengan nomor
                                registrasi yang tercantum, lembaga ini memiliki
                                legalitas yang jelas dalam menyelenggarakan
                                pendidikan non-formal.Suspendisse imperdiet.
                                Metode pembelajaran yang digunakan di LKP
                                Sangihe Learning Center dirancang untuk menjadi
                                menyenangkan dan interaktif, sambil juga
                                mengasah kemampuan soft skills dan gaya hidup
                                ramah lingkungan. Pengajar yang bekerja di
                                lembaga ini telah bersertifikat oleh WORLD TESOL
                                Academy dengan skor TOEFL minimum 550.Salah satu
                                keunggulan LKP Sangihe Learning Center adalah
                                adanya kelas langsung dengan pengajar asing
                                berbahasa Inggris, yang membantu siswa dalam
                                memperbaiki kemampuan berbicara dan memahami
                                aksen bahasa Inggris yang autentik. Selain itu,
                                lembaga ini juga memiliki guru tamu dari
                                Inggris, Britania Raya, dan Filipina yang
                                memberikan wawasan tambahan kepada siswa.Ujian
                                bahasa Inggris yang diselenggarakan di LKP
                                Sangihe Learning Center mematuhi standar global
                                dan diakui oleh lembaga-lembaga asesmen ternama
                                seperti Cambridge Assessment English UK dan
                                University of Michigan USA. Dengan demikian,
                                siswa yang menyelesaikan program di LKP Sangihe
                                Learning Center akan mendapatkan sertifikasi
                                yang diakui secara internasional, meningkatkan
                                peluang mereka dalam karir dan pendidikan di
                                masa depan.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full top-[2308px] right-[-1px] left-[1px] bg-white h-[2275px] flex flex-row flex-wrap items-start justify-center pt-20 px-[220px] pb-8 box-border gap-[41px_80px] text-right text-13xl text-slategray font-lexend">
                  <div className="w-[1339px] flex flex-row items-center justify-center gap-[80px] z-[0]">
                    <div className="w-[550px] flex flex-col items-end justify-center gap-[10px]">
                      <b className="w-[551px] relative leading-[42px] inline-block h-[94px] shrink-0">
                        Standar Internasional dari Oxford University Press
                      </b>
                      <div className="w-[551px] relative text-xl leading-[25px] font-inter text-gray-200 inline-block h-[186px] shrink-0">
                        Kurikulum yang digunakan di LKP Sangihe Learning Center
                        didasarkan pada standar internasional dari Oxford
                        University Press, sebuah lembaga ternama dalam bidang
                        pendidikan dan penerbitan. Kurikulum ini dirancang untuk
                        memberikan pengalaman belajar yang efektif dan menarik
                        bagi setiap siswa, dengan fokus pada pengembangan
                        kemampuan bahasa Inggris mereka secara menyeluruh.
                      </div>
                    </div>
                    <img
                      className="w-[664px] relative rounded-3xs h-[380px] object-cover"
                      alt=""
                      src="/lkp/kidsclassroomtakingenglishclass-4@2x.png"
                    />
                  </div>
                  <div className="w-[1369px] flex flex-row items-center justify-center gap-[80px] z-[1] text-left">
                    <img
                      className="w-[664px] relative rounded-3xs h-[442.7px] object-cover"
                      alt=""
                      src="/lkp/kidsclassroomtakingenglishclass-6@2x.png"
                    />
                    <div className="w-[610px] flex flex-col items-end justify-center gap-[10px]">
                      <b className="w-[610px] relative leading-[42px] inline-block h-[87px] shrink-0">
                        Pendekatan Pembelajaran Berpusat pada Siswa
                      </b>
                      <div className="w-[601px] relative text-xl leading-[25px] font-inter text-gray-200 inline-block h-[188px] shrink-0">
                        Pendekatan pengajaran yang diterapkan dalam kurikulum
                        kami didasarkan pada prinsip-prinsip pembelajaran aktif
                        dan berpusat pada siswa. Kami mengutamakan interaksi
                        langsung antara guru dan siswa, memungkinkan siswa untuk
                        terlibat secara aktif dalam pembelajaran mereka. Kami
                        juga mendorong kolaborasi antar siswa, mempromosikan
                        diskusi dan pertukaran ide dalam lingkungan yang
                        mendukung.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[80px] z-[2]">
                    <div className="w-[548px] flex flex-col items-end justify-center gap-[10px]">
                      <b className="w-[548px] relative leading-[42px] inline-block h-[90px] shrink-0">
                        Materi Pembelajaran yang Relevan dan Menarik
                      </b>
                      <div className="w-[548px] relative text-xl leading-[25px] font-inter text-gray-200 inline-block h-[206px] shrink-0">
                        Materi pembelajaran yang disediakan dalam kurikulum kami
                        mencakup beragam topik yang relevan dan menarik, mulai
                        dari kosakata dasar hingga konsep-konsep bahasa yang
                        lebih kompleks. Kami menyajikan materi pembelajaran
                        dengan cara yang menarik dan mudah dipahami, menggunakan
                        berbagai media dan sumber daya untuk mendukung proses
                        pembelajaran, termasuk buku teks, materi audiovisual,
                        dan aktivitas interaktif.
                      </div>
                    </div>
                    <img
                      className="w-[664px] relative rounded-3xs h-[354.3px] object-cover"
                      alt=""
                      src="/lkp/kidsclassroomtakingenglishclass-5@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[80px] z-[3] text-left">
                    <img
                      className="w-[664px] relative rounded-3xs h-[376px] object-cover"
                      alt=""
                      src="/lkp/kidsclassroomtakingenglishclass-3@2x.png"
                    />
                    <div className="w-[571px] flex flex-col items-end justify-center gap-[10px]">
                      <b className="w-[571px] relative leading-[42px] inline-block h-[50px] shrink-0">
                        Dukungan Pengajar Berkualitas
                      </b>
                      <div className="w-[571px] relative text-xl leading-[25px] font-inter text-gray-200 inline-block h-[206px] shrink-0">
                        Dengan dukungan dari pengajar berpengalaman dan
                        bersertifikasi, siswa di LKP Sangihe Learning Center
                        mendapatkan bimbingan yang kompeten dan terarah dalam
                        mengembangkan kemampuan bahasa Inggris mereka. Para
                        pengajar kami tidak hanya memiliki kualifikasi akademik
                        yang tinggi, tetapi juga memiliki keterampilan dalam
                        memotivasi dan menginspirasi siswa mereka untuk mencapai
                        potensi maksimal mereka.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[80px] z-[4]">
                    <div className="w-[579px] flex flex-col items-end justify-center gap-[10px]">
                      <b className="w-[579px] relative leading-[42px] inline-block h-[84px] shrink-0">
                        Komitmen terhadap Pengalaman Belajar yang Bermakna
                      </b>
                      <div className="w-[543px] relative text-xl leading-[25px] font-inter text-gray-200 inline-block h-[139px] shrink-0">
                        Komitmen kami adalah untuk memberikan pengalaman belajar
                        yang bermakna dan relevan bagi setiap siswa, membantu
                        mereka mengembangkan kemampuan bahasa Inggris mereka
                        dengan percaya diri dan sukses di dunia yang semakin
                        global.
                      </div>
                    </div>
                    <img
                      className="w-[664px] relative rounded-3xs h-[397px] object-cover"
                      alt=""
                      src="/lkp/kidsclassroomtakingenglishclass-7@2x.png"
                    />
                  </div>
                  <div className="w-full !m-[0] absolute top-[-97px] right-[0px] left-[0px] bg-white h-[97px] flex flex-col items-center justify-center py-0 px-[512px] box-border z-[5] text-center text-17xl text-darkslateblue-100">
                    <b className="w-48 relative leading-[42px] inline-block h-[42px] shrink-0">
                      Kurikulum
                    </b>
                  </div>
                </div>
                <div className="absolute top-[4543px] left-[0px] bg-white w-full h-[665px] flex flex-col items-center justify-start pt-20 px-[300px] pb-0 box-border text-lg text-firebrick">
                  <div className="w-full absolute top-0 flex flex-col items-center justify-center py-3  xl:px-[92px] 2xl:px-[300px]">
                    <div className=" h-max w-full flex flex-row items-center justify-between pb-0 box-border text-left text-lg text-firebrick font-inter">
                      <div className="flex flex-col">
                        <div className="flex flex-col gap-2 ">
                          <div>
                            <b className="relative tracking-[0.9px] leading-[27px]">
                              What’s New
                            </b>
                          </div>
                          <div className="text-[28px] md:text-17xl text-darkslateblue-100">
                            <b className="relative tracking-[0.9px] leading-[43.2px]">
                              Kenapa Memilih Kami ?
                            </b>
                          </div>
                          <div className="text-[15px] text-base leading-[24px] font-medium text-black">
                            <p className="m-0">
                              Ada beberapa alasan mengapa memilih Lembaga Kursus
                              dan Pelatihan
                            </p>
                            <p className="m-0">
                              (LKP) Sangihe Learning Center sebagai pilihan yang
                              tepat:
                            </p>
                          </div>
                        </div>
                        <div>
                          <Advantages />
                        </div>
                      </div>
                      <div className="flex flex-row items-start">
                        <div>
                          <img
                            className="relative top-[50px]  "
                            src="/ilustrasi_Photo/asiawomen.png"
                            alt=""
                          />
                        </div>
                        <div className="relative left-[-40px] top-[17px]">
                          <img
                            className="w-[100px] relative h-[125px]"
                            src="/Vector/-emoji-white-question-mark-ornament.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full absoluteh-[1700px] flex flex-col items-center justify-start py-20 px-[300px] box-border bg-[url('/public/bg/section1@3x.png')] bg-cover bg-no-repeat bg-[top] mt-[-2023px] text-center text-xl text-gray-300">
              <div className="w-[1320px] relative h-[1615px] max-w-[1320px]">
                <div className="absolute w-[calc(100%_-_24px)] top-[0px] right-[12px] left-[12px] flex flex-row items-start justify-start">
                  <div className="flex-1 h-[88.2px] min-w-[150px]" />
                </div>
                <div className="absolute w-[calc(100%_-_24px)] top-[-56px] right-[24px] left-[0px] h-[1671px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-[214px] flex flex-row items-center justify-center py-0 px-[298px] box-border text-17xl text-darkslateblue-100">
                    <div className="flex flex-col items-start justify-start gap-[25px]">
                      <div className="w-[900px] flex flex-col items-center justify-start pt-0 px-[171.2px] pb-[0.6px] box-border">
                        <b className="relative tracking-[0.9px] leading-[43.2px]">
                          Pimpinan, Staf dan Guru di LKP Sangihe Learning Center
                        </b>
                      </div>
                      <div className="self-stretch h-6" />
                    </div>
                  </div>
                  <div className="self-stretch h-[473px] flex flex-col items-start justify-start">
                    <div className="self-stretch relative h-[473px] shrink-0 z-[0]">
                      <div className="absolute top-[0px] left-[-1650px] w-[6600px] flex flex-row items-center justify-center flex-wrap py-0 pr-[3654px] pl-[1650px] box-border gap-[24px]">
                        <Timlist pengajar={props.pengajars} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="w-full absolute top-[7150px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
