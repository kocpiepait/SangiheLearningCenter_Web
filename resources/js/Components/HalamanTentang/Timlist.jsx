import React from "react";

export default function Timlist({ pengajar }) {
  console.log(pengajar);
  return (
    <>
      {pengajar.map((data, index) => (
        <div
          key={index}
          className="w-[306px] flex flex-col items-center justify-start pt-0 px-0 pb-6 box-border min-h-[1px]"
        >
          <div className="self-stretch shadow-[0px_5px_13px_6px_rgba(212,_211,_254,_0.23)] rounded-3xs bg-white  flex flex-col items-start justify-start  border-[1px] border-solid border-whitesmoke-300">
            <div className="w-full relative h-[304px] overflow-hidden shrink-0 bg-no-repeat bg-[top] max-w-[304px] z-[1]">
              <div className="absolute top-[3px] bg-salmon w-[304px] h-[304px]" />
              <img
                className="absolute  h-[370px] object-cover w-full"
                alt=""
                src={data.foto_pengajar}
              />
            </div>
            <div className="w-full h-[173px] flex flex-col items-start justify-center gap-5 pt-0 box-border z-[0]">
              <div className="w-full flex flex-col items-center justify-start py-0 box-border">
                <div className="relative leading-[24px] font-semibold">
                  <p className="m-0">{data.nama_pengajar}</p>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-start py-0 px-[74.5px] box-border text-base text-slategray">
                <div className="relative leading-[24px]">{data.status}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
