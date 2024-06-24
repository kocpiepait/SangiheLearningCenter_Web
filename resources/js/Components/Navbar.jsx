import { Link } from "@inertiajs/react";

export default function Navbar() {
  return (
    <div className="self-stretch shadow-[0px_4px_15px_rgba(0,_0,_0,_0.08)] bg-white h-max lg:h-[104px] flex items-center flex-row items-center justify-center box-border text-left text-mini lg:text-darkslateblue-100 font-Poppins font-medium fixed top-0 z-[999] w-full">
      <div className=" w-full flex flex-row flex-wrap items-center justify-center lg:justify-between px-3 xl:mx-[93px] 2xl:mx-[300px] box-border ">
        <div className="w-max px-3 pt-1 h-max flex flex-col items-start justify-center">
          <img
            className="w-[110px] h-[66px] lg:w-[130px] relative lg:h-[76px] object-cover"
            alt=""
            src="/logo/logo01-png-1@2x.png"
          />
        </div>
        <div className="flex flex-row items-center justify-start">
          <ul className="bg-red-500 absolute m-0 p-0 right-[100%] lg:right-0 top-0 h-screen w-1/2 md:w-2/5 flex flex-col gap-y-5 items-start lg:bg-white lg:w-full lg:relative lg:m-0 lg:flex-row lg:h-full lg:items-center lg:gap-x-5 lg:p-4">
            <Link
              href={route("Beranda")}
              className="list-none cursor-pointer py-4 px-6 box-border w-full lg:text-crimson-300 lg:hover:text-crimson-300 lg:px-0 lg:h-full"
            >
              Beranda
            </Link>
            <Link
              href={route("Tentang")}
              className="list-none cursor-pointer py-4 px-6 box-border w-full lg:px-0 lg:hover:text-crimson-300 lg:h-full"
            >
              Tentang
            </Link>
            <li className="list-none cursor-pointer py-4 px-6 box-border w-full lg:px-0 lg:hover:text-crimson-300 lg:h-full">
              Program
            </li>
            <li className="list-none cursor-pointer py-4 px-6 box-border w-full lg:px-0 lg:hover:text-crimson-300 lg:h-full">
              Testimoni
            </li>
            <li className="list-none cursor-pointer py-4 px-6 box-border w-full lg:px-0 lg:hover:text-crimson-300 lg:h-full">
              Galeri
            </li>
            <li className="list-none cursor-pointer py-4 px-6 box-border w-full lg:px-0 lg:hover:text-crimson-300 lg:h-full">
              Berita
            </li>
            <li className="list-none cursor-pointer py-4 px-6 box-border w-full lg:px-0 lg:hover:text-crimson-300 lg:h-full">
              Kontak
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
