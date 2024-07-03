import React from "react";

export default function Testimoni({ testimoni }) {
  return (
    <div className="absolute w-full top-[190px] right-[0.31%] left-[-0.21%] h-[479px] flex flex-col items-center justify-start py-0 px-2 xl:px-[92px] 2xl:px-[300px] box-border text-center text-lgi-8 text-darkslateblue-500 font-inter">
      <div className="w-full xl:w-[1320px] h-[479px] flex flex-col items-start justify-end py-0 px-3 box-border">
        <div className="bg-black w-full xl:w-[1296px] relative h-px" />
        <div className="w-full xl:w-[1296px] flex flex-col items-center justify-center py-0 box-border">
          {testimoni.map((data, index) => (
            <div
              key={index}
              className="w-full xl:w-[907.2px] shadow-[6px_7px_10px_1px_rgba(0,_0,_0,_0.25)] backdrop-filter:blur(151.39px)] rounded-26xl [background:linear-gradient(123.4deg,_rgba(255,_255,_255,_0.28)_1.8%,_rgba(255,_255,_255,_0.31)_99.75%)] box-border overflow-hidden flex flex-col items-center justify-center py-3.5 px-0 max-w-[907.2000122070312px] border-[14px] border-solid border-whitesmoke-200"
            >
              <div className="w-full xl:w-[880px] [background:linear-gradient(180deg,_#57504d,_#f2f3f6)] h-[451px] flex flex-row items-center justify-center py-10 px-0 xl:px-20 box-border">
                <div className="h-[400px] flex flex-row items-center justify-start max-w-[792px]">
                  <div className="w-full xl:w-[720px] relative h-[400px]">
                    <div className="absolute top-[37px] left-[0px] w-full xl:w-[720px] flex flex-col items-center justify-start py-0 px-0 xl:px-[2.2px] box-border text-xl text-white">
                      <i className="relative leading-[32px] font-medium">
                        {data.isi_testimoni.split("\n").map((line, idx) => (
                          <p key={idx} className="m-0">
                            {line}
                          </p>
                        ))}
                      </i>
                    </div>
                    <div className="absolute w-full top-[254px] right-[-0.4px] left-[0.4px] h-[146px] flex flex-col items-center justify-start gap-[16.1px] text-5xl text-gray-300">
                      <div className="self-stretch flex flex-col items-center justify-start">
                        <div className="w-[720px] flex flex-row items-center justify-center py-0 px-80 box-border">
                          <img
                            className="w-[80.4px] relative rounded-31xl h-20 overflow-hidden shrink-0 object-cover max-w-[720px]"
                            alt=""
                            src={`/images/${data.gambar_testimoni}`}
                          />
                        </div>
                      </div>
                      <div className="w-[720px] h-[50px] flex flex-col items-center justify-start pt-0 px-[291.7px]  box-border">
                        <p className="text-base text-slategray">
                          {data.nama_testimoni}
                        </p>
                        <p className="w-[137px] relative leading-[28.8px] flex items-center justify-center h- [70px] mb-[20px] font-medium shrink-0">
                          {data.status_testimoni}
                        </p>
                      </div>
                    </div>
                    <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-px" />
                    <div className="absolute top-[200.5px] left-[56.4px] bg-white w-[60px] h-[60px] flex flex-row items-start justify-center pt-[19.5px] px-[21.3px] pb-[20.5px] box-border font-font-awesome-5-free">
                      <div className="relative leading-[20px] opacity-[0.75]">
                        
                      </div>
                    </div>
                    <div className="absolute top-[210.5px] left-[605.4px] bg-white w-[60px] h-[60px] flex flex-row items-start justify-center pt-[19.5px] px-[21.3px] pb-[20.5px] box-border font-font-awesome-5-free">
                      <div className="relative leading-[20px] opacity-[0.75]">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
