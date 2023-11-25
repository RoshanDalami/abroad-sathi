import booking from "@/Images/booking.png";
import valuation from "@/Images/valuation.png";
import audit from "@/Images/audit.png";
import ca from "@/Images/ca.png";
import docs from "@/Images/docs.png";
import counselling from "@/Images/COUNSELLING.png";
import { nanoid } from "nanoid";
import Card from "./Card";

const DATA = [
  {
    image: booking,
    title: "PTE",
    title2: " DATE BOOKING",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit ut iaculis risus non Ullamcorper. Blandit ut iaculis risus non Ullamcorper.",
    buttonText:'KNOW MORE'
  },
  {
    image: valuation,
    title: "PROPERTY",
    title2: " VALUATION REPORT",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit ut iaculis risus non Ullamcorper. Blandit ut iaculis risus non Ullamcorper.",
      buttonText:'KNOW MORE'
  },
  
  {
    image: audit,
    title: "AUDIT",
    title2: "REPORT",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit ut iaculis risus non Ullamcorper. Blandit ut iaculis risus non Ullamcorper.",
      buttonText:'KNOW MORE'
  },
  {
    image: ca,
    title: "CA",
    title2: "REPORT",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit ut iaculis risus non Ullamcorper. Blandit ut iaculis risus non Ullamcorper.",
      buttonText:'KNOW MORE'
  },
  {
    image: docs,
    title: "ABROAD",
    title2: " STUDIES DOCUMENTS",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit ut iaculis risus non Ullamcorper. Blandit ut iaculis risus non Ullamcorper.",
      buttonText:'KNOW MORE'
  },
  {
    image: counselling,
    title: "COUNSELLING",
    title2: " FROM PROFESSIONALS",
    description:
      "Lorem ipsum dolor sit amet consectetur. Blandit ut iaculis risus non Ullamcorper. Blandit ut iaculis risus non Ullamcorper.",
      buttonText:'BOOK AN APPOINTMENT'
  },
];

export default function CardCollection() {
  return (
    <div className="flex flex-wrap gap-x-7 gap-y-20  justify-center">
      {DATA.map((item) => (
        <Card
          key={nanoid()}
          title={item.title}
          title2={item.title2}
          image={item.image}
          description={item.description}
          buttonText={item.buttonText}
        />
      ))}
    </div>
  );
}
