import Link from "next/link";
import Image from "next/image";
import Welcome from "./welcome";

const menu = [
  { 
    id: '1', 
    name: 'Guest Book', 
    href: '/guest-book',
    icon: <Image 
        src='/img/svg/guest-book.svg'
        alt='Profile'
        className='dark:invert ml-2'
        width={17}
        height={17}
        />
  },
  { 
      id: '2', 
      name: 'My Profile', 
      href: '/profile/about-me',
      icon: <Image 
          src='/img/svg/menu-profile.svg'
          alt='Profile'
          className='dark:invert ml-2'
          width={17}
          height={17}
          />
  }
]
const logo = {
  href: '/',
  name: 'Logo', 
  icon: <Image
      src="/img/pic/logo.png"
      alt="Logo Andreazetyawan"
      className="rounded-full mr-20"
      width={30}
      height={30}
      />
}

const footer = {
  copyright: '© 2024 andreazetyawan | andreazetyawan.id',
  place: 'Boyolali, Jawa Tengah, Indonesia'
}

function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-0 lg:p-16">
        <nav className="fixed left-0 px-4 top-0 flex w-full justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
                      lg:static lg:w-auto lg:rounded-full lg:border lg:bg-gray-200 lg:p-3 lg:dark:bg-zinc-800/30">
          <div className="mr-2">
              <Link href={logo.href}>
                  {logo.icon}
              </Link>
          </div>
          <ul className="flex">
              {menu.map((items) => (
                  <li className="mx-2" key={items.name}>
                      <Link href={items.href}>
                          <span className="flex">{items.name} {items.icon}</span>
                      </Link>
                  </li>
              ))}
          </ul>
        </nav>
          <Welcome />
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

export default Home;