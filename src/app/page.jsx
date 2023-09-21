import AboutBanner from "@/Components/AboutBanner";
import CardCollection from "@/Components/CardCollection";
import Footer from "@/Components/Footer";
import GetInTouch from "@/Components/GetinTouch";
import Hero from "@/Components/Hero";
import LearnMore from "@/Components/LearnMore";
import Navbar from "@/Components/Navbar";
import Newsletter from "@/Components/Newsletter";
import Topdestination from "@/Components/Topdestination";
import Weprovide from "@/Components/Weprovide";
import Undernewsletter from "@/Components/underNewsletter";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className=" bg-[#0149A5] md:mx-16 mt-8">

      <AboutBanner />
      </div>
      <div id="services" >

      <Weprovide />
      </div>
      <div className=" my-20 mx-10" >
        <CardCollection />
      </div>
      <div className="p-5 md:p-10 bg-gradient-to-t from-[#0148a538] to-white" id="topdestination">
        <Topdestination />
      </div>
      <div className=" px-5 py-10 md:px-14 md:py-16  md:block">
        <Newsletter />
      </div>
      <div className=" px-10 md:px-14 py-10  md:block ">
        <Undernewsletter />
      </div>
      <div className=" mx-8 my-4 md:px-14 md:py-10  md:block">
        <LearnMore />
      </div>
      <div className=" md:px-14 md:py-10 mb-[-50px] md:mb-0 ">
        <GetInTouch />
      </div>
    </main>
  );
}
