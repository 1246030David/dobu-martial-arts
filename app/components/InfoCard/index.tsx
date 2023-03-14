import BlueButtonLink from "../Buttons/BlueButtonLink";

type InfoCardProps = {
  url: string;
  headline: string;
  bodytext: string;
};

const Infocard = ({ url, headline, bodytext }: InfoCardProps) => {
  return (
    <div className="lg:flex lg:w-1/2  ">
      <div className=" ">
        <div className="pt-20 text-center text-2xl font-bold lg:text-3xl">
          {headline}
        </div>
        <div className="px-20 pt-6 text-justify text-base text-black lg:text-lg">
          {bodytext}
        </div>
        <div className="flex place-content-center pt-6">
          <BlueButtonLink url={url}>Learn more</BlueButtonLink>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
