//module Import
import Image from 'next/image'

//images and comp imports
import underlinetwo from '@/Images/underline_two.svg'




export default function AboutBanner(){
    return(
        <div className="  mx-10 mb-10 py-10  md:p-16 flex gap-4 flex-col ">
            <section className="">
            <Image src={underlinetwo} alt='underline' className='absolute ml-[550px] mt-[42px] hidden md:inline  ' loading='lazy' />
            <h1 className="text-center text-[32px] md:text-[40px] font-semibold text-white"  >

            ABOUT US
            </h1>
            </section>
            <section className='w-full'>

            <p className=" text-[16px] md:text-[20px] text-white text-sm text-center ">
            Welcome to our educational consultancy, a dedicated organization committed to empowering students and educators. With personalized guidance, expert mentoring, and a comprehensive range of services, we unlock pathways to success, ensuring each individual&apos;s unique talents and ambitions thrive in an ever-changing world. Embrace the power of education and unlock your full potential with us.
            </p>
            </section>
        </div>
    )
}