export default function Pengajar({ pengajar }) {
  console.log(pengajar);
  return (
    <>
      {pengajar.slice(0, 4).map((data, i) => (
        <div
          key={i}
          className="w-full md:w-[306px] flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border h-max"
        >
          <div className="self-stretch shadow-[0px_5px_13px_6px_rgba(212,_211,_254,_0.23)] rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start p-px border-[1px] border-solid border-whitesmoke-300">
            <div className="w-full relative rounded-t-lg rounded-b-none h-[304px] overflow-hidden shrink-0 flex flex-col items-center bg-cover bg-no-repeat bg-[top]">
              <img
                className="w-full h-[509px] md:h-[317px] object-cover"
                alt=""
                src={data.foto_pengajar} // Assuming you have the image URL in data.img_pengajar
              />
            </div>
            <div className="w-full md:w-[304px] h-[143px] flex flex-col items-center justify-center px-5 box-border">
              <div className="w-full md:w-[264px] h-[61px] flex flex-col items-center justify-start py-0 m-0 p-0 box-border">
                <div className="w-full relative leading-[24px] text-[20px] font-semibold">
                  <p className="m-0">{data.nama_pengajar}</p>
                  <p className="m-0">{data.gelar_pengajar}</p>
                </div>
              </div>
              <div className="w-full md:w-[264px] flex flex-col items-center justify-start py-0 box-border text-base text-slategray">
                <div className="relative leading-[24px] text-[15px] md:text-[16px]">
                  {data.status}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
