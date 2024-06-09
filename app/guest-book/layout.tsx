import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Andreazetyawan | Guest Book",
  description: "Halaman guest book web app andreazetyawan.",
};

const backhome = {
  href: '/',
  name: 'Back Home', 
  icon: <Image 
      src="/img/svg/menu-back-home.svg"
      alt="Back Home"
      className="dark:invert"
      width={20}
      height={20}
      />
}

const footer = {
  copyright: '© 2024 andreazetyawan | andreazetyawan.id',
  place: 'Boyolali, Jawa Tengah, Indonesia'
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen items-center p-0 lg:p-16">
      <nav className="fixed left-0 px-4 top-0 flex w-full justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
                      lg:static lg:w-auto lg:rounded-full lg:border lg:bg-gray-200 lg:p-3 lg:dark:bg-zinc-800/30">
          <Link href={backhome.href}>
              <div className="flex items-center">
                  <span>{backhome.icon}</span>
                  <span className="hidden lg:inline-block lg:mx-2">{backhome.name}</span>
              </div>
          </Link>
      </nav>
        {children}
      <div className="my-10 text-sm opacity-50 text-center static">
        <p>
          {footer.copyright}
        </p>
        <p>
          {footer.place}
        </p>
      </div>
   </main>
  );
}