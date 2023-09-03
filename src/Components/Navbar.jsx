//modules import
import Image from "next/image";
import Link from "next/link";
import { nanoid } from "nanoid";

//component imports
import Button from "./Button";
import Logo from "@/Images/logo.png";

export default function Navbar() {
  return (
    <>
      <div>
        <nav className="flex items-center my-3 justify-between">
          <section>
            <Image src={Logo} alt="abroad sathi" height={45} width={45} />
          </section>
          <section className="">
            <ul className="flex gap-7 text-[#0F42AB]">
              {[
                ["HOME", "/"],
                ["ABOUT", "/about"],
                ["SERVICES", "/services"],
                ["BLOGS", "/blogs"],
              ].map(([title, url]) => (
                <Link href={url} key={nanoid()} >
                    <li>{title}</li>

                </Link>
              ))}
            </ul>
          </section>
          <section>
            <Button color={"bg-['#F22D36']"}>CONTACT</Button>
          </section>
        </nav>
      </div>
    </>
  );
}
