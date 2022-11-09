import Link from "next/link";
import React from "react";
import { Section } from "./Layouts/Layout";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-blue-50 mt-20">
      <Section>
        <div className="grid md:grid-cols-5 lg:gap-x-8 py-20">
          <div className="md:col-span-2 mb-10 md:mb-0">
            <Link href={"/"}>
              <Image src={"/images/logo.svg"} width={120} height={60} />
            </Link>
            <h4 className="text-xl text-teal-500 font-semibold">
              Big ideas in small packages Start learnign now
            </h4>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 sm:flex justify-between">
            {footerItems.map((item) => (
              <div key={item.id} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                {item.items.map((link, i) => (
                  <Link href={link.link} key={i} className="mb-2 block">
                    <a className="mb-2 block">{link.title}</a>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="text-lg pb-5 text-gray-500">
          © Blinkist 2021 Sitemap | Imprint | Terms of Service | Privacy
          Policies
        </p>
      </Section>
    </div>
  );
};

export default Footer;

const footerItems = [
  {
    id: 1,
    title: "Editorial",
    items: [
      {
        title: "Book lists",
        link: "/",
      },
      {
        title: "What is Nonfiction?",
        link: "/",
      },
      {
        title: "What to read next?",
        link: "/",
      },
      {
        title: "Benefits of reading",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Useful links",
    items: [
      {
        title: "Pricing",
        link: "/",
      },
      {
        title: "Blinkist business",
        link: "/",
      },
      {
        title: "Gift cards",
        link: "/",
      },
      {
        title: "Blinkist magaine",
        link: "/",
      },
      {
        title: "Contact & help",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    title: "Company",
    items: [
      {
        title: "About",
        link: "/",
      },
      {
        title: "Careers",
        link: "/",
      },
      {
        title: "partners",
        link: "/",
      },
      {
        title: "Code of Conduct",
        link: "/",
      },
    ],
  },
];
