"use client";
//modules import
import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { NavLink } from "./NavLink";

//component imports
import Button from "./Button";
import Logo from "@/Images/logo.png";
import { useState, useLayoutEffect } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();
  const onHomeClick = () => {
    setTimeout(() => {
      setIsMobile(false);
    }, 500);
  };
  const onAboutClick = () => {
    setTimeout(() => {
      setIsMobile(false);
    }, 500);
  };
  const onServiceClick = () => {
    setTimeout(() => {
      setIsMobile(false);
    }, 500);
  };
  const onBlogClick = () => {
    setTimeout(() => {
      setIsMobile(false);
    }, 500);
  };
  const toggle = () => {
    setIsMobile((prevState) => !prevState);
  };

  const navigation = [
    { name: "HOME", href: "/", onClick: onHomeClick },
    { name: "ABOUT", href: "/about", onClick: onAboutClick },
    { name: "SERVICES", href: "/#services ", onClick: onServiceClick },
    { name: "BLOGS", href: "/blogs", onClick: onBlogClick },
  ];
  return (
    <>
      <div className="sticky top-2 z-50 ">
        <nav className="flex items-center my-3 justify-between px-10 ">
          <section>
            <Link href={"/"}>
              <Image src={Logo} alt="abroad sathi" height={45} width={45} />
            </Link>
          </section>
          <section className="hidden md:block">
            <ul className="flex gap-7 text-[#0F42AB]">
              {navigation.map((item) => (
                <Link href={item.href} key={nanoid()}>
                  <li
                    className={clsx(" cursor-pointer", {
                      "text-red-600": item.href === pathname,
                    })}
                  >
                    {item.name}
                  </li>
                </Link>
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
              {navigation.map((item) => (
                <Link href={item.href} key={nanoid()}>
                  <li
                    className={clsx(" cursor-pointer", {
                      "text-red-600": item.href === pathname,
                    })}
                    onClick={item.onClick}
                  >
                    {item.name}
                  </li>
                </Link>
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
