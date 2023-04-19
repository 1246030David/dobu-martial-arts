import mainimage from "~/assets/jpg/mainimage.jpg";
import Infocard from "~/components/InfoCard";

export default function Index() {
  return (
    <>
      <main className="">
        <div className="relative pb-16 pt-8">
          <div className="absolute inset-0">
            <img
              className=" h-full w-full object-cover"
              src={mainimage}
              alt="A martial artist silhoueted on an empty beach at sunset"
            />
            <div className="absolute inset-0 bg-neutral-400 mix-blend-multiply" />
          </div>
          <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
            <h1 className="text-center font-sans text-4xl tracking-tight ">
              <span className="block text-white drop-shadow-md">
                Learn Marshal Arts at DoBo
              </span>
            </h1>
            <p className="mx-auto mt-6 w-72 text-center text-xl  text-white">
              The first mixed martial arts gym in downtown Watopia
            </p>

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
        <div className=" flex place-content-evenly pt-10  md:hidden ">
          <div className=" text-center md:text-lg lg:text-xl">
            <p className=" ">Jiu Jitsu</p>
            <p>Karate</p>
            <p>Judo</p>
            <p>Muay Thai</p>
            <p className="pt-6">Daily Kids Classes</p>
          </div>
          <div className=" text-center md:text-lg lg:text-xl ">
            <p>Private Tuition</p>
            <p>Group Classes</p>
            <p>Open Mat</p>
            <p className="pt-6">Fully Equiped Gym</p>
            <p>Leisure Facilities</p>
          </div>
        </div>

        <div className="font-semi-bold invisible text-center text-4xl  md:visible  md:pt-20">
          Facilities and Services
        </div>

        <div className="md:flex md:justify-around">
          <div className="pt-10">
            <Infocard
              url="/disciplines"
              headline="Marshal arts classes"
              bodytext1="Our highly qualified martial arts instructors deliver classes in a
            wide range of marshal arts, why not try something new?"
              bodytext2=""
              bodytext3=""
              headaligncenter={true}
            ></Infocard>
          </div>

          <div className="pt-10">
            <Infocard
              url="/kids"
              headline="Junior classes"
              bodytext1="The kids aren’t left out, daily after-school classes for children aged 5-15 covering all of the same disciplines available to adults."
              bodytext2=""
              bodytext3=""
              headaligncenter={true}
            ></Infocard>
          </div>
        </div>
        <div className="md:flex md:justify-around">
          <div className="pt-10">
            <Infocard
              url="/about#leisure"
              headline="Leisure facilities"
              bodytext1="As well as our gym and martial art facilities we also offer a sauna, steam room, shower and modern changing facilities allowing you to unwind after a hard workout."
              bodytext2=""
              bodytext3=""
              headaligncenter={true}
            ></Infocard>
          </div>

          <div className="pt-10">
            <Infocard
              url="/about#gym"
              headline="Well equipped gym"
              bodytext1="Our gym is equiped with a range of high quality equipment and free weights and is available throughout the day.
            Our personal trainers can also help you get the most out of the gym facilities."
              bodytext2=""
              bodytext3=""
              headaligncenter={true}
            ></Infocard>
          </div>
        </div>
      </main>
    </>
  );
}
