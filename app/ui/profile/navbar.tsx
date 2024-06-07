import Link from "next/link";
import Image from "next/image";
import MenuProfile from "@/app/lib/profile/menuprofile";

const menuprofile = MenuProfile;

const backhome = {
    href: '/',
    name: 'Home', 
    icon: <Image 
        src="/img/svg/menu-back-home.svg"
        alt="Back Home"
        className="dark:invert lg:mr-10"
        width={20}
        height={20}
        priority
        />
}

export default function Navigation() {
   return (
    <nav className="fixed left-0 px-4 top-0 flex w-full justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
                    lg:static lg:w-auto lg:rounded-md lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <Link href={backhome.href}>
            {backhome.icon}
        </Link>
        <ul className="flex">
            {menuprofile.map((menu) => (
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