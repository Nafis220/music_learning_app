"use client";
import Link from "next/link";
import React from "react";
import { Spotlight } from "./Spotlight";
import { Button } from "./moving-border";
import { TextGenerateEffect } from "./text-generate-effect";
const words = `Step Forword in the World Of Music
`;
const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-0'>
      <Spotlight
        className='-top-40 left-0 md:left-60 md:-top-20'
        fill='yellow'
      />
      <div className='p-4 relative z-10 w-full text-center'>
        <TextGenerateEffect words={words} />

        {/* <h1 className='mt-20 nd:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  '>
          Step forword in the World Of Music
        </h1> */}
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg  mx-auto'>
          Explore our music learning website for a diverse selection of courses
          taught by expert instructors. Enjoy interactive lessons, track your
          progress, and engage with a vibrant community. Start your musical
          journey today and unlock your full potential!
        </p>

        <div className='mt-4'>
          <Link href={"/courses"}>
            {" "}
            <Button
              borderRadius='1.75rem'
              className='bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800'
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
