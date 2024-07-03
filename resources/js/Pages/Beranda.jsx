import Advantages from "@/Components/Advantages";
import Berita from "@/Components/Berita";
import Footer from "@/Components/Footer";
import BerandaProgram from "@/Components/Hompage/BerandaProgram";
import BtnBeranda from "@/Components/Hompage/BtnBeranda";
import ButtonWa from "@/Components/Hompage/ButtonWa";
import SectionHero from "@/Components/Hompage/SectionHero";
import Mitra from "@/Components/Mitra";
import Navbar from "@/Components/Navbar";
import Pengajar from "@/Components/Pengajar";
import Testimoni from "@/Components/Testimoni";
import { Link, Head } from "@inertiajs/react";

export default function Beranda(props) {
  console.log(props);
  return (
    <>
      <Head title="Beranda" />
      <div className="w-full flex flex-col items-center h-max">
        <Navbar />

        <main className="bg-black absolute w-full flex flex-col items-center h-max top-[15%] xl:top-[10%] font-inter">
          <div className="w-full py-8 h-max flex flex-col items-center justify-center bg-darkslateblue-100 px-[93px] absolute box-border">
            <div className="h-max flex flex-row items-center justify-between flex-nowrap gap-x-5 box-border ">
              <div className="w-3/5 h-[700px] flex flex-col items-center font-inter text-xl text-white  pt-[30px] font-inter">
                <div className="flex flex-col items-center gap-[60px] md:items-start justify-start">
                  <div className="relative leading-[24px] font-medium mb-[15px]">
                    <p className="m-0">"Lead,Speak,Inspire</p>
                    <p className="m-0">Crafting English Champions"</p>
                  </div>
                  <div className="flex flex-col items-center md:items-start justify-start  px-0 pb-0 box-border text-29xl">
                    <b className="relative leading-[57.6px]">
                      <p className="m-0">{`Selamat datang di `}</p>
                      <p className="m-0">LKP Sangihe Learning Center</p>
                    </b>
                  </div>
                  <div className="w-full">
                    <ButtonWa />
                  </div>
                  <div className="w-full flex flex-col ">
                    <div className="self-stretch flex flex-col items-center md:items-start relative leading-[30px] font-medium">{`Kami sudah meluluskan `}</div>
                    <div className="self-stretch flex flex-row items-center justify-start text-[32px] md:text-29xl text-crimson-300">
                      <div className="w-full box-border flex flex-col items-center md:items-start justify-start py-0 pr-0 pl-0">
                        <div className="self-stretch flex flex-col items-center md:items-start justify-start pt-[10px]">
                          <b className="w-full relative leading-[57.6px] flex items-center">
                            <span className="w-full">
                              <span>{`400+`}</span>
                              <span className="text-white">Peserta</span>
                            </span>
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:relative flex flex-col items-center justify-center box-border h-full w-3/5">
                <div className="lg:relative w-full h-full flex flex-row items-center justify-center py-[13.1px] box-border">
                  <img
                    className="top-[50px] left-[20px] relative h-[844px] w-[680px] object-cover box-border"
                    alt="photo"
                    src="/ilustrasi_Photo/asianwomanglasseshuggingtwoyoungschoolchildren-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start absolute top-[970px] top-[946px] md:top-[725px] lg:top-[705px] xl:top-[830px] 2xl:top-[790px] sm:w-full h-[440px] box-border m-0 p-0">
            <img
              className="w-full xl:h-max object-cover"
              alt=""
              src="/Vector/ellipse-1.svg"
            />
            <div className="w-full h-max py-2 absolute top-[-10%] ">
              <SectionHero />
            </div>
          </div>

          <div className="w-full absolute top-[1731px] md:top-[1098px] lg:top-[1021px] flex flex-col items-center justify-start md:flex-row md:justify-between xl:gap-5 py-0  xl:px-[92px] 2xl:px-[300px] box-border text-left text-xl text-slategray font-inter">
            <div className="w-full md:w-1/2 xl:h-[630px] flex flex-col justify-start gap-12 r elative h-full py-5">
              <b className="text-[28px] lg:text-21xl tracking-[0.9px] leading-[43.2px] text-darkslateblue-100">
                Tentang Kami
              </b>
              <div className="w-full flex flex-col gap-10 items-start justify-start">
                <div className="text-[15px] md:text-[16px] font-medium flex items-center ">
                  LKP Sangihe Learning Center adalah lembaga kursus yang
                  didirikan pada tahun 2020 dan telah mendapatkan pengakuan
                  resmi dari Kementerian Pendidikan dan Kebudayaan serta Dinas
                  Penanaman Modal dan Pelayanan Terpadu Satu Pintu Daerah
                  Kabupaten Kepulauan Sangihe. Dengan nomor registrasi yang
                  tercantum, lembaga ini memiliki legalitas yang jelas dalam
                  menyelenggarakan pendidikan non-formal.
                </div>
                <div className="text-[15px] md:text-[16px] font-medium flex items-center">
                  Metode pembelajaran yang digunakan di LKP Sangihe Learning
                  Center dirancang untuk menjadi menyenangkan dan interaktif,
                  sambil juga mengasah kemampuan soft skills dan gaya hidup
                  ramah lingkungan. Pengajar yang bekerja di lembaga ini telah
                  bersertifikat oleh WORLD TESOL Academy dengan skor TOEFL
                  minimum 550.
                </div>
              </div>

              <div>
                <BtnBeranda />
              </div>
            </div>

            <div className="hidden md:flex md:w-1/2 xl:w-2/5 xl:h-max  lg:w-[575px] lg:h-[673px] flex flex-col items-center justify-center py-0 box-border text-center text-lgi text-white">
              <div className="w-full flex flex-col items-center h-max lg:h-[674.2px]">
                <img
                  className="w-[300px] lg:w-[300px] lg:h-[465.3px] object-cover"
                  alt=""
                  src="/lkp/missCeline.png"
                />
                <div className="rounded-16xl bg-firebrick w-full lg:w-[435px] overflow-hidden flex flex-col items-center justify-center py-[13px] px-[22px] box-border gap-[13px]">
                  <div className="w-full lg:w-[405px] relative leading-[24px] font-medium flex items-center justify-center h-8 shrink-0">
                    CELLINE ARMY SANDIL CNGT, C.ME, CPPS
                  </div>
                  <div className="w-[389px] relative text-xl leading-[24px] font-medium flex items-center justify-center h-8 shrink-0">
                    FOUNDER
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-full top-[1739px] right-[0px] left-[0px] h-[1574px] flex flex-col items-center justify-center pt-20 px-[92px] 2xl:px-[300px] pb-14 box-border bg-[url('/public/bg/section3@3x.png')] bg-cover bg-no-repeat text-left text-base text-firebrick font-inter">
            <div className="h-[1372px] w-full flex flex-col items-center justify-start py-0 box-border relative gap-4 ">
              <div className="w-full flex flex-row justify-between">
                <div className="flex flex-col gap-4 w-full">
                  <div className=" flex flex-row items-center justify-between ">
                    <div className="flex flex-col gap-4">
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0">
                        <b className="relative tracking-[0.9px] leading-[27px]">
                          What’s New
                        </b>
                      </div>
                      <div className=" w-full self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.6px] text-17xl text-darkslateblue-100">
                        <b className="relative tracking-[0.9px] leading-[43.2px]">
                          Program Kami
                        </b>
                      </div>
                    </div>
                    <div>
                      <BtnBeranda />
                    </div>
                  </div>
                  <div className="w-[954px] relative leading-[24px] font-medium flex items-center shrink-0 text-black">
                    <span className="w-full">
                      <p className="m-0">{`Program-program kami dirancang untuk memberikan pengalaman belajar yang menarik dan bermakna bagi setiap siswa,`}</p>
                      <p className="m-0">
                        mempersiapkan mereka untuk menguasai bahasa Inggris
                        dengan percaya diri dan sukses.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row items-center  flex-wrap gap-5">
                <BerandaProgram program={props.programs} />
              </div>
            </div>
          </div>

          <div className="w-full absolute top-[3313px] flex flex-col items-center justify-center py-3  xl:px-[92px] 2xl:px-[300px]">
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
                      Ada beberapa alasan mengapa memilih Lembaga Kursus dan
                      Pelatihan
                    </p>
                    <p className="m-0">
                      (LKP) Sangihe Learning Center sebagai pilihan yang tepat:
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
                <div className="relative left-[-40px] top-[20px]">
                  <img
                    className="w-[100px] relative h-[125px]"
                    src="/Vector/-emoji-white-question-mark-ornament.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[4266px] md:top-[4006px] w-full flex flex-col items-center justify-center py-20 px-3 2xl:px-[300px] box-border bg-[url('/public/bg/section4@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-17xl text-darkslateblue-100 font-inter">
            <div className="w-full flex flex-col items-center h-max py-5 md:h-[802px] gap-8 box-border">
              <div className="w-ful flex flex-col items-center justify-start pt-0 pb-[0.6px] box-border">
                <b className="relative tracking-[0.9px] leading-[43.2px] text-[28px] md:text-[32px]">
                  Tim Kami
                </b>
              </div>
              <div className="self-stretch flex flex-col items-center justify-start py-0  px-0 md:px-[7.3px] text-base text-slategray">
                <div className="relative leading-[24px] text-[15px] md:text-[16px] font-medium">
                  <p className="m-0">{`Kami hadir sebagai mitra dalam perjalanan pendidikan Anda menuju kesuksesan.`}</p>
                  <p className="m-0">
                    Sebagai lembaga kursus yang terpercaya dan terdaftar secara
                    resmi
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center flex-wrap w-full gap-5 justify-center h-max box-border">
                <Pengajar pengajar={props.pengajars} />
              </div>
              <div className="w-full flex flex-col items-center">
                <BtnBeranda />
              </div>
            </div>
          </div>

          <div className="w-full absolute top-[6820px] md:top-[4995px] h-[770px] flex flex-col items-center justify-start pt-0 px-2 2xl:px-[300px] pb-14 box-border">
            <div className="w-full md:w-[1320px] h-[765px] flex flex-col items-center justify-center py-0 box-border gap-[45px]">
              <div className="self-stretch h-[78px] flex flex-row items-center justify-center py-0 box-border">
                <div className="h-20 flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border text-center text-lg text-firebrick font-inter">
                  <div className="self-stretch flex flex-col items-center justify-start pt-0 pb-[18px]">
                    <b className="relative tracking-[0.9px] leading-[27px]">
                      Trusted By
                    </b>
                  </div>
                  <div className="w-full md:w-[788.8px] flex flex-col items-center justify-start pt-0 px-2 xl:px-[92px] pb-[0.6px] box-border mt-[-0.6px] text-[28px] md:text-17xl text-darkslateblue-100 mb-5">
                    <b className="relative tracking-[0.9px] leading-[43.2px]">
                      Mitra Kerjasama
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-row items-center justify-center px-2 xl:px-[92px] box-border h-max">
                <Mitra />
              </div>
              <div className="w-full box-border flex flex-col items-center justify-center py-0 px-3 ">
                <div className="flex flex-col items-center justify-center box-border gap-[21px]">
                  <b className="w-[274px] relative text-[28px] leading-[42px] inline-block text-darkslateblue-100 text-center h-[57px] shrink-0">
                    Legalitas Lembaga
                  </b>
                  <b className="w-full md:w-[423px] relative text-[20px] leading-[40px] inline-block h-[54.3px] text-center shrink-0">
                    AKTA NOTARIS :
                  </b>
                  <b className="w-full md:w-[422px] relative text-smi [text-decoration:underline] leading-[22px] inline-block h-[29.4px] shrink-0">
                    Amelia Novita Dandel, SH,M.Kn., Nomor -7. – Tanggal 14
                    Februari 2
                  </b>
                  <b className="w-full text-center md:w-[423px] text-[20px] relative leading-[40px] inline-block h-[44.8px] shrink-0">
                    IZIN OPERASIONAL NOMOR :
                  </b>
                  <div className="w-[286px] relative text-mini leading-[24px] text-black text-left inline-block h-[33.5px] shrink-0">
                    503/137/DPMPTSPD/001-TA/III/2022𝟮
                  </div>
                  <b className="w-full md:w-[497px] text-[20px] relative leading-[40px] inline-block h-[54.3px] text-center shrink-0">
                    NOMOR POKOK SEKOLAH NASIONAL :
                  </b>
                  <div className="w-32 relative text-mini leading-[24px] text-left inline-block h-[33.9px] shrink-0">
                    NPSN K9998122
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" absolute w-full top-[7490px] md:top-[5790px] right-[0px] left-[0px] h-[514px] flex flex-col items-center justify-start pt-20 2xl:px-[300px] pb-[306.8px] box-border bg-[url('/public/bg/section5@3x.png')] bg-cover bg-no-repeat bg-[top] min-h-[500px] text-[28px] md:text-17xl text-white">
            <div className="w-full md:w-[1320px] flex flex-col items-start justify-start py-0 px-3 box-border ">
              <div className="self-stretch flex flex-row items-center justify-center py-0">
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[25px]">
                  <div className="w-full md:w-[655px] flex flex-col items-center justify-start pt-0 px-0 pb-[0.6px] box-border">
                    <b className="relative tracking-[0.9px] leading-[43.2px]">
                      TESTIMONI
                    </b>
                  </div>
                  <Testimoni testimoni={props.testimonis} />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-full top-[8290px] lg:top-[6480px] 2xl:top-[6550px] right-[0px] left-[0px] h-[1029px] flex flex-col items-center justify-center px-2 2xl:px-[300px] pb-[63px] box-border bg-[url('/public/bg/section6@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-17xl text-darkslateblue-100 font-inter">
            <Berita berita={props.beritas} />
            <BtnBeranda />
          </div>
        </main>
        <div className="w-full absolute top-[7690px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
