import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Kingsley Udeh</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-md">
            Results-driven Software Engineer with a First-Class Honours degree in Mechatronics Engineering. 
            Specializes in software for mechatronics, bridging hardware and software integration. 
            Skilled in converting Figma designs into responsive, functional websites, web apps, and PWAs. 
            Proficient in performance optimization and creating innovative, scalable solutions to complex challenges.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/kingsley-resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download cv</span>
                  <FiDownload />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 border border-accent rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>

        {/* <Stats /> */}
      </div>
    </section>
  );
}
