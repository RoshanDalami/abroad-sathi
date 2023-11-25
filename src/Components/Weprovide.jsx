//module imports
import Image from "next/image";

//comp and image imports
import underlinetwo from '@/Images/underline_two.svg';

export default function Weprovide(){
    return(

    <div className="flex items-center justify-center my-10">
        <section>
            <h1 className=" text-[32px] md:text-[40px] text-[#3D3D3D] font-bold">WE {' '}
            <Image src={underlinetwo} alt="underline" className="absolute ml-[70px] mt-[-15px] md:ml-[105px] md:mt-[-18px]" loading="lazy"/>
            PROVIDE</h1>
        </section>
    </div>
    )
}