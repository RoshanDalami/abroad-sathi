'use client'

//module imports
import Image from "next/image";
//images and comp
import ausflag from "@/Images/ausflag.svg";
import usaflag from "@/Images/usaflag.svg";
import canadaflag from "@/Images/canadaflag.svg";
import ukflag from "@/Images/ukflag.svg";
import denmarkflag from "@/Images/denmarkflag.svg";
import underline from "@/Images/underline_two.svg";

export default function Topdestination() {


  return (
    <>
      <main className="hidden md:block">
        <div className="flex flex-col items-center justify-center gap-10 my-10 flex-wrap  ">
          <section>
            <Image
              src={underline}
              alt="underline"
              className="absolute md:ml-[245px] mt-[45px]"
            />
            <h1 className=" text-[32px] md:text-[40px] font-bold  text-[#3D3D3D]">
              TOP DESTINATIONS
            </h1>
          </section>
          <section className="flex items-center justify-center gap-24 flex-wrap ">
            <section>
              <Image src={ausflag} alt="austraila flag" />
              <h1 className="text-[28px] text-center mt-3 font-bold text-[#3D3D3D]">
                AUSTRALIA
              </h1>
            </section>
            <section>
              <Image src={usaflag} alt="United states  flag" />
              <h1 className="text-[28px] text-center mt-3 font-bold text-[#3D3D3D]">
                USA
              </h1>
            </section>
            <section>
              <Image src={canadaflag} alt="Canada flag" />
              <h1 className="text-[28px] text-center mt-3 font-bold text-[#3D3D3D]">
                CANADA
              </h1>
            </section>
            <section>
              <Image src={ukflag} alt="United kingdom flag" />
              <h1 className="text-[28px] text-center mt-3 font-bold text-[#3D3D3D]">
                UK
              </h1>
            </section>
            <section>
              <Image src={denmarkflag} alt="Denmark flag" />
              <h1 className="text-[28px] text-center mt-3 font-bold text-[#3D3D3D]">
                DENMARK
              </h1>
            </section>
          </section>
        </div>
      </main>
      <main className="md:hidden">
        <div className="flex flex-col items-center justify-center gap-10 my-10  ">
         
          <section>
            <Image
              src={underline}
              alt="underline"
              className="absolute ml-[170px] mt-[40px]"
            />
            <h1 className=" text-[32px] font-bold  text-[#3D3D3D]">
              TOP DESTINATIONS
            </h1>
          </section>
          <section className="flex flex-col justify-center items-center gap-5">
            <section>
              <Image src={ausflag} alt="austraila flag"  />
              <h1 className="text-[28px] text-center mt-3 font-bold text-[#3D3D3D]">
                AUSTRALIA
              </h1>
            </section>
            <section>
              <Image src={usaflag} alt="United states  flag"  />
              <h1 className="text-[28px] text-center mt-3 font-bold text-[#3D3D3D]">
                USA
              </h1>
            </section>
            <section>
              <Image src={canadaflag} alt="Canada flag"  />
              <h1 className="text-[28px] text-center mt-3 font-bold text-[#3D3D3D]">
                CANADA
              </h1>
            </section>
            <section>
              <Image src={ukflag} alt="United kingdom flag" />
              <h1 className="text-[28px] text-center mt-3 font-bold text-[#3D3D3D]">
                UK
              </h1>
            </section>
            <section>
              <Image src={denmarkflag} alt="Denmark flag" />
              <h1 className="text-[28px] text-center mt-3 font-bold text-[#3D3D3D]">
                DENMARK
              </h1>
            </section>
         
          </section>
        </div>
      </main>
    </>
  );
}
