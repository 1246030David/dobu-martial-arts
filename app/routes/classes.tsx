import mainimage from "~/assets/jpg/mainimage.jpg";
import timetable from "~/assets/png/timetable.png";

export default function Index() {
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
                Class Timetable
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

        <div className="font-semi-bold  pb-20 pt-10  text-center text-lg  md:text-2xl">
          Click on the disciplines below for more information
        </div>

        <div>
          <img
            className="h-full w-full object-cover px-4"
            src={timetable}
            alt="DoBu Marshal Arts Class timetable"
          />
        </div>
      </main>
    </>
  );
}
