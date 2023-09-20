//module imports
import Image from "next/image";
//comp import
import HerosectionImage from "@/Images/herosection.png";
import underline from '@/Images/underline.png'

export default function Hero() {
  return (
    <>
    <div className="hidden md:flex items-center mt-16 px-10 mx-10 flex-wrap md:flex-nowrap justify-center ">
      <section>
        <h1 className="text-[52px] font-light text-[#3D3D3D]">
          Your 
          <span className=" hidden md:inline ">
            <Image src={underline} alt="underline" className="absolute ml-[300px] mt-[-20px]"/>
          </span>
          <span className="text-[#F22D36] font-bold">
            {''} Success Journey
          </span>{' '}
          start with us!
        </h1>
        <p className="text-[#3D3D3D] font-light py-5">We fulfill your dream to study at top universities abroad.</p>
        <button className="bg-[#0149A5] px-3 py-2 rounded text-white mt-5 hover:scale-110 transition ease-in-out duration-300">LEARN MORE</button>
      </section>
      <section>
        <Image src={HerosectionImage} alt="girl holding books"/>
      </section>
    </div>
    <div className="flex items-center mt-16 mx-5 flex-wrap gap-6 justify-center md:hidden ">
      <section className="flex flex-col items-center justify-center ">
        <h1 className="text-[36px] font-light text-[#3D3D3D] text-center ">
          Your <br/>
          <span className=" inline ">
            <Image src={underline} alt="underline" className="absolute ml-[180px] mt-[40px] " width={150} />
          </span>
          <span className="text-[#F22D36] font-bold">
            {''} Success Journey
          </span>{' '}
          start with us!
        </h1>
        <p className="text-[#3D3D3D] text-[16px] font-light py-5 text-center">We fulfill your dream to study at top universities abroad.</p>
        <button className="bg-[#0149A5] px-3 py-2 rounded text-white hover:scale-110 transition ease-in-out duration-300  ">LEARN MORE</button>
      </section>
      <section>
        <Image src={HerosectionImage} alt="girl holding books"/>
      </section>
    </div>
    </>
  );
}
