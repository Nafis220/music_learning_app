"use client";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import Instructors from "@/components/ui/Instructors";
import TestimonicalCards from "@/components/ui/TestimonicalCards";
import UpComingwebinars from "@/components/ui/UpComingwebinars";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

export default function Home() {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.02]'>
      <title>World of Music</title>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonicalCards />
      <UpComingwebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
