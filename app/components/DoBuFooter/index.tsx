import facebooklogo from "~/assets/png/fb.png";
import instagramlogo from "~/assets/png/ig.png";
import twitterlogo from "~/assets/png/tw.png";

import {
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, PinterestIcon } from "react-share";

const DoBuFooter = () => {
  return (
    <div className="pt-20">
      <div className="bg-[#D7883F] md:flex md:justify-around">
        <div>
          <div className="flex items-center justify-between px-6 pt-6 pb-2 lg:pt-8">
            <div className="text-xl font-bold text-white lg:pt-8">Social</div>
          </div>

          <div className="ml-6 flex w-56 bg-white">
            <img className="h-10 pl-6" src={facebooklogo} alt="Facebook logo" />
            <img
              className="h-10 pl-6"
              src={instagramlogo}
              alt="Facebook logo"
            />
            <img className="h-10 pl-6" src={twitterlogo} alt="Facebook logo" />
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
      <div>
        <FacebookShareButton
          url="https:/www.google.com"
          children={<FacebookIcon className="h-12 w-12" />}
        />
        <TwitterShareButton
          url="https:/www.google.com"
          children={<TwitterIcon className="h-12 w-12" />}
        />
        <PinterestShareButton
          url="https:/www.google.com"
          children={<PinterestIcon className="h-12 w-12" />}
          media="https://static.wixstatic.com/media/6c1c38_256c8e61f00045e68ccc386a82e51bea~mv2.jpg/v1/fit/w_2500,h_1330,al_c/6c1c38_256c8e61f00045e68ccc386a82e51bea~mv2.jpg"
        />
      </div>
    </div>
  );
};

export default DoBuFooter;
