"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();

    const {userId} = useAuth();
  const routes = [
    { link: "/", label: "Home" },
    { link: "/products", label: "Product" },
    { link: "/menus", label: "Menus" },
  ];

  return (
    <>
      <header className="w-full h-20 border-b border-b-neutral-800 flex items-center justify-between px-8">
        <Link href="/" className="text-3xl font-bold text-neutral-400">
          Logo
        </Link>

        <nav className="flex items-center justify-center gap-8">
          <ul className="flex items-center justify-center gap-8">
            {routes.map((route) => (
              <li key={route.link}>
                <Link className={`${pathname === route.link ? "font-semibold text-neutral-200" : "text-neutral-600"}`} key={route.link} href={route.link} >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>

          {userId ? (<UserButton afterSignOutUrl="/" />) : (<div className="flex items-center justify-center gap-8">
            <Link href={"/sign-in"} className="px-4 py-2 rounded-md border-neutral-600 border">Sign In</Link>
            <Link href={"/sign-up"} className="px-4 py-2 rounded-md bg-neutral-600 ">Sign Up</Link>
            </div>) }
        </nav>
      </header>
    </>
  );
};
