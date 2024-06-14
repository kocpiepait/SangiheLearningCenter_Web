import { useMemo } from "react";

const Footer = () => {
    return (
        <div className="w-full bg-white h-[401px] flex flex-col items-start justify-start text-left text-lg text-gray-1000 font-inter">
            <div className="self-stretch flex flex-col items-center justify-start pt-[60px] pb-0">
                <div className="w-full h-[250px] flex flex-col items-start justify-start ">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
                        <div className="w-[440px] h-[233px] flex flex-col items-center justify-start pt-0 px-3 pb-[101.9px] box-border ">
                            <div className="w-[420px] h-[233px] flex flex-col items-center justify-center gap-[11px]">
                                <div className="self-stretch flex flex-col items-start justify-center">
                                    <img
                                        className="w-[131px] relative h-20 object-cover"
                                        alt=""
                                        src="/logo/logo01-png-1@2x.png"
                                    />
                                </div>
                                <div className="self-stretch h-[107px] flex flex-col items-start justify-center py-0 px-[15px] box-border">
                                    <div className="w-[141px] h-[102px] overflow-hidden shrink-0 flex flex-row items-start justify-center gap-[20px]">
                                        <img
                                            className="w-[34px] relative h-[34px]"
                                            alt=""
                                            src="/icon_Sosmed/vector.svg"
                                        />
                                        <img
                                            className="w-[34px] relative h-[34px] overflow-hidden shrink-0"
                                            alt=""
                                            src="/icon_Sosmed/instagram.svg"
                                        />
                                        <img
                                            className="w-[34px] relative h-[34px]"
                                            alt=""
                                            src="/icon_Sosmed/vector1.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[220px] h-[238.4px] flex flex-col items-start justify-start pt-0 px-3 pb-[5.4px] box-border max-w-[1320px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                                <div className="self-stretch flex flex-col items-start justify-start">
                                    <b className="self-stretch relative leading-[21.6px] capitalize">
                                        Navigasi
                                    </b>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-sm text-black">
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[21px]">
                                            Tentang
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[21px]">
                                            Program
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[21px]">
                                            Testimoni
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[21px]">
                                            Galeri
                                        </div>
                                    </div>
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[21px]">
                                            Berita
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[220px] h-[238.4px] flex flex-col items-start justify-start pt-0 px-3 pb-[5.4px] box-border ">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                                <div className="self-stretch flex flex-col items-start justify-start">
                                    <b className="self-stretch relative leading-[21.6px] capitalize">
                                        Pendaftaran
                                    </b>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start text-sm text-black">
                                    <div className="self-stretch flex flex-col items-start justify-start">
                                        <div className="self-stretch relative leading-[21px]">
                                            Formulir Pendaftaran
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[440px] h-[238.4px] flex flex-col items-start justify-start py-0 px-3 box-border ">
                            <div className="w-[416px] h-[238px] flex flex-col items-center justify-start pt-0 px-0 pb-[65.6px] box-border gap-[24px]">
                                <div className="w-[416px] flex flex-col items-start justify-start">
                                    <b className="relative leading-[21.6px] capitalize">
                                        Hubungi Kami
                                    </b>
                                </div>
                                <div className="w-[416px] h-[126.4px] flex flex-col items-center justify-start pt-0 px-0 pb-[0.2px] box-border gap-[16px] text-sm text-black">
                                    <div className="w-[416px] flex flex-row items-center justify-start">
                                        <div className="flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border max-w-[428px]">
                                            <div className="overflow-hidden flex flex-col items-start justify-start max-w-[416px]">
                                                <div className="w-6 h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                                    <img
                                                        className="w-6 relative h-6 overflow-hidden shrink-0"
                                                        alt=""
                                                        src="/Vector/icon20svg.svg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-start justify-start">
                                            <div className="w-[390px] relative leading-[21px] flex items-center">
                                                Alamat LKP Sangihe Learning
                                                Center, Tahuna, Kabupaten
                                                Kepulauan Sangihe, Sulawesi
                                                Utara - Indonesia
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[416px] flex flex-row items-start justify-start gap-[15.9px]">
                                        <div className="overflow-hidden flex flex-row items-start justify-start max-w-[416px]">
                                            <div className="w-6 h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                                <img
                                                    className="w-6 relative h-6 overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/Vector/icon19svg.svg"
                                                />
                                            </div>
                                        </div>
                                        <a
                                            className="relative [text-decoration:underline] leading-[21px] text-[inherit]"
                                            href="mailto:Sangihelearningcenter19@gmail.com"
                                            target="_blank"
                                        >
                                            Sangihelearningcenter19@gmail.com
                                        </a>
                                    </div>
                                    <div className="w-[416px] flex flex-row items-start justify-start gap-[12px]">
                                        <div className="overflow-hidden flex flex-row items-start justify-start max-w-[416px]">
                                            <div className="w-6 h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                                                <img
                                                    className="w-6 relative h-6 overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/Vector/icon21svg.svg"
                                                />
                                            </div>
                                        </div>
                                        <div className="relative leading-[21px]">
                                            +62 852-1699-0655
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-stretch bg-darkslateblue-100 h-[91px] flex flex-col items-center justify-start py-0 box-border text-right text-sm text-white">
                <div className="w-full h-[91px] flex flex-col items-start justify-start py-10 px-0 box-border">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
                        <div className="w-[660px] h-[21px] max-w-[1320px]" />
                        <div className="w-[660px] h-[21px] flex flex-col items-start justify-start py-0 px-3 box-border ">
                            <div className="self-stretch flex flex-col items-end justify-start">
                                <div className="self-stretch relative leading-[21px]">
                                    © 2024 Teknologi Informatika. All rights
                                    reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
