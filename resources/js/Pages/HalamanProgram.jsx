import ProgramList from "@/Components/HalamanProgram/ProgramList";
import Navbar from "@/Components/Navbar";

export default function HalamanProgram(props) {
    console.log(props);
    return (
        <div className="w-full relative bg-white h-max text-left text-2xs text-gray-300 font-inter">
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-max flex flex-col items-start justify-start">
                <Navbar />
                <div className="w-full mt-[130px] h-[86px] flex flex-col items-center justify-center py-0 px-[300px] pb-[20px] box-border font-font-awesome-5-free">
                    <div className="w-full flex flex-col items-start justify-start w-full">
                        <div className="self-stretch  flex flex-row flex-nowrap items-center justify-center">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-3 box-border">
                                <div className="self-stretch flex flex-row items-center justify-start">
                                    <div className="w-[182px] flex flex-col items-start justify-start">
                                        <div className="w-full  flex flex-row flex-nowrap items-center justify-around">
                                            <div className="self-stretch  flex flex-col items-start justify-center pt-0 px-0 pb-[2.4px] text-base text-darkslateblue-300 font-inter">
                                                <div className="relative leading-[24px] font-medium">
                                                    Beranda
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-row items-center justify-center py-0 pr-4 pl-2">
                                                <div className="flex-1 flex flex-col items-start justify-center py-0 pr-4 pl-0">
                                                    <div className="self-stretch relative leading-[26.4px]">
                                                        <p>→</p>
                                                    </div>
                                                </div>
                                                <div className="w-[70px] relative text-base leading-[24px] font-medium font-inter flex items-center shrink-0">
                                                    Program
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch  w-[200px] flex flex-row items-center justify-start py-0 pr-4 pl-0 box-border">
                                            <div className="w-[22px] h-6 flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border">
                                                <div className="w-[9.9px] relative leading-[26.4px] flex items-center h-6 shrink-0 [transform:_rotate(-179.8deg)]">
                                                    <p>→</p>
                                                </div>
                                            </div>
                                            <div
                                                className="relative text-base leading-[24px]   font-medium font-inter text-slategray cursor-pointer"
                                                // onClick={onKembaliKeBerandaClick}
                                            >
                                                Kembali ke beranda
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch bg-gray-600 flex flex-col items-center justify-start py-20 px-[300px] text-xl text-salmon">
                    <div className="w-full h-[1558px] flex flex-col items-start justify-start ">
                        <div className="self-stretch h-[1558px] flex flex-row flex-nowrap items-start justify-around">
                            <div className="w-[990px] relative h-[1514px] gap-[10px]">
                                <div className="absolute w-full top-[88px] right-[0px] left-[0px] h-[1258px] flex flex-col items-start justify-center text-center gap-[10px] bg-black">
                                    <ProgramList programlist={props.program} />
                                </div>
                                <div className="absolute h-[calc(100%_-_1467px)] w-full top-[1366px] right-[0px] bottom-[101px] left-[0px] flex flex-col items-start justify-start pt-5 px-3 pb-0 box-border max-w-[990px] text-base text-black">
                                    <div className="w-[239px] relative h-10">
                                        <div className="absolute top-[0px] left-[200px] w-[39px] h-10 flex flex-col items-start justify-start py-0 pr-[15px] pl-0 box-border font-font-awesome-5-free">
                                            <div className="w-10 rounded-tl-8xs rounded-tr-md rounded-br-md rounded-bl-8xs bg-white box-border h-10 flex flex-row items-center justify-center py-3 px-[15px] border-[1px] border-solid border-firebrick">
                                                <div className="flex flex-col items-start justify-start">
                                                    <div className="relative leading-[16px]">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-crimson-300 box-border w-10 h-10 flex flex-row items-center justify-center py-2 px-[16.3px] text-white border-[1px] border-solid border-firebrick">
                                            <div className="relative leading-[24px]">
                                                1
                                            </div>
                                        </div>
                                        <div className="absolute top-[0px] left-[50px] rounded-8xs bg-white box-border w-10 h-10 flex flex-row items-center justify-center py-2 pr-[15.1px] pl-[15.2px] border-[1px] border-solid border-firebrick">
                                            <div className="relative leading-[24px]">
                                                2
                                            </div>
                                        </div>
                                        <div className="absolute top-[0px] left-[100px] rounded-8xs bg-white box-border w-10 h-10 flex flex-row items-center justify-center py-2 px-[14.9px] border-[1px] border-solid border-firebrick">
                                            <div className="relative leading-[24px]">
                                                3
                                            </div>
                                        </div>
                                        <div className="absolute top-[0px] left-[150px] rounded-8xs bg-white box-border w-10 h-10 flex flex-row items-center justify-center py-2 px-[14.9px] border-[1px] border-solid border-firebrick">
                                            <div className="relative leading-[24px]">
                                                4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-[24px] left-[13px] w-[473px] flex flex-col items-start justify-start py-0 px-1 box-border max-w-[479px] text-sm text-darkgray-200">
                                    <div className="w-[450px] rounded-8xs bg-white box-border flex flex-col items-start justify-start py-[13.5px] pr-4 pl-[31px] min-h-[44px] border-[1px] border-solid border-whitesmoke-300">
                                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
                                            <div className="self-stretch relative">
                                                Cari Program
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[330px] h-[1490px] flex flex-col items-start justify-start pt-0 px-3 pb-[22px] box-border max-w-[1320px] text-sm text-slategray font-noto-sans">
                                <div className="w-[306px] h-[679px] flex flex-col items-center justify-start pt-0 px-0 pb-[38.4px] box-border gap-[43px]">
                                    <div className="w-[306px] flex flex-row items-center justify-start py-2 px-0 box-border text-xl text-darkslategray-300 font-inter">
                                        <div className="w-[89px] flex flex-row items-start justify-start gap-[9px]">
                                            <div className="relative leading-[20px]">
                                                
                                            </div>
                                            <div className="relative leading-[24px] font-medium">
                                                Filters
                                            </div>
                                        </div>
                                        <div className="w-[182px] flex flex-col items-end justify-start py-0 pr-0 pl-[172.4px] box-border min-w-[45.470001220703125px] text-sm text-black">
                                            <div className="flex flex-col items-start justify-start">
                                                <div className="self-stretch flex flex-col items-start justify-start">
                                                    <div className="relative leading-[21px] font-medium">
                                                        CLEAR
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[306px] rounded-3xs bg-white box-border flex flex-col items-start justify-start p-[21px] border-[1px] border-solid border-whitesmoke-300">
                                        <div className="w-[272px] flex flex-col items-start justify-start gap-[10px]">
                                            <div className="self-stretch h-[37px] flex flex-row items-center justify-start text-lg text-gray-1100 font-inter">
                                                <div className="flex flex-col items-start justify-start">
                                                    <b className="relative leading-[21.6px]">
                                                        Kategori
                                                    </b>
                                                </div>
                                                <div className="flex-1 flex flex-col items-end justify-start pt-0 pb-[15px] pr-0 pl-[87.6px] box-border min-w-[14px] text-base text-gray-700 font-font-awesome-5-free">
                                                    <div className="flex flex-col items-start justify-start">
                                                        <div className="relative leading-[16px]">
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-start justify-center">
                                                <div className="flex flex-row items-center justify-start gap-[12px]">
                                                    <div className="w-[15px] relative h-[15px]">
                                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-crimson-100" />
                                                    </div>
                                                    <div className="w-[183px] relative leading-[18px] flex items-center shrink-0">
                                                        Pembelajaran Bahasa
                                                        Inggris
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch h-[47px] flex flex-col items-start justify-center">
                                                <div className="flex flex-row items-center justify-start gap-[12px]">
                                                    <div className="w-[15px] relative h-[15px]">
                                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-crimson-100" />
                                                    </div>
                                                    <div className="w-[199px] relative leading-[18px] flex items-center shrink-0">
                                                        Pengalaman Berbicara
                                                        dengan Penutur Asli
                                                        Bahasa Inggris
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch h-[49px] flex flex-col items-start justify-center">
                                                <div className="flex flex-row items-center justify-start gap-[12px]">
                                                    <div className="w-[15px] relative h-[15px]">
                                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-crimson-100" />
                                                    </div>
                                                    <div className="w-[180px] relative leading-[18px] flex items-center shrink-0">
                                                        Pengalaman Lapangan dan
                                                        Keterampilan Praktis
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-start justify-center">
                                                <div className="flex flex-row items-center justify-start gap-[12px]">
                                                    <div className="w-[15px] relative h-[15px]">
                                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-crimson-100" />
                                                    </div>
                                                    <div className="relative leading-[18px]">
                                                        Proyek Kreatif dan
                                                        Kolaborasi Tim
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-[271px] flex flex-col items-start justify-center">
                                                <div className="flex flex-row items-center justify-start gap-[12px]">
                                                    <div className="w-[15px] relative h-[15px]">
                                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-crimson-100" />
                                                    </div>
                                                    <div className="relative leading-[18px]">
                                                        Pengalaman Berbicara di
                                                        Depan Umum
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-start justify-center">
                                                <div className="flex flex-row items-center justify-start gap-[12px]">
                                                    <div className="w-[15px] relative h-[15px]">
                                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-crimson-100" />
                                                    </div>
                                                    <div className="relative leading-[18px]">
                                                        Sertifikasi Bahasa
                                                        Inggris
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-start justify-center">
                                                <div className="flex flex-row items-center justify-start gap-[12px]">
                                                    <div className="w-[15px] relative h-[15px]">
                                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-crimson-100" />
                                                    </div>
                                                    <div className="relative leading-[18px]">
                                                        Ujian Internasional
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[306px] rounded-3xs bg-white box-border flex flex-col items-start justify-start p-[21px] border-[1px] border-solid border-whitesmoke-300">
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                                            <div className="self-stretch flex flex-row items-center justify-start text-lg text-gray-1100 font-inter">
                                                <div className="flex flex-col items-start justify-start">
                                                    <b className="relative leading-[21.6px]">
                                                        Pengajar
                                                    </b>
                                                </div>
                                                <div className="flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[152.1px] box-border min-w-[14px] text-base text-gray-700 font-font-awesome-5-free">
                                                    <div className="flex flex-col items-start justify-start">
                                                        <div className="relative leading-[16px]">
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-start justify-center">
                                                <div className="flex flex-row items-start justify-start gap-[12px]">
                                                    <div className="w-[15px] relative h-[15px]">
                                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-crimson-100" />
                                                    </div>
                                                    <div className="relative leading-[18px]">
                                                        Keny White (10)
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-start justify-center">
                                                <div className="flex flex-row items-center justify-start gap-[12px]">
                                                    <div className="w-[15px] relative h-[15px]">
                                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-crimson-100" />
                                                    </div>
                                                    <div className="relative leading-[18px]">
                                                        Hinata Hyuga (5)
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-start justify-center">
                                                <div className="flex flex-row items-center justify-start gap-[12px]">
                                                    <div className="w-[15px] relative h-[15px]">
                                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-crimson-100" />
                                                    </div>
                                                    <div className="relative leading-[18px]">
                                                        John Doe (3)
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="self-stretch flex flex-col items-start justify-center">
                                                <div className="flex flex-row items-center justify-start gap-[12px]">
                                                    <div className="w-[15px] relative h-[15px]">
                                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm bg-white box-border border-[1px] border-solid border-crimson-100" />
                                                    </div>
                                                    <div className="relative leading-[18px]">
                                                        Nicole Brown
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
