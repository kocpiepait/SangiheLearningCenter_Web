export default function BerandaProgram({ program }) {
  console.log({ program });

  // Membatasi data yang akan dirender menjadi hanya 6 data
  const limitedProgram = program.slice(0, 6);

  return limitedProgram.map((data, i) => {
    return (
      <div
        key={i}
        className="w-[411px] h-max bg-white rounded-3xs box-border flex flex-col items-center justify-center p-4 border-[1px] border-solid border-whitesmoke-300 gap-3  hover:bg-hovercard-200 hover:text-white duration-300 "
      >
        <div className="w-full h-max rounded-3xs">
          <img
            className="w-full relative rounded-t rounded-b-none h-[271px]   overflow-hidden shrink-0 object-cover "
            src={`/images/${data.img_program}`}
            alt="foto_program"
          />
        </div>

        <div className="flex flex-col items-center w-full gap-2">
          <div className="flex felx-row items-center w-full text-darkslateblue-300 gap-3">
            <img
              className="w-[50px] relative rounded-6xl h-[50px] overflow-hidden shrink-0 object-cover max-w-[50px]"
              alt=""
              src={data.pengajar.foto_pengajar}
            />
            <div className="flex flex-col items-start w-full gap-1">
              <p className="m-0 relative leading-[21.2px] font-medium">
                {data.pengajar.nama_pengajar}
              </p>
              <p className="m-0 relative leading-[21px] text-sm text-slategray">
                {data.pengajar.status}
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full border-b-[1px] border-solid border-silver-100 gap-4 mt-3">
            <b className="text-lg text-gray-300 relative leading-[27px]">
              {data.nama_program}
            </b>
            <div className="flex flex-row gap-2 items-center mb-3 ">
              <img src="/vector/Symbol.png" alt="" />
              <p className="relative font-medium text-slategray m-0">
                {data.pesertas.length} Peserta
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-end">
          <button className="[backdrop-filter:blur(151.39px)] rounded-[46.92px] box-border flex flex-col items-center justify-center py-[13px] px-[36.4px] min-w-[150px] border-[3px] border-solid border-darkslateblue-100 text-darkslateblue-100 hover:bg-darkslateblue-100 hover:text-white duration-300">
            Detail
          </button>
        </div>
      </div>
    );
  });
}
