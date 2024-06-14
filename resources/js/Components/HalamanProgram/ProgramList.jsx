export default function ProgramList(programlist) {
    console.log(programlist);
    return (
        <div className="w-full flex flex-col items-center p-2">
            <div className="w-full flex flex-row items-center justify-between">
                <div className="">
                    <img src="" alt="" />
                </div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </div>
        // <div className="w-[990px] h-[242.5px] flex flex-row items-center justify-center py-0 px-3 box-border max-w-[990px]">
        //     <div className="self-stretch flex-1 rounded-3xs flex flex-row items-start justify-center p-px border-[1px] border-solid border-whitesmoke-300">
        //         <div className="self-stretch flex-1 [backdrop-filter:blur(17px)] rounded-3xs bg-white flex flex-row items-center justify-start p-[13px] border-[1px] border-solid border-whitesmoke-300">
        //             <div className="w-[264px] h-[196px] flex flex-col items-start justify-center py-0 pr-6 pl-0 box-border z-[1]">
        //                 <div
        //                     className="w-60 rounded-3xs h-[196px] overflow-hidden shrink-0 flex flex-col items-start justify-start relative cursor-pointer"
        //                     // onClick={onContainer5Click}
        //                 >
        //                     <div className="flex flex-row items-center justify-center z-[0]">
        //                         <img
        //                             className="w-60 relative rounded-t rounded-b-none h-[196px] overflow-hidden shrink-0 object-cover max-w-[240px]"
        //                             alt=""
        //                             src="/course10jpg@2x.png"
        //                         />
        //                     </div>
        //                     <div className="w-[57%] !m-[0] absolute right-[8.33%] bottom-[20.2px] left-[34.67%] rounded-8xs bg-white hidden flex-col items-start justify-start py-2 px-[15px] box-border z-[1]">
        //                         <div className="self-stretch relative h-6">
        //                             <div className="absolute top-[0px] left-[calc(50%_-_53.4px)] leading-[24px] font-semibold flex items-center justify-center w-[58px] h-6">{`$300 `}</div>
        //                             <div className="absolute top-[5.1px] left-[calc(50%_+_4.3px)] text-sm [text-decoration:line-through] leading-[16.8px] font-semibold text-darkgray-100 flex items-center justify-center w-[49.5px] h-[16.8px]">
        //                                 $99.00
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="flex-1 relative h-[189.5px] z-[0] text-left text-lg text-darkslateblue-300">
        //                 <div className="absolute w-full top-[0px] right-[0px] left-[0px] flex flex-row items-center justify-start">
        //                     <div
        //                         className="w-[154px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border cursor-pointer"
        //                         // onClick={onHeading3marginContainer9Click}
        //                     >
        //                         <div
        //                             className="w-[137px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border cursor-pointer"
        //                             // onClick={onHeading3marginContainer10Click}
        //                         >
        //                             <div className="relative leading-[23.4px] font-medium">
        //                                 Pathfinders 1 Kids
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[162.4px] box-border min-w-[150px] text-center text-base text-darkslateblue-100">
        //                         <div className="w-[150px] flex flex-row items-center justify-between">
        //                             <div className="flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[76.3px] box-border min-w-[150px]">
        //                                 <div className="flex flex-row items-center justify-start">
        //                                     <div className="[backdrop-filter:blur(151.39px)] rounded-[46.92px] box-border flex flex-col items-center justify-center py-[13px] px-[36.4px] min-w-[150px] border-[3px] border-solid border-darkslateblue-100">
        //                                         <div className="relative leading-[24px] font-medium">
        //                                             DETAIL
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="absolute w-full top-[72px] right-[0px] left-[0px] h-[23px] flex flex-row items-center justify-start text-mini text-slategray">
        //                     <div className="flex flex-row items-center justify-start">
        //                         <div className="w-[18px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
        //                             <div className="w-[18px] h-[18px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
        //                                 <img
        //                                     className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
        //                                     alt=""
        //                                     src="/icon01svg.svg"
        //                                 />
        //                             </div>
        //                         </div>
        //                         <div className="flex flex-col items-start justify-start py-0 pr-0 pl-[5px]">
        //                             <div className="relative leading-[22.5px] font-medium">
        //                                 12+ Peserta
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="absolute w-full top-[126px] right-[0px] left-[0px] h-[50px] flex flex-row items-start justify-start text-base">
        //                     <div className="self-stretch flex flex-row items-center justify-start">
        //                         <div className="flex flex-col items-start justify-center py-0 pr-2.5 pl-0">
        //                             <img
        //                                 className="w-[50px] relative rounded-6xl h-[50px] overflow-hidden shrink-0 object-cover max-w-[50px]"
        //                                 alt=""
        //                                 src="/user1jpg@2x.png"
        //                             />
        //                         </div>
        //                         <div className="flex flex-col items-start justify-start gap-[5.6px]">
        //                             <div className="w-[76px] relative h-[21px]">
        //                                 <div className="absolute top-[0%] left-[0%] leading-[19.2px] font-medium">
        //                                     Andreas Y Tumewu S.T
        //                                 </div>
        //                             </div>
        //                             <div className="w-[76px] h-[21px] flex flex-col items-start justify-start text-sm text-slategray">
        //                                 <div className="relative leading-[21px]">
        //                                     Pengajar
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-[518.4px] box-border min-w-[20px]">
        //                         <div className="flex flex-row items-center justify-center py-[13px] px-0">
        //                             <div className="w-5 h-6" />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
