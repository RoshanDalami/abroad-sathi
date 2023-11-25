'use client'
//module import
import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";

//images and comp. import
import footerlogo from '@/Images/logo_footer.svg';
import phone from '@/Images/phone_icon.svg';
import mail from '@/Images/mail.svg';
import facebook from '@/Images/facebook.svg';
import instagram from '@/Images/instagram.svg';
import linkedin from '@/Images/linkedin.png';


export default function Footer(){
    const router = useRouter();
  const onTopClick = ()=>{
    router.push('/#topdestination')
  }
  const onAboutClick = ()=>{
    router.push('/about')
  }
  const onServiceClick = ()=>{
    router.push('/#services')
  }
  const onBlogClick = ()=>{
    router.push('/')
  }
  const onContactClick = ()=>{
    router.push('/contact')
  }
    return(
        <div className=" -z-20">

        <div className="bg-[#034AA4] flex flex-col md:flex-row md:items-center justify-center px-8 py-20 gap-14 md:gap-20">
            <section className="flex items-center justify-center">
            <Image src={footerlogo} alt="footer_logo" loading="lazy" />
            </section>


            <section className="md:w-[25%]">
                <p className="text-[16px] text-white">
                Welcome to our educational consultancy, a dedicated organization committed to empowering students and educators. With personalized guidance, expert mentoring, and a comprehensive range of services, we unlock pathways to success, ensuring each individual&apos;s unique talents and ambitions thrive in an ever-changing world. Embrace the power of education and unlock your full potential with us.
                </p>

            </section>


            <section>
            <ul className="flex gap-7 text-white flex-col">
              {[
                ["About us", onAboutClick],
                ["Services", onServiceClick],
                ["Top Destinations", onTopClick],
                ["Contact us", onContactClick],
                ["Blogs", onBlogClick],
              ].map(([title, url]) => (
              
                    <li key={nanoid()} onClick={url} className=" cursor-pointer">{title}</li>
 
               
              ))}
            </ul>
            </section>


            <section className="flex  flex-col gap-7">
                <div className="flex gap-4 items-center">
                    <Image src={phone} alt="phone logo" loading="lazy" />
                    <p className="text-white">(416) 871-3059 </p>
                </div>
                <div className="flex gap-4 items-center">
                    <Image src={mail} alt="mail logo"/>
                    <p className="text-white">abraodsathi@gmail.com</p>
                </div>
                <div className="flex gap-7 items-center">
                    <Image src={facebook} alt="" loading="lazy"/>
                    <Image src={instagram} alt="" loading="lazy"/>
                    <Image src={linkedin} alt="" loading="lazy"/>
                </div>
            </section>
        </div>
        <div className="bg-[#FAD506] h-[40px]">

        </div>
        </div>
    )
}