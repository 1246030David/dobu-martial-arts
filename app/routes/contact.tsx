import mainimage from "~/assets/jpg/mainimage.jpg";
import BlueButtonLink from "~/components/Buttons/BlueButtonLink";
import maplarge from "~/assets/jpg/maplarge.jpg";
import mapmobile from "~/assets/jpg/mapmobile.jpg";

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
            <h1 className="text-center font-sans text-3xl tracking-tight md:text-4xl">
              <span className="block text-white drop-shadow-md">
                DoBu Marshal Arts is located on Ocean Boulevard in Watopia
              </span>
            </h1>

            <div className=" hidden place-content-evenly pt-10  md:flex ">
              <div className="md:text-md w-60 text-center text-white lg:w-96 lg:text-lg">
                <p className="pt-10 ">
                  We are open daily from 6am to 9pm and from 8am to 5pm on
                  weekends.
                </p>
                <p className="pt-10 ">
                  Why not give us a call or drop in to speak to a member of the
                  team?
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative inset-0">
          <div className="block  text-center md:hidden">
            <p className="px-20 pt-10">
              We are open daily from 6am to 9pm and from 8am to 5pm on weekends.
            </p>
            <p className="px-20 pt-10">
              Why not give us a call or drop in to speak to a member of the
              team?
            </p>
          </div>

          <div className="pt-20  text-center text-2xl font-bold ">Contact</div>

          <div className="block w-full justify-items-center text-center md:flex md:justify-around">
            <div className="px-20 pt-6  text-base text-black lg:text-lg">
              <p>23 Ocean Boulevard</p>
              <p>Mayfield</p>
              <p>Watopia</p>
              <p>WA13 6YM</p>
            </div>

            <div className="px-20 pt-6  text-base text-black lg:text-lg">
              <p>Phone: 01234 567 8910</p>
              <p>Email: reception@dobu.online</p>
            </div>
          </div>
          <div className="  relative inset-0 block pt-10  text-center ">
            <BlueButtonLink url="/#">
              Click here to send us a message
            </BlueButtonLink>
          </div>

          <div>
            <img
              className="block h-full w-full object-cover pt-20 md:hidden "
              src={mapmobile}
              alt="DoBu martial arts location shown on a map"
            />
            <img
              className="hidden h-full w-full object-cover pt-20 md:block"
              src={maplarge}
              alt="DoBu martial arts location shown on a map"
            />
          </div>
        </div>
      </main>
    </>
  );
}
