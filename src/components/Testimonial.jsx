"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Typography from "./Typography";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts",
    name: "John Smith",
    role: "Senior HR Manager at Zendesk",
  },
  {
    quote:
      "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts",
    name: "John Smith",
    role: "Senior HR Manager at Zendesk",
  },
  {
    quote:
      "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts",
    name: "John Smith",
    role: "Senior HR Manager at Zendesk",
  },
  {
    quote:
      "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts",
    name: "John Smith",
    role: "Senior HR Manager at Zendesk",
  },
  {
    quote:
      "Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts",
    name: "John Smith",
    role: "Senior HR Manager at Zendesk",
  },
];

export default function TestimonialSlider() {
  return (
    <section className="mt-14 pt-3 px-4 w-full flex flex-col items-center">
      <h2 className="text-black font-bold text-center text-3xl md:text-4xl mb-12">
        <Typography>OUR HAPPY CUSTOMERS</Typography>
      </h2>

      <div className="relative max-w-[800px] w-full mx-auto">
        <div className="relative bg-[#f0eeed] rounded-tl-[83px] rounded-br-[83px] px-10 py-8 text-center">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            loop
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="relative"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div>
                  <p className="text-[14px] font-medium text-black leading-6 mb-4">
                    {t.quote}
                  </p>
                  <div>
                    <div className="font-bold text-sm text-black mb-2">
                      {t.name}
                    </div>
                    <div className="text-black text-xs font-light">
                      {t.role}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev Button */}
          <button
            className="testimonial-prev absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[#0050C7] text-white rounded-full flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          {/* Next Button */}
          <button
            className="testimonial-next absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 bg-[#0050C7] text-white rounded-full flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
