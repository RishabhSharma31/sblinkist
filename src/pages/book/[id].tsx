import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { books } from "..";
import Image from "next/image";
import Layout from "../../components/Layouts/Layout";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Tabs } from "@mantine/core";

const BookDetail = () => {
  const roter = useRouter();
  const { id } = roter.query;
  const book = books.find((b) => b.id === Number(id));
  const [tab, SetTab] = useState("reading");
  const isReading = tab === "Synopsis";
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleTabChange = (value: string) => {
    SetTab(value);
  };

  if (!book) return <div>Book not found</div>;

  return (
    <Layout>
      <h5 className="text-lg text-gray-600 pt-2 pb-8">
        Get the key ideas from
      </h5>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <h2 className="text-xl lg:text-4xl font-semibold">{book.title}</h2>
          <p className="text-gray-600 text-lg my-6">{book.sub_title}</p>
          <p className="text-gray-600 text-lg mb-3">
            {/* By Erica Keswin */}
          </p>
          <h5 className="text-base text-gray-600 flex items-center gap-x-3">
            <AiOutlineClockCircle size={22} />
            <span>{book.time} Ago</span>
          </h5>
          <div className="flex items-center gap-x-1 md:gap-x-5 mt-14 mb-16">
            <button className="px-4 py-2 rounded-sm border border-gray-400">
              Read Now
            </button>
            <button className="bg-[#2CE080] rounded-sm px-4 py-2">
              Finished Reading
            </button>
            <button className="flex items-center gap-x-2">
              <span>Send to Kindle</span>
              <IoIosArrowDown size={12} />
            </button>
          </div>
          <Tabs
            defaultValue="Synopsis"
            onTabChange={(value: string) => handleTabChange(value)}
            color="teal"
            px={0}
            orientation={width < 500 ? "vertical" : "horizontal"}
          >
            <Tabs.List grow>
              <Tabs.Tab
                sx={{ fontSize: "16px", fontWeight: 600 }}
                value="Synopsis"
              >
                Synopsis
              </Tabs.Tab>
              <Tabs.Tab
                sx={{ fontSize: "16px", fontWeight: 600 }}
                value="Who is it for?"
              >
                Who is it for?
              </Tabs.Tab>
              <Tabs.Tab
                sx={{ fontSize: "16px", fontWeight: 600 }}
                value="About the author"
              >
                About the author
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <p className="pt-3">
          Bring Your Human to Work is a manual for leaders, managers, employees of all ages and across industries, 
          offering ten ways to transform your workplace (and your job search) by applying one simple truth to everything 
          you do: Smart companies honor relationships.
          </p>
        </div>
        <div className="order-1 rounded-md overflow-hidden w-full h-max sm:w-3/4 md:w-3/5 lg:w-full mx-auto">
          <Image
            src={book.image}
            layout="responsive"
            width={284}
            height={282}
            objectFit="cover"
            className="rounded-sm"
          />
        </div>
      </div>
    </Layout>
  );
};

export default BookDetail;
