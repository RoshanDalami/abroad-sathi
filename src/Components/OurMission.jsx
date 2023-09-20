//module imports 
import Image from "next/image"

//images and comp import

import underline from '@/Images/underline_two.svg'
import arrowone from '@/Images/aboutarrow1.svg'
import arrowtwo from '@/Images/aboutarrow2.svg'

export default function OurMission(){
    return(
        <>
        <main className="hidden md:block">
        <div className="flex items-center py-10 flex-col md:flex-row justify-center " >
            <section className="flex flex-col items-center justify-center">
                <h1 className="text-[40px] text-[#0149A5] font-bold p-20">OUR MISSION: ILLUMINATING MINDS, SHAPING FUTURE</h1>
                <Image src={underline} alt="underline" className="absolute mt-[155px]" />
                
            </section>
            <section className="bg-[#0149A5] p-20 w-[85%]">
                <Image src={arrowone} alt="arrow left" className="absolute mt-[-100px] md:mt-[-100px] md:ml-[-200px] "/>
                <p className="text-white">
                We envision a world where every individual&apos;s educational journey is marked by clarity, purpose, and success. Our consultancy stands as a beacon of knowledge, illuminating the path towards educational excellence. By providing unparalleled guidance and resources, we aim to shape futures that are built on a solid foundation of learning and self-discovery.
                </p>
                <Image src={arrowtwo} alt="arrow right" className="absolute mt-[60px] md:mt-[60px] md:ml-[350px]"/>

            </section>
        </div>
        </main>
        <main className="md:hidden">
        <div className="flex items-center py-5 flex-col md:flex-row justify-center " >
            <section className="flex flex-col items-center">
                <h1 className="text-[32px] text-[#0149A5] font-bold px-10 py-8">OUR MISSION: ILLUMINATING MINDS, SHAPING FUTURE</h1>
                <Image src={underline} alt="underline" className="absolute mt-[210px] mr-[170px] " />
                
            </section>
            <section className="bg-[#0149A5] px-12 py-20 ">
                <Image src={arrowone} alt="arrow left" className="absolute mt-[-100px] ml-[80px] "/>
                <p className="text-white text-center">
                We envision a world where every individual&apos;s educational journey is marked by clarity, purpose, and success. Our consultancy stands as a beacon of knowledge, illuminating the path towards educational excellence. By providing unparalleled guidance and resources, we aim to shape futures that are built on a solid foundation of learning and self-discovery.
                </p>
                <Image src={arrowtwo} alt="arrow right" className="absolute mt-[60px] ml-[-50px] "/>

            </section>
        </div>
        </main>
        </>
    )
}