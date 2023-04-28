import { Link } from "@remix-run/react";

type NavbarLinkProps = {
  children: React.ReactNode;
  url: string;
  current: boolean;
};

const NavbarLink = ({ children, url, current }: NavbarLinkProps) => {
  return (
    <Link
      to={url}
      className={
        current
          ? " mt-1 block rounded-lg border-2 border-blue-200 bg-blue-200 px-2 py-1 text-xs font-semibold text-white hover:bg-blue-200 md:ml-2 lg:text-base"
          : " mt-1 block rounded-lg border-2 border-blue-400 bg-blue-400 px-2 py-1 text-xs font-semibold text-gray-100 transition-all duration-300 hover:scale-110 hover:bg-blue-200 md:ml-2 lg:text-base"
      }
      prefetch="intent"
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
