"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function CardsAnimation() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".servicesSection",
        start: "top 90%",
        end: "bottom 80%",
        scrub: true,
        markers: true,
      },
    });

    tl.to(".cardDesign", {
      rotate: "30deg",
      delay: "3s",
      start: "top 0%",
      end: "bottom 0%",
    })
      .to(
        ".cardDev",

        {
          y: "0%",
          start: "top 20%",
          end: "bottom 0%",
        }
      )
      .to(
        ".cardOptimization",

        {
          y: "0%",
          start: "top 40%",
          end: "bottom 0%",
        }
      )
      .to(
        ".cardSuport",

        {
          y: "0%",
          start: "top 50%",
          end: "bottom 0%",
        }
      );
  });
}
