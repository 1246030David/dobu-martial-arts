import instagramlogo from "~/assets/png/ig.png";

import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";

const DoBuFooter = () => {
  return (
    <div className="mt-20 pt-10">
      <div className="bg-[#D7883F] md:flex md:justify-around">
        <div>
          <div className="flex items-center justify-between px-6 pt-6 pb-2 lg:pt-8">
            <div className="text-xl font-bold text-white lg:pt-8">Social</div>
          </div>

          <div className="ml-6 flex h-12 w-56">
            <div className="transition-all duration-500 hover:scale-110">
              <FacebookShareButton
                url="https:/www.google.com"
                children={<FacebookIcon className="ml-2 h-12 w-12" />}
              />
            </div>

            <div className="transition-all duration-500 hover:scale-110">
              <a href="https://www.instagram.com/dobu/">
                <img
                  className="ml-2 h-12"
                  src={instagramlogo}
                  alt="Facebook logo"
                />
              </a>
            </div>

            <div className="transition-all duration-500 hover:scale-110">
              <TwitterShareButton
                url="https:/www.google.com"
                children={<TwitterIcon className="ml-2 h-12 w-12" />}
              />
            </div>
          </div>
        </div>

        <div className="px-6 pt-8 ">
          <div className="text-xl font-bold text-white lg:pt-8">Contact</div>
          <div className="pt-1 text-white">(01234) 567 8910</div>
          <div className="pt-1 text-white">reception@dobu.online</div>
        </div>

        <div className="px-6 pt-8">
          <div className="text-xl font-bold text-white lg:pt-8">Copyright</div>
          <div className="pt-1 pb-8 text-white">(c) Dobu Watopia Ltd 2023</div>
        </div>
      </div>
    </div>
  );
};

export default DoBuFooter;
