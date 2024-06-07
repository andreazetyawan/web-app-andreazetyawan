import Link from "next/link";
import Image from "next/image";
import MenuHome from "../lib/menuhome";

const menuhome = MenuHome;

const logo = {
    href: '/',
    name: 'Logo', 
    icon: <Image
        src="/img/pic/logo.png"
        alt="Logo Andreazetyawan"
        className="rounded-full mr-20"
        width={30}
        height={30}
        priority
        />
}

export default function Navigation() {
   return (
    <nav className="fixed left-0 px-4 top-0 flex w-full justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
                    lg:static lg:w-auto lg:rounded-md lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <div className="mr-2">
            <Link href={logo.href}>
                {logo.icon}
            </Link>
        </div>
        <ul className="flex">
            {menuhome.map((menu) => (
                <li className="mx-2" key={menu.name}>
                    <Link href={menu.href}>
                        <span className="flex">{menu.name} {menu.icon}</span>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
   );  
}