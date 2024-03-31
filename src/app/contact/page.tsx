"use client";

import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  const gigdata = [
    {
      key: 1,
      title: "Frontend Web Development",
      description:
        " If you are looking for frontend developer to create responsive website, landing page, and React animation and SSR, this gig can help you",
      gigLink: "https://www.fiverr.com/s/Yrjdvq",
      img: "/courses/Frontend Web Application.jpg",
    },
    {
      key: 2,
      title: "Backend Web Development",
      description:
        " If you are looking for a backend web developer to develop an application using node js, this is where you can get the best services .",
      gigLink: "https://www.fiverr.com/s/jYkp5a",
      img: "/courses/Backend Web Development.jpg",
    },
    {
      key: 3,
      title: "Full Stack Web Development",
      description:
        " If you are looking for a full stack web developer for your web app development using javascript, next js, typescript then look no where else. ",
      gigLink: "https://www.fiverr.com/s/LZ8DxA",
      img: "/courses/Full Stack web Development.jpg",
    },
    {
      key: 4,
      title: "Inventory Management Web Application",
      description:
        "If you are looking for a web based inventory management system or pos system, look nowhere else. ",
      gigLink: "https://www.fiverr.com/s/p16jZY",
      img: "/courses/Inventory Management System.jpg",
    },
  ];
  const words = [
    { text: "Visit", className: "dark:text-gray-500 " },
    { text: "My", className: " dark:text-gray-500" },
    { text: "Fiverr", className: " dark:text-green-500" },
    { text: "GIGs", className: " dark:text-green-500" },
  ];
  return (
    <div className='min-h-screen bg-black py-12 pt-36 flex flex-col items-center justify-centerflex flex-col items-center justify-center'>
      {/* <div className='absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' /> */}
      {/* <Boxes /> */}

      <h1 className='text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white'>
        Want to Develop Such Web Application ?
      </h1>
      <TypewriterEffectSmooth words={words} />
      <div className='flex flex-wrap justify-center items-center'>
        {gigdata.map((gig) => (
          <CardContainer key={gig.key} className='inter-var m-4'>
            <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-neutral-600 dark:text-white'
              >
                {gig.title}
              </CardItem>
              <CardItem
                as='p'
                translateZ='60'
                className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
              >
                {gig.description}
              </CardItem>
              <CardItem translateZ='100' className='w-full mt-4'>
                <Image
                  src={gig.img}
                  height='1000'
                  width='1000'
                  className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                  alt={gig.title}
                />
              </CardItem>
              <div className='flex justify-between items-center mt-20'>
                <CardItem
                  translateZ={20}
                  href={gig.gigLink}
                  as={Link}
                  className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
                >
                  Try now →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default page;
