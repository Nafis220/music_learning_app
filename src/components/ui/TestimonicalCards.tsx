"use client";
import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
const testimonials = [
  {
    quote:
      "The interactive learning experience on this platform has truly transformed my musical journey. I've gained confidence and skills I never thought possible!",
    name: "Sarah Johnson",
    title: "Aspiring Pianist",
  },
  {
    quote:
      "Connecting with fellow musicians through this community has been invaluable. The support and encouragement I've received here are unmatched!",
    name: "David Lee",
    title: "Guitar Enthusiast",
  },
  {
    quote:
      "I've tried other online music courses, but none compare to the personalized progress tracking and feedback I've received here. It's helped me stay motivated and focused on my goals.",
    name: "Michael Rodriguez",
    title: "working Musician",
  },
  {
    quote:
      "As a busy professional, the flexibility of this platform is a game-changer. I can access lessons anytime, anywhere, and tailor my learning experience to fit my schedule",
    name: "Emily Chen",
    title: "Vocalist and Songwriter",
  },
];
const TestimonicalCards = () => {
  return (
    <div className='h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] realtive flex flex-col items-center justify-center overflow-hidden'>
      <h2 className='text-3xl font-bold text-center mt-8 z-10'>
        {" "}
        Testimonials of Our Success
      </h2>
      <div className='h-[40rem] rounded-md flex flex-col antialiased   dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </div>
    </div>
  );
};

export default TestimonicalCards;
