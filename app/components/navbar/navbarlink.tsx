import { Link } from "@remix-run/react";

type NavbarLinkProps = {
  children: React.ReactNode;
  url: string;
};

const NavbarLink = ({ children, url }: NavbarLinkProps) => {
  return (
    <Link
      to={url}
      className=" mt-1 block rounded-lg border-2 border-blue-400 bg-blue-400 px-2 py-1 text-xs font-semibold text-white hover:bg-blue-200 md:ml-2 lg:text-base"
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
