import { Link } from "@remix-run/react";

type BlueButtonLinkProps = {
  children: React.ReactNode;
  url: string;
};

const BlueButtonLink = ({ children, url }: BlueButtonLinkProps) => {
  return (
    <Link
      to={url}
      className="mr-4
      rounded
      border-2 border-blue-400 bg-white p-2 text-xs text-blue-500 last-of-type:mr-0  hover:bg-gray-200  md:px-3 md:py-2 lg:text-base"
    >
      {children}
    </Link>
  );
};

export default BlueButtonLink;
