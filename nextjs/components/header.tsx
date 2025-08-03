"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
    const pathname = usePathname();
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

        <nav>
          <ul className="flex items-center justify-center gap-8">
            {routes.map((route) => (
              <li key={route.link}>
                <Link className={`${pathname === route.link ? "font-semibold text-neutral-200" : "text-neutral-600"}`} key={route.link} href={route.link} >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
