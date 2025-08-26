"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textAnimate = gsap.timeline({ duration: 2, ease: "power4.Out" });

export default function useHeroAnimation() {
  useEffect(() => {
    textAnimate
      .fromTo(".tagDisclamer", { y: 100, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(
        ".heroTitle",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.75"
      )
      .fromTo(
        ".btnContainer",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, "--sizeBorda": 100 },
        "-=0.95"
      )
      .fromTo(
        ".heroSubtitle",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.55"
      )
      .to(".btnDescription", { y: 0, opacity: 1 }, "-=0.45")
      .to(".btnDiv", { y: 0, opacity: 1 }, "-=0.45")
      .fromTo(
        ".imgDivUm",
        { y: "100px", opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.45"
      );

    // scroll

    gsap.fromTo(
      ".imgDivUm",
      { x: 0 },
      {
        x: -2000,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".imgSection",
          start: "top 80%",
          end: "bottom 0%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".imgDivDois",
      { x: -3000 },
      {
        x: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".imgSection",
          start: "top 80%",
          end: "bottom 0%",
          scrub: true,
        },
      }
    );

    //  Bullets

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".bulletsSection",
        start: "top 30%",
        end: "top top",
        // markers: true,
        scrub: true,
      },
      defaults: { ease: "power4.inOut" },
    });

    tl.fromTo(
      [".heroSection", ".imgSection", ".bulletsSection"],
      {
        background: "#0c1517",
      },
      {
        background: "#f3f0eb",
      }
    )

      .fromTo(
        [".titleBullet", ".bulletItemTitle"],
        { color: "#f3f0eb" },
        {
          color: "#0c1517",
        },
        "<"
      )

      .fromTo(
        [".bulletsTitleDescription", ".bulletItemDescription"],
        { color: "#cfcfcff2" },
        {
          color: "#5a5a5af2",
        },
        "<"
      )

      .fromTo(
        ".bulletIcon",
        { stroke: "#dfe830" },
        {
          stroke: "#474b08",
          scrollTrigger: {
            trigger: ".bulletsSection",
            start: "top 30%",
            end: "bottom 100%",
            scrub: true,
          },
        }
      );

    // === Media Queries ===
    const mm = gsap.matchMedia();
    mm.add("(max-width: 64rem)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".imgDivDois",
          start: "top 80%",
          end: "bottom top",
          // scrub: true,
          onLeave: (self) => self.disable(),
        },
        defaults: { duration: 2, ease: "power4.inOut" },
      });

      tl.fromTo(
        [".heroSection", ".imgSection", ".bulletsSection"],
        {
          background: "#0c1517",
        },
        {
          background: "#f3f0eb",
          duration: 2,
        }
      )

        .fromTo(
          [".titleBullet", ".bulletItemTitle"],
          { color: "#f3f0eb" },
          {
            color: "#0c1517",
          },
          "<"
        )

        .fromTo(
          [".bulletsTitleDescription", ".bulletItemDescription"],
          { color: "#cfcfcff2" },
          {
            color: "#5a5a5af2",
          },
          "<"
        )

        .fromTo(
          ".bulletIcon",
          { stroke: "#dfe830" },
          {
            stroke: "#474b08",
          }
        );
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  //   gsap.fromTo(
  //     ".tagDisclamer",
  //     { y: "100px", opacity: 0 },
  //     { y: 0, opacity: 1, duration: 2, ease: "power4.inOut" }
  //   );
  //   gsap.fromTo(
  //     ".heroTitle",
  //     { y: "100px", opacity: 0 },
  //     { y: 0, opacity: 1, delay: 0.1, duration: 2, ease: "power4.inOut" }
  //   );
  //   gsap.fromTo(
  //     ".heroSubtitle",
  //     { y: "100px", opacity: 0 },
  //     { y: 0, opacity: 1, delay: 0.2, duration: 2, ease: "power4.inOut" }
  //   );

  //   gsap.fromTo(
  //     ".btnContainer",

  //     { y: "100px", opacity: 0 },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       "--sizeBorda": 100,
  //       delay: 0.2,
  //       duration: 2,
  //       ease: "power4.inOut",
  //     }
  //   );
  //   gsap.to(".btnDescription", {
  //     y: 0,
  //     opacity: 1,
  //     delay: 0.1,
  //     duration: 2,
  //     ease: "power4.inOut",
  //   });
  //   gsap.to(".btnDiv", {
  //     y: 0,
  //     opacity: 1,
  //     delay: 0.2,
  //     duration: 2,
  //     ease: "power4.inOut",
  //   });

  //   return () => {
  //     gsap.killTweensOf([
  //       ".btnDiv",
  //       ".btnDescription",
  //       ".btnContainer",
  //       ".heroSubtitle",
  //       ".heroTitle",
  //       ".tagDisclamer",
  //     ]);
  //   };
  // }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".imgDivUm",
  //     { x: 0 },
  //     {
  //       x: -2000,
  //       ease: "power1.out",
  //       scrollTrigger: {
  //         trigger: ".imgSection",

  //         start: "top 80%",
  //         end: "bottom 0%",
  //         scrub: true,
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     ".imgDivDois",
  //     {
  //       x: -3000,
  //     },
  //     {
  //       x: 0,
  //       ease: "power1.out",
  //       scrollTrigger: {
  //         trigger: ".imgSection",
  //         start: "top 80%",
  //         end: "bottom 0%",
  //         scrub: true,
  //       },
  //     }
  //   );
  //   const tl = gsap.timeline({
  //     defaults: { duration: 3, ease: "power4.inOut" },
  //   });
  //   tl.fromTo(
  //     [".imgDivUm", ".imgDivDois"],
  //     { y: 50, opacity: 0 },
  //     { y: 0, opacity: 1 }
  //   );

  //   return () => {
  //     gsap.killTweensOf([".imgDivUm", ".imgDivDois"]);
  //   };
  // });

  // useEffect(() => {
  //   gsap.to([".heroSection", ".imgSection", ".bulletsSection"], {
  //     background: "#f3f0eb",
  //     duration: 2,
  //     scrollTrigger: {
  //       trigger: ".bulletsSection",
  //       start: "top 30%",
  //       // markers: true,
  //       end: "bottom 100%",
  //       scrub: true,
  //     },
  //   });

  //   // -------------------------------------------------------

  //   gsap.fromTo(
  //     [".titleBullet", ".bulletItemTitle"],
  //     { color: "#f3f0eb" },
  //     {
  //       color: "#0c1517",
  //       scrollTrigger: {
  //         trigger: ".bulletsSection",
  //         start: "top 30%",
  //         end: "bottom 100%",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   // -------------------------------------------------------

  //   gsap.fromTo(
  //     [".bulletsTitleDescription", ".bulletItemDescription"],
  //     { color: "#cfcfcff2" },
  //     {
  //       color: "#5a5a5af2",
  //       scrollTrigger: {
  //         trigger: ".bulletsSection",
  //         start: "top 30%",
  //         end: "bottom 100%",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   // -------------------------------------------------------

  //   gsap.fromTo(
  //     ".bulletIcon",
  //     { stroke: "#dfe830" },
  //     {
  //       stroke: "#474b08 ",
  //       scrollTrigger: {
  //         trigger: ".bulletsSection",
  //         start: "top 30%",
  //         end: "bottom 100%",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   const mm = gsap.matchMedia();
  //   mm.add("(width <= 64rem)", () => {
  //     gsap.to([".heroSection", ".imgSection", ".bulletsSection"], {
  //       background: "#f3f0eb",
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: ".imgDivDois",
  //         start: "top 50%",
  //         end: "bottom 60%",
  //         // markers: true,
  //         scrub: true,
  //       },
  //     });
  //     gsap.fromTo(
  //       [".titleBullet", ".bulletItemTitle"],
  //       { color: "#f3f0eb" },
  //       {
  //         color: "#0c1517",
  //         scrollTrigger: {
  //           trigger: ".imgDivDois",
  //           start: "top 50%",
  //           end: "bottom 60%",
  //           scrub: true,
  //         },
  //       }
  //     );
  //     gsap.fromTo(
  //       [".bulletsTitleDescription", ".bulletItemDescription"],
  //       { color: "#cfcfcff2" },
  //       {
  //         color: "#5a5a5af2",
  //         scrollTrigger: {
  //           trigger: ".imgDivDois",
  //           start: "top 50%",
  //           end: "bottom 60%",
  //           scrub: true,
  //         },
  //       }
  //     );
  //     gsap.fromTo(
  //       ".bulletIcon",
  //       { stroke: "#dfe830" },
  //       {
  //         stroke: "#474b08 ",
  //         scrollTrigger: {
  //           trigger: ".imgDivDois",
  //           start: "top 50%",
  //           end: "bottom 60%",
  //           scrub: true,
  //         },
  //       }
  //     );
  //   });

  //   return () => {
  //     gsap.killTweensOf([
  //       ".bulletIcon",
  //       ".bulletsTitleDescription",
  //       ".bulletItemDescription",
  //       ".titleBullet",
  //       ".bulletItemTitle",
  //       ".heroSection",
  //       ".imgSection",
  //       ".bulletsSection",
  //     ]);
  //   };
  //
}
