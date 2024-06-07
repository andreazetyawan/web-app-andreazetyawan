import Image from "next/image";

const Platform = [
    { 
        id: '1', 
        name: 'Email', 
        href: 'mailto:andreazetyawan@andreazetyawan.id', 
        icon: <Image 
            src='/img/svg/platform-email.svg'
            alt='Email'
            className='dark:invert my-4 mx-2'
            width={25}
            height={25}
            priority
            />
    },
    { 
      id: '2', 
      name: 'GitHub', 
      href: 'https://github.com/andreazetyawan', 
      icon: <Image 
          src='/img/svg/platform-github.svg'
          alt='GitHub'
          className='dark:invert my-4 mx-2'
          width={25}
          height={25}
          priority
          />
  },
    { 
        id: '3', 
        name: 'X', 
        href: 'https://x.com/andreazetyawan',
        icon: <Image 
            src='/img/svg/platform-twitter.svg'
            alt='X'
            className='dark:invert my-4 mx-2'
            width={25}
            height={25}
            priority
            />
    },
    { 
        id: '4', 
        name: 'Instagram', 
        href: 'https://instagram.com/andreazetyawan',
        icon: <Image 
            src='/img/svg/platform-instagram.svg'
            alt='Instagram'
            className='dark:invert my-4 mx-2'
            width={25}
            height={25}
            priority
            />
    }
  ]

export default Platform;