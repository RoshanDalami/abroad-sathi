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
      <AboutBanner />
      <div id="services" >

      <Weprovide />
      </div>
      <div className=" my-20 mx-10" >
        <CardCollection />
      </div>
      <div className="p-10 bg-gradient-to-t from-[#0148a538] to-white" id="topdestination">
        <Topdestination />
      </div>
      <div className="px-14 py-16 hidden md:block">
        <Newsletter />
      </div>
      <div className="px-14 py-10 hidden md:block ">
        <Undernewsletter />
      </div>
      <div className=" px-14 py-10 hidden md:block">
        <LearnMore />
      </div>
      <div className=" px-14 py-10  ">
        <GetInTouch />
      </div>
    </main>
  );
}
