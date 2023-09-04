import AboutBanner from "@/Components/AboutBanner";
import CardCollection from "@/Components/CardCollection";
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
      <Navbar />
      <Hero />
      <AboutBanner />
      <Weprovide />
      <div className=" my-20 mx-10">
        <CardCollection />
      </div>
      <div className="p-10 bg-gradient-to-t from-[#0148a538] to-white">
        <Topdestination />
      </div>
      <div className="px-14 py-16">
        <Newsletter />
      </div>
      <div className="px-14 py-10">
        <Undernewsletter />
      </div>
      <div className=" px-14 py-10">
        <LearnMore />
      </div>
    </main>
  );
}
