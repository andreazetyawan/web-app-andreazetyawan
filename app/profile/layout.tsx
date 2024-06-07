import type { Metadata } from "next";

import Navbar from "../ui/profile/navbar";
import Footer from "../ui/profile/footer";

export const metadata: Metadata = {
  title: "Andreazetyawan | Profile",
  description: "Tukang Ketik Naskah",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen items-center p-16">
     <Navbar />
        {children}
     <Footer/>
   </main>
  );
}