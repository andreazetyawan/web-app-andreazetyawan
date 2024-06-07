import Image from "next/image";

const MenuHome = [
    { 
        id: '1', 
        name: 'Lihat Profile Selengkapnya', 
        href: '/profile/about-me',
        icon: <Image 
            src='/img/svg/menu-profile.svg'
            alt='Profile'
            className='dark:invert ml-2'
            width={17}
            height={17}
            priority
            />
    }
]

export default MenuHome;  