import mainimage from "~/assets/jpg/mainimage.jpg";
import InfoCard2 from "~/components/InfoCard2";
import jiujitsuimage from "~/assets/jpg/jiujitsu.jpg";
import karateimage from "~/assets/jpg/karate.jpg";
import judoimage from "~/assets/jpg/judo.jpg";
import muayimage from "~/assets/jpg/muay.jpg";
import { useState } from "react";

export default function Index() {
  const martialArts = [
    {
      src: jiujitsuimage,
      alttext:
        "Two male Jujitsuka grapple, with a Jujitsuk dressed in a white Gi pinning down the Jujitsuk in blue.",
      matype: "Jiu Jitsu",
      text1:
        "Known as jiu-jitsu and ju-jitsu, this is a family of Japanese martial arts and a system of close combat that can be used in a defensive or offensive manner to kill or subdue one or more weaponless or armed and armored opponents.",
      text2:
        "Jiu-jitsu dates back to the 1530s and was coined by Hisamori Tenenouchi when he officially established the first jiu-jitsu school in Japan. This form of martial arts uses few or no weapons at all and includes strikes, throws, holds, and paralyzing attacks against the enemy.",
    },
    {
      src: karateimage,
      matype: "Karate",
      alttext:
        "A female karateka dressed in a white Gi is seen in mid-air completing a flying kick and punch",
      text1:
        "Karate is a martial art that originated in Okinawa, Japan, and has gained popularity worldwide. It is a system of self-defense that emphasizes striking techniques, such as punches, kicks, knees, and elbow strikes.",
      text2:
        "Karate also includes blocking, grappling, and throwing techniques, as well as forms, or kata, which are prearranged movements that simulate combat situations.",
    },
    {
      src: judoimage,
      matype: "Judo",
      alttext: "A kneeling Judoka holds a competitor on his shoulders",
      text1:
        "Judo is a martial art that originated in Japan and has become a popular sport worldwide. It is a grappling-based martial art that focuses on throws, pins, and joint locks to subdue opponents. ",
      text2:
        "Judo techniques involve using an opponent's strength and momentum against them, making it a suitable martial art for people of all sizes and strengths.",
    },
    {
      src: muayimage,
      alttext:
        "A male martial artist wearing a white headband is seen head-on in a kneeling position",
      matype: "Muay Thai",
      text1:
        "Muay Thai, also known as Thai boxing, is a martial art that originated in Thailand and has gained popularity worldwide. It is a striking-based martial art that emphasizes the use of punches, kicks, elbows, and knee strikes. ",
      text2:
        "Muay Thai also includes clinching techniques, such as holding an opponent in a tight grip and delivering knees and elbow strikes.",
    },
  ];

  const [maNumber, changeMA] = useState(0);

  const selectIncrease = () => {
    maNumber - 1 < 0
      ? changeMA(martialArts.length - 1)
      : changeMA(maNumber - 1);
  };

  const selectDecrease = () => {
    maNumber + 1 > martialArts.length - 1
      ? changeMA(0)
      : changeMA(maNumber + 1);
  };

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
            <h1 className="text-center font-sans text-4xl tracking-tight md:hidden ">
              <span className="block text-white drop-shadow-md">
                Our Marshal Arts
              </span>
            </h1>
            <h1 className="hidden text-center font-sans text-4xl tracking-tight md:block">
              <span className="block text-white drop-shadow-md">
                Our Marshal Art disciplines
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

        <div className="pl-6 pt-20  lg:flex">
          <div className="hidden  lg:flex  lg:flex-col ">
            <button
              className={
                martialArts[maNumber].matype === martialArts[0].matype
                  ? "mx-4 mt-12 items-center bg-blue-300 px-1 py-1 text-base  font-bold "
                  : "mx-4 mt-12 items-center px-1 py-1  text-base font-bold hover:bg-gray-200"
              }
              onClick={() => changeMA(0)}
            >
              {martialArts[0].matype}
            </button>
            <button
              className={
                martialArts[maNumber].matype === martialArts[1].matype
                  ? "mx-4 mt-12 items-center bg-blue-300 px-1 py-1 text-base  font-bold "
                  : "mx-4 mt-12 items-center px-1 py-1  text-base font-bold hover:bg-gray-200"
              }
              onClick={() => changeMA(1)}
            >
              {martialArts[1].matype}
            </button>
            <button
              className={
                martialArts[maNumber].matype === martialArts[2].matype
                  ? "mx-4 mt-12 items-center bg-blue-300 px-1 py-1 text-base  font-bold "
                  : "mx-4 mt-12 items-center px-1 py-1  text-base font-bold hover:bg-gray-200"
              }
              onClick={() => changeMA(2)}
            >
              {martialArts[2].matype}
            </button>
            <button
              className={
                martialArts[maNumber].matype === martialArts[3].matype
                  ? "mx-4 mt-12 items-center bg-blue-300 px-1 py-1 text-base  font-bold "
                  : "mx-4 mt-12 items-center px-1 py-1  text-base font-bold hover:bg-gray-200"
              }
              onClick={() => changeMA(3)}
            >
              {martialArts[3].matype}
            </button>
          </div>
          <div className="4 h-96 md:h-64 lg:h-auto lg:max-w-lg">
            <InfoCard2
              url=""
              headline={martialArts[maNumber].matype}
              bodytext1={martialArts[maNumber].text1}
              bodytext2={martialArts[maNumber].text2}
              bodytext3=""
              headaligncenter={true}
            ></InfoCard2>
          </div>
          <div className=" relative  pt-12  pb-32 lg:pt-20">
            <div className="">
              <div className="absolute inset-0">
                <img
                  className="mb-10 h-auto  w-full lg:w-auto lg:max-w-xl lg:object-center lg:px-4"
                  src={martialArts[maNumber].src}
                  alt={martialArts[maNumber].alttext}
                />
              </div>
              <div className="relative flex justify-between ">
                <button
                  className="h-0 w-0 border-t-[20px] border-r-[25px] border-b-[20px] border-t-transparent border-r-indigo-400 border-b-transparent pl-6 hover:border-r-indigo-800 lg:hidden"
                  onClick={selectIncrease}
                ></button>
                <button
                  className="h-0 w-0 border-t-[20px] border-l-[25px] border-b-[20px] border-t-transparent border-l-indigo-400 border-b-transparent pr-6 hover:border-l-indigo-800 lg:hidden"
                  onClick={selectDecrease}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
