import Footer from "@/Components/Footer";
import { useCallback } from "react";

const HALAMANBERITA = () => {
  return (
    <div className="w-full relative [background:linear-gradient(#fff,_#fff),_#fff] h-[2644px] text-left text-lg text-gray-1100 font-inter">
      <div className="absolute top-[0px] left-[-1px] w-[1921px] overflow-hidden flex flex-col items-start justify-end py-0 pr-px pl-0 box-border gap-[76px]">
        <div className="self-stretch relative bg-gray-600 h-[2063px]">
          <div className="absolute top-[calc(50%_-_946.5px)] left-[calc(50%_+_330px)] h-[1978px] flex flex-col items-start justify-start pt-0 px-3 pb-[22px] box-border gap-[21px]">
            <div className="w-[306px] rounded-3xs bg-white box-border h-[363.6px] flex flex-col items-start justify-end p-[21px] gap-[20px] border-[1px] border-solid border-whitesmoke-300">
              <div className="w-[264px] rounded-t-8xs rounded-b-none bg-white h-[21.6px] flex flex-col items-start justify-center">
                <b className="w-[116.1px] relative leading-[21.6px] flex items-center h-[21.6px] shrink-0">
                  Recent Posts
                </b>
              </div>
              <div className="w-[264px] h-[280px] flex flex-col items-center justify-start gap-[20px] text-sm text-gray-300">
                <div className="w-[264px] relative h-20">
                  <img
                    className="absolute top-[0px] left-[0px] rounded w-20 h-20 overflow-hidden object-cover"
                    alt=""
                    src="/container@2x.png"
                  />
                  <div className="absolute top-[-1px] left-[95px] w-[168.2px] h-[50.6px] flex flex-col items-center justify-center">
                    <div className="w-[168.4px] relative leading-[16.8px] font-semibold flex items-center h-[50.4px] shrink-0">
                      <span className="w-full">
                        <p className="m-0">Learn Webs Applications</p>
                        <p className="m-0">Development from</p>
                        <p className="m-0">Experts</p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_+_15.4px)] left-[calc(50%_-_37px)] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/icon22svg.svg"
                  />
                  <div className="absolute top-[57.2px] left-[125px] text-xs leading-[18px] font-medium text-black flex items-center w-[73.9px] h-[18px]">
                    Jun 14, 2022
                  </div>
                </div>
                <div className="w-[264px] relative h-20">
                  <img
                    className="absolute top-[0px] left-[0px] rounded w-20 h-20 overflow-hidden object-cover"
                    alt=""
                    src="/container@2x.png"
                  />
                  <div className="absolute top-[-1px] left-[95px] w-[134.4px] h-[50.6px] flex flex-col items-center justify-center">
                    <div className="w-[134.6px] relative leading-[16.8px] font-semibold flex items-center h-[50.4px] shrink-0">
                      <span className="w-full">
                        <p className="m-0">Expand Your Career</p>
                        <p className="m-0">Opportunities With</p>
                        <p className="m-0">Python</p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_+_15.4px)] left-[calc(50%_-_37px)] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/icon22svg.svg"
                  />
                  <div className="absolute top-[57.2px] left-[125px] text-xs leading-[18px] font-medium text-black flex items-center w-[68.5px] h-[18px]">
                    {" "}
                    3 Dec 2019
                  </div>
                </div>
                <div className="w-[264px] relative h-20">
                  <img
                    className="absolute top-[0px] left-[0px] rounded w-20 h-20 overflow-hidden object-cover"
                    alt=""
                    src="/container@2x.png"
                  />
                  <div className="absolute top-[-1px] left-[95px] w-[140.4px] h-[50.6px] flex flex-col items-center justify-center">
                    <div className="w-[140.6px] relative leading-[16.8px] font-semibold flex items-center h-[50.4px] shrink-0">
                      <span className="w-full">
                        <p className="m-0">Complete PHP</p>
                        <p className="m-0">Programming Career</p>
                        <p className="m-0">Guideline</p>
                      </span>
                    </div>
                  </div>
                  <img
                    className="absolute top-[calc(50%_+_15.4px)] left-[calc(50%_-_37px)] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/icon22svg.svg"
                  />
                  <div className="absolute top-[57.2px] left-[125px] text-xs leading-[18px] font-medium text-black flex items-center w-[68.5px] h-[18px]">
                    {" "}
                    3 Dec 2019
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[306px] rounded-3xs bg-white box-border h-[195.6px] flex flex-col items-start justify-end p-[21px] gap-[20px] border-[1px] border-solid border-whitesmoke-300">
              <div className="w-[264px] rounded-t-8xs rounded-b-none bg-white h-[21.6px] flex flex-col items-start justify-center">
                <b className="w-[78.5px] relative leading-[21.6px] flex items-center h-[21.6px] shrink-0">
                  Archives
                </b>
              </div>
              <div className="w-[264px] h-28 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-px box-border gap-[23px] text-salmon font-font-awesome-5-free">
                <div className="w-[126.4px] h-[20.5px] flex flex-row items-center justify-start gap-[18px]">
                  <div className="w-[11.6px] relative leading-[18px] flex items-center h-[18px] shrink-0">
                    
                  </div>
                  <div className="w-[96.5px] relative text-sm leading-[21px] font-medium font-inter text-gray-300 flex items-center h-[21px] shrink-0">
                    {" "}
                    January 2022
                  </div>
                </div>
                <div className="w-[132.3px] h-[20.5px] flex flex-row items-center justify-start gap-[18px]">
                  <div className="w-[11.6px] relative leading-[18px] flex items-center h-[18px] shrink-0">
                    
                  </div>
                  <div className="w-[102.4px] relative text-sm leading-[21px] font-medium font-inter text-gray-300 flex items-center h-[21px] shrink-0">
                    {" "}
                    February 2022
                  </div>
                </div>
                <div className="w-[103.3px] h-[20.5px] flex flex-row items-center justify-start gap-[18px]">
                  <div className="w-[11.6px] relative leading-[18px] flex items-center h-[18px] shrink-0">
                    
                  </div>
                  <div className="w-[73.3px] relative text-sm leading-[21px] font-medium font-inter text-gray-300 flex items-center h-[21px] shrink-0">
                    {" "}
                    April 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[0px] left-[250px] w-[990px] h-[2063px] text-base text-black">
            <div className="absolute h-[calc(100%_-_2023px)] w-[calc(100%_-_12px)] top-[1987px] right-[0px] bottom-[36px] left-[12px] flex flex-col items-start justify-start pt-5 px-3 pb-0 box-border max-w-[990px]">
              <div className="w-[239px] relative h-10">
                <div className="absolute top-[0px] left-[200px] w-[39px] h-10 flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border font-font-awesome-5-free">
                  <div className="w-10 rounded-tl-8xs rounded-tr-md rounded-br-md rounded-bl-8xs bg-white box-border h-10 flex flex-row items-center justify-center py-3 px-[15px] border-[1px] border-solid border-firebrick">
                    <div className="flex flex-col items-start justify-start">
                      <div className="relative leading-[16px]"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-8xs bg-crimson-300 box-border w-10 h-10 flex flex-row items-center justify-center py-2 px-[16.3px] text-white border-[1px] border-solid border-firebrick">
                  <div className="relative leading-[24px]">1</div>
                </div>
                <div className="absolute top-[0px] left-[50px] rounded-8xs bg-white box-border w-10 h-10 flex flex-row items-center justify-center py-2 pr-[15.1px] pl-[15.2px] border-[1px] border-solid border-firebrick">
                  <div className="relative leading-[24px]">2</div>
                </div>
                <div className="absolute top-[0px] left-[100px] rounded-8xs bg-white box-border w-10 h-10 flex flex-row items-center justify-center py-2 px-[14.9px] border-[1px] border-solid border-firebrick">
                  <div className="relative leading-[24px]">3</div>
                </div>
                <div className="absolute top-[0px] left-[150px] rounded-8xs bg-white box-border w-10 h-10 flex flex-row items-center justify-center py-2 px-[14.9px] border-[1px] border-solid border-firebrick">
                  <div className="relative leading-[24px]">4</div>
                </div>
              </div>
            </div>
            <div className="absolute h-[calc(100%_-_228px)] w-full top-[85px] right-[-12px] bottom-[143px] left-[12px] text-sm">
              <div className="absolute w-[calc(100%_-_24px)] top-[360.9px] right-[12px] left-[12px] h-[30px]">
                <div className="absolute w-[calc(100%_-_850.9px)] top-[0px] right-[850.9px] left-[0px] h-[30px]">
                  <img
                    className="absolute top-[calc(50%_-_15px)] left-[0px] rounded-11xl w-[30px] h-[30px] overflow-hidden object-cover"
                    alt=""
                    src="/userjpg@2x.png"
                  />
                  <div className="absolute top-[4.5px] left-[39px] leading-[21px] flex items-center w-[76.4px] h-[21px]">
                    Ruby Perrin
                  </div>
                </div>
                <div className="absolute top-[calc(50%_-_12px)] left-[135.1px] box-border w-[166.7px] h-6 border-l-[1px] border-solid border-silver-200">
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[21px] max-h-full w-6 overflow-hidden"
                    alt=""
                    src="/icon22svg1.svg"
                  />
                  <div className="absolute top-[0px] left-[54px] leading-[21px] flex items-center w-[93px] h-[21px]">
                    April 20, 2022
                  </div>
                </div>
                <div className="absolute top-[calc(50%_-_12px)] left-[301.8px] box-border w-[249px] h-6 border-l-[1px] border-solid border-silver-200">
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[21px] max-h-full w-6 overflow-hidden"
                    alt=""
                    src="/icon23svg.svg"
                  />
                  <div className="absolute top-[0px] left-[54px] leading-[21px] flex items-center w-[175.4px] h-[21px]">
                    Programming, Web Design
                  </div>
                </div>
              </div>
              <div className="absolute top-[410.8px] left-[12px] text-5xl leading-[31.2px] font-semibold flex items-center w-[604.5px] h-[31.2px]">
                Learn Webs Applications Development from Experts
              </div>
              <img
                className="absolute w-[calc(100%_-_24px)] top-[0px] right-[12px] left-[12px] max-w-full overflow-hidden h-[340.9px] object-cover cursor-pointer"
                alt=""
                src="/link--blog05jpg@2x.png"
                // onClick={onLinkBlog05jpgClick}
              />
              <div className="absolute top-[462.1px] left-[12px] leading-[21px] text-slategray flex items-center w-[966.1px] h-[63px]">
                <span className="w-full">
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus
                  </p>
                  <p className="m-0">
                    id, mattis vel, nisi. Sed pretium, ligula sollicitudin
                    laoreet viverra, tortor libero sodales leo, eget blandit
                    nunc tortor eu nibh. Nullam mollis. Ut justo.
                  </p>
                  <p className="m-0">
                    Suspendisse potenti. Sed egestas, ante et vulputate
                    volutpat, eros pede […]
                  </p>
                </span>
              </div>
              <div
                className="absolute top-[calc(50%_-_369.5px)] left-[15px] rounded-8xs bg-coral box-border w-[139.7px] h-11 cursor-pointer text-center text-base text-white border-[1px] border-solid border-coral"
                // onClick={onLinkContainer3Click}
              >
                <div className="absolute top-[calc(50%_-_12px)] left-[29px] leading-[24px] flex items-center justify-center w-[82px] h-6">
                  Read More
                </div>
              </div>
              <div className="absolute w-[calc(100%_-_24px)] top-[975.1px] right-[12px] left-[12px] h-[30px]">
                <div className="absolute w-[calc(100%_-_875.7px)] top-[0px] right-[875.7px] left-[0px] h-[30px]">
                  <img
                    className="absolute top-[calc(50%_-_15px)] left-[0px] rounded-11xl w-[30px] h-[30px] overflow-hidden object-cover"
                    alt=""
                    src="/user1jpg@2x.png"
                  />
                  <div className="absolute top-[4.5px] left-[39px] leading-[21px] flex items-center w-[51.7px] h-[21px]">
                    Jenis R.
                  </div>
                </div>
                <div className="absolute top-[calc(50%_-_12px)] left-[110.3px] box-border w-[162.7px] h-6 border-l-[1px] border-solid border-silver-200">
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[21px] max-h-full w-6 overflow-hidden"
                    alt=""
                    src="/icon22svg1.svg"
                  />
                  <div className="absolute top-[0px] left-[54px] leading-[21px] flex items-center w-[89.1px] h-[21px]">
                    May 20, 2021
                  </div>
                </div>
                <div className="absolute top-[calc(50%_-_12px)] left-[273px] box-border w-[224.8px] h-6 border-l-[1px] border-solid border-silver-200">
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[21px] max-h-full w-6 overflow-hidden"
                    alt=""
                    src="/icon23svg.svg"
                  />
                  <div className="absolute top-[0px] left-[54px] leading-[21px] flex items-center w-[151.1px] h-[21px]">
                    Programming, Courses
                  </div>
                </div>
              </div>
              <div className="absolute top-[1025px] left-[12px] text-5xl leading-[31.2px] font-semibold flex items-center w-[546.4px] h-[31.2px]">
                Expand Your Career Opportunities With Python
              </div>
              <img
                className="absolute w-[calc(100%_-_24px)] top-[614.1px] right-[12px] left-[12px] max-w-full overflow-hidden h-[340.9px] object-cover"
                alt=""
                src="/link--blog06jpg@2x.png"
              />
              <div className="absolute top-[1076.3px] left-[12px] leading-[21px] text-slategray flex items-center w-[966.1px] h-[63px]">
                <span className="w-full">
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus
                  </p>
                  <p className="m-0">
                    id, mattis vel, nisi. Sed pretium, ligula sollicitudin
                    laoreet viverra, tortor libero sodales leo, eget blandit
                    nunc tortor eu nibh. Nullam mollis. Ut justo.
                  </p>
                  <p className="m-0">
                    Suspendisse potenti. Sed egestas, ante et vulputate
                    volutpat, eros pede […]
                  </p>
                </span>
              </div>
              <div className="absolute top-[calc(50%_+_244.5px)] left-[14px] rounded-8xs bg-coral box-border w-[139.7px] h-11 text-center text-base text-white border-[1px] border-solid border-coral">
                <div className="absolute top-[calc(50%_-_12px)] left-[29px] leading-[24px] flex items-center justify-center w-[82px] h-6">
                  Read More
                </div>
              </div>
              <div className="absolute w-[calc(100%_-_24px)] top-[1589.2px] right-[12px] left-[12px] h-[30px]">
                <div className="absolute w-[calc(100%_-_861.5px)] top-[0px] right-[861.5px] left-[0px] h-[30px]">
                  <img
                    className="absolute top-[calc(50%_-_15px)] left-[0px] rounded-11xl w-[30px] h-[30px] overflow-hidden object-cover"
                    alt=""
                    src="/user3jpg@2x.png"
                  />
                  <div className="absolute top-[4.5px] left-[39px] leading-[21px] flex items-center w-[65.8px] h-[21px]">
                    Rolands R
                  </div>
                </div>
                <div className="absolute top-[calc(50%_-_12px)] left-[124.5px] box-border w-[158.9px] h-6 border-l-[1px] border-solid border-silver-200">
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[21px] max-h-full w-6 overflow-hidden"
                    alt=""
                    src="/icon22svg1.svg"
                  />
                  <div className="absolute top-[0px] left-[54px] leading-[21px] flex items-center w-[85.2px] h-[21px]">
                    Jun 14, 2022
                  </div>
                </div>
                <div className="absolute top-[calc(50%_-_12px)] left-[283.4px] box-border w-[249px] h-6 border-l-[1px] border-solid border-silver-200">
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[21px] max-h-full w-6 overflow-hidden"
                    alt=""
                    src="/icon23svg.svg"
                  />
                  <div className="absolute top-[0px] left-[54px] leading-[21px] flex items-center w-[175.4px] h-[21px]">
                    Programming, Web Design
                  </div>
                </div>
              </div>
              <div className="absolute top-[1639.1px] left-[12px] text-5xl leading-[31.2px] font-semibold flex items-center w-[529.9px] h-[31.2px]">
                Complete PHP Programming Career Guideline
              </div>
              <img
                className="absolute w-[calc(100%_-_24px)] top-[1228.3px] right-[12px] left-[12px] max-w-full overflow-hidden h-[340.9px] object-cover"
                alt=""
                src="/link--blog07jpg@2x.png"
              />
              <div className="absolute top-[1690.4px] left-[12px] leading-[21px] text-slategray flex items-center w-[966.1px] h-[63px]">
                <span className="w-full">
                  <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus
                  </p>
                  <p className="m-0">
                    id, mattis vel, nisi. Sed pretium, ligula sollicitudin
                    laoreet viverra, tortor libero sodales leo, eget blandit
                    nunc tortor eu nibh. Nullam mollis. Ut justo.
                  </p>
                  <p className="m-0">
                    Suspendisse potenti. Sed egestas, ante et vulputate
                    volutpat, eros pede […]
                  </p>
                </span>
              </div>
              <div className="absolute top-[calc(50%_+_858.5px)] left-[12px] rounded-8xs bg-coral box-border w-[139.7px] h-11 text-center text-base text-white border-[1px] border-solid border-coral">
                <div className="absolute top-[calc(50%_-_12px)] left-[29px] leading-[24px] flex items-center justify-center w-[82px] h-6">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[104px] left-[0px] w-[1920px] h-[2540px] overflow-hidden flex flex-col items-center justify-start gap-[2053px] text-base text-darkslateblue-300">
        <div className="self-stretch bg-white h-[86px] flex flex-col items-center justify-center py-0 px-[300px] box-border">
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
                            
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
                      
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
        <Footer />
      </div>
    </div>
  );
};

export default HALAMANBERITA;
