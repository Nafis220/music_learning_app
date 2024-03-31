"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "./sticky-scroll-reveal";
const content = [
  {
    title: "Discover Your Musical Potential",
    description:
      "Our music school web application offers a gateway to unlocking your talents. Explore a range of instruments, genres, and theory courses led by skilled instructors. Start your journey to musical mastery today!",
  },
  {
    title: "Interactive Learning Experience",
    description:
      "Immerse yourself in an engaging learning environment with our web application. Access interactive lessons, practice tools, and real-time feedback to enhance your skills. Whether you're a beginner or seasoned musician, there's something for everyone.",
  },
  {
    title: "Connect with a Vibrant Community",
    description:
      "Join a thriving community of music lovers and learners. Engage in discussions, share experiences, and collaborate on projects with like-minded individuals. Build meaningful connections while pursuing your passion for music.",
  },
  {
    title: "Personalized Progress Tracking",
    description:
      "Monitor your progress and achievements with ease. Our web application provides detailed insights, performance assessments, and milestone tracking to keep you motivated and on track. Take control of your musical journey and see your skills flourish!",
  },
];
const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
};

export default WhyChooseUs;
