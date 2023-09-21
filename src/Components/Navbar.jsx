"use client";
//modules import
import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

//component imports
import Button from "./Button";
import Logo from "@/Images/logo.png";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const onHomeClick = () => {
    router.push("/");
    setTimeout(()=>{

      setIsMobile(false)
    },500)
  };
  const onAboutClick = () => {
    router.push("/about");
    setTimeout(()=>{

      setIsMobile(false)
    },500)
  };
  const onServiceClick = () => {
    router.push("/#services");
    setTimeout(()=>{

      setIsMobile(false)
    },500)
  };
  const onBlogClick = () => {
    router.push("/blogs");
    setTimeout(()=>{

      setIsMobile(false)
    },500)
  };
  const toggle = () => {
    setIsMobile((prevState) => !prevState);
  };
  return (
    <>
      <div>
        <nav className="flex items-center my-3 justify-between px-10">
          <section>
            <Link href={"/"}>
              <Image src={Logo} alt="abroad sathi" height={45} width={45} />
            </Link>
          </section>
          <section className="hidden md:block">
            <ul className="flex gap-7 text-[#0F42AB]">
              {[
                ["HOME", onHomeClick],
                ["ABOUT", onAboutClick],
                ["SERVICES", onServiceClick],
                ["BLOGS", onBlogClick],
              ].map(([title, url]) => (
                <li onClick={url} key={nanoid()} className=" cursor-pointer">
                  {title}
                </li>
              ))}
            </ul>
          </section>
          <section className="hidden md:block">
            <Link href={"/contact"}>
              <Button>CONTACT</Button>
            </Link>
          </section>

          <section className=" block md:hidden" onClick={toggle}>
            {!isMobile ? (
              <RxHamburgerMenu className="text-3xl text-[#F22D36] cursor-pointer font-bold" />
            ) : (
              <RxCross1 className="text-3xl text-[#F22D36] cursor-pointer font-bold " />
            )}
          </section>
        </nav>
        {isMobile ? (
          <div className="flex flex-col gap-4 items-end px-10 justify-center ">
            <ul className="flex flex-col gap-7 text-[#0F42AB]">
              {[
                ["HOME", onHomeClick],
                ["ABOUT", onAboutClick],
                ["SERVICES", onServiceClick],
                ["BLOGS", onBlogClick],
              ].map(([title, url]) => (
                <li onClick={url} key={nanoid()} className=" cursor-pointer">
                  {title}
                </li>
              ))}
            </ul>
            <section className="">
              <Link href={"/contact"}>
                <Button>CONTACT</Button>
              </Link>
            </section>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
