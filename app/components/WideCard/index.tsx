import BlueButtonLink from "../Buttons/BlueButtonLink";

type WideCardProps = {
  url: string;
  headline: string;
  bodytext1: string;
  bodytext2: string;
  bodytext3: string;
};

const Widecard = ({
  url,
  headline,
  bodytext1,
  bodytext2,
  bodytext3,
}: WideCardProps) => {
  return (
    <div className="pt-10 md:pt-10 lg:w-full">
      <div className=" ">
        {headline === "" ? (
          <div></div>
        ) : (
          <div className="font-semi-bold  text-center text-4xl">{headline}</div>
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

export default Widecard;
