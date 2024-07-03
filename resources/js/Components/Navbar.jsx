import React from "react";
import { Link } from "@inertiajs/react";

export default function Navbar() {
  return (
    <div className="self-stretch shadow-[0px_4px_15px_rgba(0,_0,_0,_0.08)] bg-white h-max lg:h-[104px] flex items-center justify-center box-border text-left text-mini lg:text-darkslateblue-100 font-Poppins font-medium fixed top-0 z-[999] w-full">
      <div className="w-full flex flex-row flex-wrap items-center justify-center lg:justify-between px-3 xl:mx-[93px] 2xl:mx-[300px] box-border">
        <div className="w-max px-3 pt-1 h-max flex flex-col items-start justify-center">
          <img
            className="w-[110px] h-[66px] lg:w-[130px] lg:h-[76px] object-cover"
            alt="Logo"
            src="/logo/logo01-png-1@2x.png"
          />
        </div>
        <div className="flex flex-row items-center justify-start">
          <ul className="bg-red-500 absolute m-0 p-0 right-[100%] lg:right-0 top-0 h-screen w-1/2 md:w-2/5 flex flex-col gap-y-5 items-start lg:bg-white lg:w-full lg:relative lg:m-0 lg:flex-row lg:h-full lg:items-center lg:gap-x-5 lg:p-4">
            <li className="list-none py-4 px-6 box-border w-full lg:px-0 lg:h-full">
              <Link
                href={route("Beranda")}
                className="no-underline lg:hover:text-crimson-300 text-darkslateblue-100"
              >
                Beranda
              </Link>
            </li>
            <li className="list-none py-4 px-6 box-border w-full lg:px-0 lg:h-full">
              <Link
                href={route("Tentang")}
                className="no-underline lg:hover:text-crimson-300 text-darkslateblue-100"
              >
                Tentang
              </Link>
            </li>
            <li className="list-none py-4 px-6 box-border w-full lg:px-0 lg:h-full">
              <Link
                href={route("program")}
                className="no-underline lg:hover:text-crimson-300 text-darkslateblue-100"
              >
                Program
              </Link>
            </li>
            <li className="list-none py-4 px-6 box-border w-full lg:px-0 lg:h-full">
              <Link className="no-underline lg:hover:text-crimson-300 text-darkslateblue-100">
                Testimoni
              </Link>
            </li>
            <li className="list-none py-4 px-6 box-border w-full lg:px-0 lg:h-full">
              <Link
                href={route("galery")}
                className="no-underline lg:hover:text-crimson-300 text-darkslateblue-100"
              >
                Galeri
              </Link>
            </li>
            <li className="list-none py-4 px-6 box-border w-full lg:px-0 lg:h-full">
              <Link className="no-underline lg:hover:text-crimson-300 text-darkslateblue-100">
                Berita
              </Link>
            </li>
            <li className="list-none py-4 px-6 box-border w-full lg:px-0 lg:h-full">
              <Link className="no-underline lg:hover:text-crimson-300 text-darkslateblue-100">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
