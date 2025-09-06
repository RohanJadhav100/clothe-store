import NewsletterFooterComponent from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";
import TestimonialSlider from "@/components/Testimonial";
import TopSelling from "@/components/TopSelling";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <TopSelling />
      <TestimonialSlider />
      <NewsletterFooterComponent />
    </>
  );
}
