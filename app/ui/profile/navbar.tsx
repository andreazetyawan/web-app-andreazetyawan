import Link from "next/link";
import Image from "next/image";
import MenuProfile from "@/app/lib/profile/menuprofile";

const menuprofile = MenuProfile;

const backhome = {
    href: '/',
    name: 'Back Home', 
    icon: <Image 
        src="/img/svg/menu-back-home.svg"
        alt="Back Home"
        className="dark:invert"
        width={20}
        height={20}
        priority
        />
}

export default function Navigation() {
   return (
    <nav className="fixed left-0 px-4 top-0 flex w-full justify-between items-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-2 pt-2 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit 
                    lg:static lg:w-auto lg:rounded-full lg:border lg:bg-gray-200 lg:p-3 lg:dark:bg-zinc-800/30">
        <Link href={backhome.href}>
            <div className="flex items-center">
                <span>{backhome.icon}</span>
                <span className="hidden lg:inline-block lg:ml-2 lg:mr-10">{backhome.name}</span>
            </div>
        </Link>
        <ul className="flex">
            {menuprofile.map((menu) => (
                <li className="ml-4" key={menu.name}>
                    <Link href={menu.href}>
                        <div className="flex items-center">
                            <span>{menu.name}</span>
                            <span className="hidden lg:inline-block lg:ml-2">{menu.icon}</span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
   );  
}