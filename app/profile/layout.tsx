import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Andreazetyawan | Profile",
  description: "Halaman profile web app andreazetyawan.",
};

const menu = [
  { 
      id: '1', 
      name: 'About Me', 
      href: '/profile/about-me', 
      icon: <Image 
          src='/img/svg/menu-about-me.svg'
          alt='About Me'
          className='dark:invert'
          width={17}
          height={17}
          />
  },
  { 
      id: '2', 
      name: 'Experiences', 
      href: '/profile/experiences',
      icon: <Image 
          src='/img/svg/menu-experiences.svg'
          alt='Experiences'
          className='dark:invert'
          width={17}
          height={17}
          />
  },
  { 
      id: '3', 
      name: 'Projects', 
      href: '/profile/projects',
      icon: <Image 
          src='/img/svg/menu-projects.svg'
          alt='Projects'
          className='dark:invert'
          width={17}
          height={17}
          />
  }
]

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

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen items-center p-0 lg:p-16">
      <nav className="fixed left-0 px-4 top-0 flex w-full justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
                      lg:static lg:w-auto lg:rounded-full lg:border lg:bg-gray-200 lg:p-3 lg:dark:bg-zinc-800/30">
          <Link href={backhome.href}>
              <div className="flex items-center">
                  <span>{backhome.icon}</span>
                  <span className="hidden lg:inline-block lg:ml-2 lg:mr-10">{backhome.name}</span>
              </div>
          </Link>
          <ul className="flex">
              {menu.map((items) => (
                  <li className="ml-4" key={items.name}>
                      <Link href={items.href}>
                          <div className="flex items-center">
                              <span>{items.name}</span>
                              <span className="hidden lg:inline-block lg:ml-2">{items.icon}</span>
                          </div>
                      </Link>
                  </li>
              ))}
          </ul>
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
export default Layout;