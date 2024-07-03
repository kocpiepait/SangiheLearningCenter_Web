import { useCallback } from "react";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const HALAMANCONTACT = () => {
  return (
    <div className="w-full relative shadow-[0px_3px_6px_rgba(18,_15,_40,_0.12)] bg-gray-600 h-[1614px] overflow-hidden text-left text-[33px] text-white font-lexend">
      <Navbar />
      <div className="absolute top-[0px] left-[-1px] w-[1920px] overflow-hidden flex flex-col items-center justify-start">
        <div className="w-[1919px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-royalblue h-[243px] flex flex-row items-center justify-center py-px px-[267px] box-border gap-[45px]">
          <img
            className="w-[145px] relative rounded h-[130px] object-cover"
            alt=""
            src="/image-112@2x.png"
          />
          <div className="w-[962px] relative h-[100px]">
            <b className="absolute top-[71.5px] left-[811.5px] leading-[46px]">
              Hubungi Kami
            </b>
            <div className="absolute top-[53px] left-[0px] w-[962px] h-[47px] text-base">
              <div className="absolute top-[0px] left-[0px] w-[170px] h-[46px] flex flex-row items-center justify-end">
                <div className="relative leading-[46px] whitespace-pre-wrap">
                  {" "}
                  +62 852-1699-0655
                </div>
                <img
                  className="w-[23px] relative h-[27px] object-cover ml-[-168px]"
                  alt=""
                  src="/image-114@2x.png"
                />
              </div>
              <div className="absolute top-[0px] left-[181px] w-[317px] h-[46px] flex flex-row items-center justify-start gap-[156px]">
                <img
                  className="w-[23px] relative h-[27px] object-cover"
                  alt=""
                  src="/image-114@2x.png"
                />
                <div className="relative leading-[46px] whitespace-pre-wrap">
                  {" "}
                  Sangihelearningcenter19@gmail.com
                </div>
              </div>
              <div className="absolute top-[1px] left-[508px] w-[221px] h-[46px]">
                <div className="absolute top-[0px] left-[508px] leading-[46px] whitespace-pre-wrap inline-block w-[221px]">
                  {" "}
                  Sangihe Learning Center
                </div>
                <img
                  className="absolute top-[10px] left-[2px] w-[23px] h-[27px] object-cover"
                  alt=""
                  src="/image-114@2x.png"
                />
              </div>
              <div className="absolute top-[1px] left-[740px] w-[222px] h-[46px]">
                <div className="absolute top-[0px] left-[740px] leading-[46px] whitespace-pre-wrap inline-block w-[222px]">
                  {" "}
                  @sangihelearning
                </div>
                <img
                  className="absolute top-[10px] left-[2px] w-[23px] h-[27px] object-cover"
                  alt=""
                  src="/image-114@2x.png"
                />
              </div>
            </div>
          </div>
          <img
            className="w-[139px] relative rounded h-[120px] object-cover"
            alt=""
            src="/image-113@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[347px] left-[-1px] w-[1920px] h-[1267px] overflow-hidden flex flex-col items-center justify-start text-base text-lightslategray font-manrope">
        <div className="w-[1920px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-gray-600 h-[913px] flex flex-row items-center justify-center py-[86px] px-[74px] box-border">
          <div className="w-[645px] relative bg-gainsboro-400 h-[662px]" />
          <div className="w-[574px] relative shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-gray-400 h-[662px]">
            <b className="absolute top-[32px] left-[195px] text-xl leading-[30px] font-lexend text-gray-200 text-center">
              Submit a Request
            </b>
            <div className="absolute top-[408px] left-[30px] leading-[26px]">
              Description
            </div>
            <div className="absolute top-[95px] left-[30px] leading-[26px]">
              First Name
            </div>
            <div className="absolute top-[200px] left-[30px] leading-[26px]">
              Email
            </div>
            <div className="absolute top-[575px] left-[29px] rounded bg-crimson-500 w-[212px] h-[54px] overflow-hidden flex flex-col items-center justify-center text-white">
              <div className="relative leading-[25px]">Submit</div>
            </div>
            <div className="absolute top-[309px] left-[27px] bg-gray-1200 w-[517px] h-[83px] flex flex-col items-start justify-start gap-[1px] text-[17px]">
              <b className="relative leading-[27px]">Subject</b>
              <div className="w-[518px] rounded bg-gray-400 box-border h-14 flex flex-col items-start justify-center py-0 px-5 text-mini text-silver-300 border-[1px] border-solid border-lightslategray">
                <div className="relative leading-[23px]">
                  Enter your Subject
                </div>
              </div>
            </div>
            <div className="absolute top-[134px] left-[26px] rounded bg-gray-600 box-border w-[518px] h-[49px] flex flex-col items-start justify-end py-[11.5px] px-5 text-mini text-silver-300 border-[1px] border-solid border-lightslategray">
              <div className="relative leading-[23px]">
                Enter your first Name
              </div>
            </div>
            <div className="absolute top-[238px] left-[26px] rounded bg-gray-400 box-border w-[518px] h-[49px] flex flex-col items-start justify-end py-[11.5px] px-5 text-mini text-silver-300 border-[1px] border-solid border-lightslategray">
              <div className="relative leading-[23px]">
                Enter your email address
              </div>
            </div>
            <div className="absolute top-[448px] left-[27px] shadow-[0px_0px_2px_rgba(23,_26,_31,_0.12),_0px_0px_1px_rgba(23,_26,_31,_0.07)] rounded bg-gray-400 w-[517px] h-28 flex flex-col items-start justify-start py-2.5 px-[19px] box-border text-mini text-silver-300">
              <div className="relative leading-[24px]">Write down here</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HALAMANCONTACT;
