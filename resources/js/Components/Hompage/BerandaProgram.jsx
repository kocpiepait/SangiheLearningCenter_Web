export default function BerandaProgram({ program }) {
  console.log({ program });
  return program.map((data, i) => {
    return (
      <div
        key={i}
        className="w-[411px] h-max bg-white rounded-3xs [backdrop-filter:blur(17px)] box-border flex flex-col items-center justify-center p-4 border-[1px] border-solid border-whitesmoke-300 gap-3"
      >
        <div className="w-full h-max">
          <img
            className="w-full h-full"
            src="/program/course01jpg-1@2x.png"
            alt="foto_program"
          />
        </div>

        <div className="flex flex-col items-center w-full gap-2">
          <div className="flex felx-row items-center w-full text-darkslateblue-300 gap-1">
            <img
              className=" w-[50px] relative rounded-6xl h-[50px] overflow-hidden shrink-0 object-cover max-w-[50px]"
              alt=""
              src="/pengajar/user1jpg-1@2x.png"
            />
            <div className="flex flex-col items-start w-full gap-1">
              <p className="m-0 relative leading-[21.2px]font-medium">
                Nicole Brown
              </p>
              <p className="m-0 relative leading-[21px] text-sm text-slategray">
                Pengajar
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full border-b-[1px] border-solid border-silver-100 gap-4">
            <b className="text-lg text-gray-300 relative leading-[27px]">
              {data.nama_program}
            </b>
            <div className="flex flex-row gap-2">
              <p></p>
              <p className="relative font-medium text-slategray">12 Peserta</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-end">
          <button className="[backdrop-filter:blur(151.39px)] rounded-[46.92px] box-border flex flex-col items-center justify-center py-[13px] px-[36.4px] min-w-[150px] border-[3px] border-solid border-darkslateblue-100 text-darkslateblue-100">
            Detail
          </button>
        </div>
      </div>
    );
  });
}
