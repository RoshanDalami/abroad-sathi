import Image from "next/image"
import underline from '@/Images/underline_two.svg'


export default function About(){
    return(
        <div className="flex flex-col items-center justify-center px-8 md:px-20 gap-10 py-10 mt-12 ">
            <section>

            <h1 className="font-bold text-[#0149A5] text-[40px]">ABOUT US</h1>
            <Image src={underline} alt="underline" className="absolute ml-[70px] mt-[-13px]" loading="lazy"/>
            </section>
            <p className="text-[#0149A5] text-[20px] text-center  md:px-14 ">
            Welcome to <span className="font-bold">AbraodSathi</span>, where we are dedicated to empowering educational journeys and shaping destinies. As a leading educational consultancy, our mission is to guide students through the intricate maze of academics, helping them make informed decisions that set the stage for lifelong success. Our team of experienced consultants takes pride in offering a holistic approach, considering not only academic pursuits but also individual strengths and aspirations. With a deep well of resources at our disposal, we provide up-to-date information on courses, institutions, scholarships, and career pathways, ensuring that our students are equipped to make the best choices. 
            At <span className="font-bold">AbraodSathi</span>, we believe that education is not just a means to an end, but a transformative experience that molds character and intellect. Join us and let&apos;s embark on this enriching journey together, where potential turns into proficiency and aspirations into achievements.
            </p>
        </div>
    )
}