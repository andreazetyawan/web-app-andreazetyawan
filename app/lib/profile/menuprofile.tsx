import Image from "next/image";

const menuprofile = [
    { 
        id: '1', 
        name: 'About Me', 
        href: '/profile/about-me', 
        icon: <Image 
            src='/img/svg/menu-about-me.svg'
            alt='About Me'
            className='dark:invert ml-2'
            width={17}
            height={17}
            priority
            />
    },
    { 
        id: '2', 
        name: 'Experiences', 
        href: '/profile/experiences',
        icon: <Image 
            src='/img/svg/menu-experiences.svg'
            alt='Experiences'
            className='dark:invert ml-2'
            width={17}
            height={17}
            priority
            />
    },
    { 
        id: '3', 
        name: 'Projects', 
        href: '/profile/projects',
        icon: <Image 
            src='/img/svg/menu-projects.svg'
            alt='Projects'
            className='dark:invert ml-2'
            width={17}
            height={17}
            priority
            />
    }
]

export default menuprofile;