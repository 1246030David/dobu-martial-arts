import mainimage from "~/assets/jpg/mainimage.jpg";
import kidsimage from "~/assets/jpg/kidskarate.jpg";
import Widecard from "~/components/WideCard";
import type { MetaFunction } from "@remix-run/node";
import { Parallax } from "react-scroll-parallax";

export const meta: MetaFunction = () => ({
  title: "Kids @ DoBu",
  description:
    "DoBu Martial Arts instructors are highly qualified in a range of martial arts.  As well as regular classes we also provide personal training and martial arts courses.",
});

export default function Index() {
  return (
    <>
      <main className="">
        <div className="relative pb-16 pt-8">
          <div className="absolute inset-0 overflow-hidden">
            <Parallax speed={-20}>
              <img
                className="h-full w-full object-cover"
                src={mainimage}
                alt="A martial artist silhoueted on an empty beach at sunset"
              />
              <div className="absolute inset-0 bg-neutral-400 mix-blend-multiply" />
            </Parallax>
          </div>

          <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
            <h1 className="text-center font-sans text-4xl tracking-tight ">
              <span className="block text-white drop-shadow-md">
                Kids Classes
              </span>
            </h1>

            <div className=" hidden place-content-evenly pt-10  md:flex ">
              <div className=" text-center text-white md:text-lg lg:text-xl">
                <p className=" ">Jiu Jitsu</p>
                <p>Karate</p>
                <p>Judo</p>
                <p>Muay Thai</p>
                <p className="pt-6">Daily Kids Classes</p>
              </div>
              <div className=" text-center text-white md:text-lg lg:text-xl ">
                <p>Private Tuition</p>
                <p>Group Classes</p>
                <p>Open Mat</p>
                <p className="pt-6">Fully Equiped Gym</p>
                <p>Leisure Facilities</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex ">
          <div className="pb-10 lg:w-1/2">
            <Widecard
              url=""
              headline=""
              bodytext1="Our kids classes cover the same range of Martial Arts as we offer for adults giving kids the chance to sample a range of Arts."
              bodytext2="Kids sessions run between 3pm and 5pm Monday to Friday, perfect for getting them moving after a day at school.  Kids sessions are available for children aged 5 to 15."
              bodytext3="Junior membership allows kids to attend any and all kids classes each week allowing you to maximise the value of a membership."
            ></Widecard>
            <Widecard
              url=""
              headline=""
              bodytext1="Why not work out in the gym or relax in the sauna while the kids work out?"
              bodytext2=""
              bodytext3=""
            ></Widecard>
          </div>
          <img
            className="mx-auto  mt-10 object-center  lg:h-auto lg:w-1/2 lg:object-cover"
            src={kidsimage}
            alt="Four children pose dressed in martial art uniforms"
          />
        </div>
      </main>
    </>
  );
}
