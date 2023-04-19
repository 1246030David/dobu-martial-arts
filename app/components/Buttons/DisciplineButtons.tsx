import { Link } from "@remix-run/react";

type DisciplineButtonsProps = {
  children: React.ReactNode;
  url: string;
};

const DisciplineButtons = ({ children, url }: DisciplineButtonsProps) => {
  return (
    <Link
      to={url}
      className="mx-4 mt-12 items-center px-1 py-1 text-base  font-bold hover:bg-gray-200"
    >
      {children}
    </Link>
  );
};

export default DisciplineButtons;
