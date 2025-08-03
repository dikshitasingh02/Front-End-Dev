"use client";

import { usePathname } from "next/navigation";
import { Header } from "./header";

const authRoutes = ["/sign-in", "/sign-up"];

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Hide header if path starts with any auth route
  const shouldHideHeader = authRoutes.some(route => pathname.startsWith(route));

  return (
    <>
      {!shouldHideHeader && <Header />}
      <main className="p-6">{children}</main>
    </>
  );
};
