import Footer from "@/Components/Footer";
import Galeri from "@/Components/HalamanGaleri/Galeri";
import Navbar from "@/Components/Navbar";
import { useCallback } from "react";

const HALAMANGALLERY = (props) => {
  console.log(props);
  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-gray-600 h-[2039px] overflow-hidden text-left text-base text-darkslateblue-300 font-inter">
      <Navbar />
      <div className="absolute top-[104px] left-[0px] bg-white w-[1920px] h-[86px] flex flex-col items-center justify-center py-0 px-[300px] box-border">
        <div className="w-[1320px] h-[52px] flex flex-col items-start justify-start max-w-[1320px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-3 box-border max-w-[1320px]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="w-[277px] flex flex-col items-start justify-start">
                  <div className="self-stretch h-[27px] flex flex-row flex-wrap items-start justify-start">
                    <div className="h-[27px] flex flex-col items-start justify-start pt-0 px-0 pb-[2.4px] box-border">
                      <div className="relative leading-[24px] font-medium">
                        Beranda
                      </div>
                    </div>
                    <div className="w-[95px] h-[27px] flex flex-row items-start justify-start py-0 pr-4 pl-2 box-border text-2xs text-gray-300 font-font-awesome-5-free">
                      <div className="w-[16.9px] flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border">
                        <div className="w-[17px] relative leading-[26.4px] flex items-center">
                          <img src="/vector/Symbol (1).png" alt="" />
                        </div>
                      </div>
                      <div className="w-[70px] relative text-base leading-[24px] font-medium font-inter flex items-center shrink-0">
                        Galeri
                      </div>
                    </div>
                    <div className="w-[118px] h-[27px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[101px] flex flex-col items-start justify-start text-2xs text-gray-300 font-font-awesome-5-free">
            <div className="w-[101px] h-6 flex flex-row flex-wrap items-start justify-start">
              <div className="w-[101px] h-6 flex flex-row items-start justify-start py-0 pr-4 pl-0 box-border">
                <div className="w-[22px] h-6 flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border">
                  <div className="w-[9.9px] relative leading-[26.4px] flex items-center h-6 shrink-0 [transform:_rotate(-179.8deg)]">
                    <img src="/vector/Symbol (1).png" alt="" />
                  </div>
                </div>
                <div className="w-[179px] relative text-base leading-[24px] font-medium font-inter text-slategray flex items-center shrink-0 cursor-pointer">
                  Kembali Ke Beranda
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1638px] left-[-1px] bg-white w-[1920px] h-[401px] flex flex-col items-start justify-start text-lg text-gray-1000">
        <Footer />
      </div>
      <div className="absolute top-[298px] left-[167px] w-[1584px] flex flex-row flex-wrap items-start justify-center gap-[53px_9px] text-black">
        <div className="w-[1584px] relative h-[1170px]">
          <Galeri galeri={props.galeries} />
        </div>
        <div className="w-10 rounded-8xs bg-firebrick box-border h-10 flex flex-row items-center justify-center py-2 px-[16.3px] text-white border-[1px] border-solid border-firebrick">
          <div className="relative leading-[24px]">1</div>
        </div>
        <div className="w-10 rounded-8xs bg-white box-border h-10 flex flex-row items-center justify-center py-2 pr-[15.1px] pl-[15.2px] border-[1px] border-solid border-firebrick">
          <div className="relative leading-[24px]">2</div>
        </div>
        <div className="w-10 rounded-8xs bg-white box-border h-10 flex flex-row items-center justify-center py-2 px-[14.9px] border-[1px] border-solid border-firebrick">
          <div className="relative leading-[24px]">3</div>
        </div>
        <div className="w-10 rounded-8xs bg-white box-border h-10 flex flex-row items-center justify-center py-2 px-[14.9px] border-[1px] border-solid border-firebrick">
          <div className="relative leading-[24px]">4</div>
        </div>
        <div className="w-10 h-10 flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border font-font-awesome-5-free">
          <div className="w-10 rounded-tl-8xs rounded-tr-md rounded-br-md rounded-bl-8xs bg-white box-border h-10 flex flex-row items-center justify-center py-3 px-[15px] border-[1px] border-solid border-firebrick">
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[16px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HALAMANGALLERY;
