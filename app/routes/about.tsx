import mainimage from "~/assets/jpg/mainimage.jpg";
import gymimage from "~/assets/jpg/gym.jpg";
import saunaimage from "~/assets/jpg/sauna.jpg";
import instructorsTable from "~/assets/png/Instructors.png";
import specialistTable from "~/assets/png/SpecialistTable.png";
import Widecard from "~/components/WideCard";
import Infocard from "~/components/InfoCard";

export default function About() {
  return (
    <>
      <main className="">
        <div className="relative pb-16 pt-8">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={mainimage}
              alt="A martial artist silhoueted on an empty beach at sunset"
            />
            <div className="absolute inset-0 bg-neutral-400 mix-blend-multiply" />
          </div>

          <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
            <h1 className="text-center font-sans text-4xl tracking-tight ">
              <span className="block text-white drop-shadow-md">
                About DoBo Marshal Arts
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

        <div>
          <div className="md:flex md:justify-around">
            <Widecard
              url=""
              headline="Instructors"
              bodytext1="Our instructors are all highly skilled and qualified practitioners in their chosen Martial Art(s).  Details of all our coaches are shown here."
              bodytext2=""
              bodytext3=""
            ></Widecard>
          </div>

          <div className=" w-full justify-items-center pt-10 md:pt-20">
            <img
              className="mx-auto  h-auto w-auto object-center "
              src={instructorsTable}
              alt="Table showing instructors and what classes they teach at DoBu"
            />
          </div>

          <div className="">
            <Widecard
              url=""
              headline="Prices"
              bodytext1="We have a range of membership options available to suit all requirements, allowing you the flexibility to decide how many sessions and how many different Martial Arts you want to make use each week."
              bodytext2="Try before you buy: For a free trial session contact us today."
              bodytext3=""
            ></Widecard>
          </div>

          <div className="">
            <Widecard
              url=""
              headline="Specialist Courses"
              bodytext1="Why not try out our six week beginners course in self-defence. This course allows you to sample self-defence techniques from across our Martial Arts range. "
              bodytext2="The fitness room is charged on a simple per-use basis allowing you to make use of it flexibly as and when you want."
              bodytext3=""
            ></Widecard>
          </div>

          <div className=" w-full justify-items-center pt-10 md:pt-20">
            <img
              className="mx-auto  h-auto w-auto object-center"
              src={specialistTable}
              alt="Table showing specialist fitness courses and prices"
            />
          </div>
          <p className="font-semi-bold  pt-20 text-center text-4xl">
            Facilities
          </p>

          <div className="flex" id="gym">
            <div className="">
              <Infocard
                url=""
                headline="Gym"
                bodytext1="Our gym is equiped with a range of high quality equipment and free weights and is available throughout the day."
                bodytext2="Our personal trainers can also help you get the most out of the gym facilities."
                bodytext3=""
                headaligncenter={false}
              ></Infocard>
            </div>
            <div className="hidden pt-10 lg:block">
              <img
                className="mx-6 h-auto  w-auto max-w-lg"
                src={gymimage}
                alt="A gym containing free weights"
              />
            </div>
          </div>
          <div className="pt-10">
            <img
              className="h-full w-full   object-cover  object-center lg:hidden"
              src={gymimage}
              alt="A gym containing free weights"
            />
          </div>

          <div className="pt-10">
            <div className="flex">
              <div className="hidden pt-10 lg:block" id="leisure">
                <img
                  className="mx-6  h-auto w-auto max-w-lg  "
                  src={saunaimage}
                  alt="An empty sauna"
                />
              </div>
              <Infocard
                url=""
                headline="Leisure"
                bodytext1="Our leisure facilities include a large Scandanavian sauna, steam room as well as shower and changing facilities."
                bodytext2="Perfect for unwinding after your workout."
                bodytext3="Pay per use charging gives you the flexibility to make use of our facilities whenever you want."
                headaligncenter={false}
              ></Infocard>
            </div>
            <div className="pt-10">
              <img
                className="h-full w-full   object-cover  object-center lg:hidden"
                src={saunaimage}
                alt="An empty sauna"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
