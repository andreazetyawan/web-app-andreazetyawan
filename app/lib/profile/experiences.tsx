import Image from "next/image";

const experiences = [
    { 
        id: '1', 
        tagIcon: 
            <Image 
            src='/img/svg/experiences-verify.svg'
            alt='Verify Experiences'
            className='dark:invert mr-1'
            width={17}
            height={17}
            priority
            />,
        tag: 'Pengalaman Kerja',
        name: 'PT Jetak Makmur Lestari', 
        sinceIcon: <Image 
              src='/img/svg/experiences-since.svg'
              alt='Since Experiences'
              className='dark:invert mr-1'
              width={17}
              height={17}
              priority
              />, 
        since: 'Tahun 2017 - Tahun 2019',
        description: 'Bekerja sebagai buzzer produk dengan mengelola website, twitter, facebook, dan instagram perusahaan. ',
        linkIcon: <Image 
              src='/img/svg/experiences-link.svg'
              alt='Link'
              className='dark:invert mr-1'
              width={17}
              height={17}
              priority
              />, 
        linkName:'rainwearindustry.com',
        link:'http://rainwearindustry.com'
    },
    { 
      id: '2', 
      tagIcon: 
          <Image 
          src='/img/svg/experiences-verify.svg'
          alt='Verify Experiences'
          className='dark:invert mr-1'
          width={17}
          height={17}
          priority
          />,
      tag: 'Pengalaman Kerja',
      name: 'PT Solo Mechatronic Indonesia', 
      sinceIcon: <Image 
            src='/img/svg/experiences-since.svg'
            alt='Since Experiences'
            className='dark:invert mr-1'
            width={17}
            height={17}
            priority
            />, 
      since: 'Tahun 2019 - Tahun 2021',
      description: 'Bekerja sebagai software developer dengan mengelola website dan mengembangkan produk IoT (Internet of Things) berbasis website.',
      linkIcon: <Image 
            src='/img/svg/experiences-link.svg'
            alt='Link'
            className='dark:invert mr-1'
            width={17}
            height={17}
            priority
            />, 
      linkName:'solomechatronic.com',
      link:'https://solomechatronic.com'
  },
  { 
    id: '3', 
    tagIcon: 
        <Image 
        src='/img/svg/experiences-verify.svg'
        alt='Verify Experiences'
        className='dark:invert mr-1'
        width={17}
        height={17}
        priority
        />,
    tag: 'Pengalaman Kerja',
    name: 'PT Cipta Otomasi Indonesia', 
    sinceIcon: <Image 
          src='/img/svg/experiences-since.svg'
          alt='Since Experiences'
          className='dark:invert mr-1'
          width={17}
          height={17}
          priority
          />, 
    since: 'Tahun 2021 - Tahun 2022',
    description: 'Berkerja sebagai digital marketing untuk mengelola website perusahaan.',
    linkIcon: <Image 
          src='/img/svg/experiences-link.svg'
          alt='Link'
          className='dark:invert mr-1'
          width={17}
          height={17}
          priority
          />, 
    linkName:'ciptaotomasiindonesia.com',
    link:'https://ciptaotomasiindonesia.com'
    },

    { 
        id: '4', 
        tagIcon: 
            <Image 
            src='/img/svg/experiences-verify.svg'
            alt='Verify Experiences'
            className='dark:invert mr-1'
            width={17}
            height={17}
            priority
            />,
        tag: 'Pengalaman Kerja',
        name: 'PT Adco Pakis Mas', 
        sinceIcon: <Image 
            src='/img/svg/experiences-since.svg'
            alt='Since Experiences'
            className='dark:invert mr-1'
            width={17}
            height={17}
            priority
            />, 
        since: 'Tahun 2022 - Tahun 2023',
        description: 'Berkerja sebagai desain grafis digital marketing untuk banner dan promo di marketplace perusahaan.',
        linkIcon: <Image 
            src='/img/svg/experiences-link.svg'
            alt='Link'
            className='dark:invert mr-1'
            width={17}
            height={17}
            priority
            />, 
        linkName:'aerostreet.co.id/',
        link:'https://aerostreet.co.id/'
    }
]
export default experiences;  