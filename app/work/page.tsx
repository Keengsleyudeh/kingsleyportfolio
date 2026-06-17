"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Creative ToolBox",
    title: "Project 1",
    description:
      "Unified creative dashboard with AI-powered tools, asset management, and a points-based studio experience.",
    stack: [
      { name: "ReactJs" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind" },
    ],
    image: "/assets/frontend/creativetoolbox.png",
    live: "https://beta.creativetoolbox.ai/app/home",
    github: "",
  },
  {
    num: "02",
    category: "Fashion Weaver",
    title: "Project 2",
    description:
      "AI fashion design platform with asset library, text-to-image generation, and virtual try-on workflows.",
    stack: [
      { name: "ReactJs" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind" },
    ],
    image: "/assets/frontend/fashionweaver.png",
    live: "https://fashion.creativetoolbox.ai/dashboard",
    github: "",
  },
  {
    num: "03",
    category: "Story Teller",
    title: "Project 3",
    description:
      "Story discovery and creation platform with curated narratives, explore feeds, and author-driven content.",
    stack: [
      { name: "ReactJs" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind" },
    ],
    image: "/assets/frontend/storyteller.png",
    live: "https://story.creativetoolbox.ai/home",
    github: "",
  },
  {
    num: "04",
    category: "Haven",
    title: "Project 4",
    description:
      "Elegant interior decor landing page with refined typography, immersive imagery, and collection-focused UX.",
    stack: [
      { name: "Next.js" },
      { name: "ReactJs" },
      { name: "TypeScript" },
      { name: "Tailwind" },
    ],
    image: "/assets/frontend/haven.png",
    live: "https://haven-psi.vercel.app/",
    github: "",
  },
  {
    num: "05",
    category: "RideTEGO",
    title: "Project 5",
    description:
      "Ride-sharing web platform with trip booking, fare estimates, driver/rider flows, and business onboarding.",
    stack: [
      { name: "ReactJs" },
      { name: "JavaScript" },
      { name: "CSS" },
    ],
    image: "/assets/frontend/ridetego.png",
    live: "https://www.ridetego.com/",
    github: "",
  },
  {
    num: "06",
    category: "WESOnline",
    title: "Project 6",
    description:
      "Skills marketplace connecting learners, mentors, institutions, and employers for practical career growth.",
    stack: [
      { name: "Next.js" },
      { name: "ReactJs" },
      { name: "TypeScript" },
      { name: "Tailwind" },
    ],
    image: "/assets/frontend/wesonline.png",
    live: "https://wesonline.ng/",
    github: "",
  },
  {
    num: "07",
    category: "Toucan Aviation",
    title: "Project 7",
    description:
      "Automated jet booking platform with location selection, jet browsing, and integrated payment system.",
    stack: [
      { name: "ReactJs" },
      { name: "SCSS" },
      { name: "Typescript" },
    ],
    image: "/assets/frontend/toucan1.png",
    live: "https://app.toucanaviationcorp.ai/",
    github: "",
  },
  {
    num: "08",
    category: "Fast Pizza",
    title: "Project 8",
    description:
      "Built a responsive app for browsing, ordering, prioritizing pizzas, with geolocation and cart functionality.",
    stack: [{ name:"ReactJs" }, { name: "Tailwind" }, { name: "JavaScript" }],
    image: "/assets/frontend/pizza1.png",
    live: "https://fast-react-pizza-pi-eight.vercel.app/",
    github: "https://github.com/Keengsleyudeh/fast-react-pizza",
  },
  {
    num: "09",
    category: "Loop Studios",
    title: "Project 9",
    description:
      " Designed a responsive, visually appealing landing page showcasing advanced styling and seamless user experience.",
    stack: [
      { name: "HTML" },
      { name: "TailwindCss" },
      { name: "JavaScript" },
    ],
    image: "/assets/frontend/loopstudio1.png",
    live: "https://loopkeengstudios.vercel.app/",
    github: "https://github.com/Keengsleyudeh/loopstudios",
  },

  {
    num: "10",
    category: "Wild Oasis",
    title: "Project 10",
    description:
      " A web app with integrated dashboard for managing a suite's cabin availability, bookings, and tracking guest departure schedules",
    stack: [
      { name: "ReactJS" },
      { name: "Styled Components" },
      { name: "JavaScript" },
      { name: "Supabase" },
    ],
    image: "/assets/frontend/wild2.png",
    live: "https://the-wild-oasis-qpqr.vercel.app/",
    github: "https://github.com/Keengsleyudeh/the-wild-oasis",
  },

  {
    num: "11",
    category: "WorldWise",
    title: "Project 11",
    description:
      " Built a web app for exploring cities, booking destinations, with an interactive world map feature.",
    stack: [
      { name: "ReactJs" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React Leaflet" },
    ],
    image: "/assets/frontend/worldwise2.png",
    live: "https://worldwise-kings.vercel.app/",
    github: "https://github.com/Keengsleyudeh/Worldwise",
  },

  {
    num: "12",
    category: "Shortly",
    title: "Project 12",
    description:
      " Designed an intuitive, responsive interface for shortening long URLs with seamless user experience.",
    stack: [
      { name: "HTML" },
      { name: "TailwindCSS" },
    ],
    image: "/assets/frontend/shortly1.png",
    live: "https://shortly-phi-wheat.vercel.app/",
    github: "https://github.com/Keengsleyudeh/shortly",
  },
];

const Page = () => {
  const [project, setProject] = useState<any>(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 md:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-[30px]">
          <div className="w-full md:w-1/2 md:h-[460px] flex flex-col md:justify-between order-2 md:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 w-full flex-wrap">
                {project.stack.map((item: any, i: number) => (
                  <li key={item.name} className="text-xl text-accent">
                    {item.name}
                    {i !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex gap-4">
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="md:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.num} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center ">
                    <div></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-contain"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] md:bottom-0 z-20 w-full justify-between md:w-max md:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
