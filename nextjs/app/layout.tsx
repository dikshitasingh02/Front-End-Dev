import "./globals.css";
import { Header } from "@/components/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;