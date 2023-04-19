import BlueButtonLink from "../Buttons/BlueButtonLink";

type InfoCard2Props = {
  url: string;
  headline: string;
  bodytext1: string;
  bodytext2: string;
  bodytext3: string;
  headaligncenter: boolean;
};

const InfoCard2 = ({
  url,
  headline,
  bodytext1,
  bodytext2,
  bodytext3,
  headaligncenter,
}: InfoCard2Props) => {
  return (
    <div className="lg:flex lg:w-auto  ">
      <div className="">
        {headaligncenter === true ? (
          <div className=" pt-6 text-center text-2xl font-bold lg:px-6 lg:text-justify lg:text-2xl">
            {headline}
          </div>
        ) : (
          <div className=" px-6 pt-10 text-2xl font-bold lg:px-10 lg:text-2xl ">
            {headline}
          </div>
        )}

        {bodytext1 === "" ? (
          <div></div>
        ) : (
          <div className="px-6 pt-6 text-justify text-sm text-black  md:text-base lg:px-6">
            {bodytext1}
          </div>
        )}

        {bodytext2 === "" ? (
          <div></div>
        ) : (
          <div className="px-6 pt-6 text-justify text-sm text-black md:text-base lg:px-6">
            {bodytext2}
          </div>
        )}

        {bodytext3 === "" ? (
          <div></div>
        ) : (
          <div className="px-20 pt-6 text-justify text-sm text-black md:text-base lg:px-10">
            {bodytext3}
          </div>
        )}

        {url === "" ? (
          <div></div>
        ) : (
          <div className="flex place-content-center pt-6">
            <BlueButtonLink url={url}>Learn more</BlueButtonLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoCard2;
