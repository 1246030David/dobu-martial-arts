import BlueButtonLink from "../Buttons/BlueButtonLink";

type InfoCardProps = {
  url: string;
  headline: string;
  bodytext1: string;
  bodytext2: string;
  bodytext3: string;
  headaligncenter: boolean;
};

const Infocard = ({
  url,
  headline,
  bodytext1,
  bodytext2,
  bodytext3,
  headaligncenter,
}: InfoCardProps) => {
  return (
    <div className="lg:flex lg:w-auto  ">
      <div className="">
        {headaligncenter === true ? (
          <div className=" pt-10 text-center text-2xl font-bold lg:text-3xl">
            {headline}
          </div>
        ) : (
          <div className=" px-20 pt-10 text-2xl font-bold lg:text-3xl">
            {headline}
          </div>
        )}

        {bodytext1 === "" ? (
          <div></div>
        ) : (
          <div className="px-20 pt-6 text-justify text-base text-black lg:text-lg">
            {bodytext1}
          </div>
        )}

        {bodytext2 === "" ? (
          <div></div>
        ) : (
          <div className="px-20 pt-6 text-justify text-base text-black lg:text-lg">
            {bodytext2}
          </div>
        )}

        {bodytext3 === "" ? (
          <div></div>
        ) : (
          <div className="px-20 pt-6 text-justify text-base text-black lg:text-lg">
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

export default Infocard;
