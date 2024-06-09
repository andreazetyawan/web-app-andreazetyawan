import Link from "next/link";
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
            />,
        tag: 'Pengalaman Kerja',
        name: 'PT Jetak Makmur Lestari', 
        sinceIcon: <Image 
              src='/img/svg/experiences-since.svg'
              alt='Since Experiences'
              className='dark:invert mr-1'
              width={17}
              height={17}
              />, 
        since: 'Tahun 2017 - Tahun 2019',
        description: 'Bekerja sebagai buzzer produk dengan mengelola website, twitter, facebook, dan instagram perusahaan. ',
        linkIcon: <Image 
              src='/img/svg/experiences-link.svg'
              alt='Link'
              className='dark:invert mr-1'
              width={17}
              height={17}
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
          />,
      tag: 'Pengalaman Kerja',
      name: 'PT Solo Mechatronic Indonesia', 
      sinceIcon: <Image 
            src='/img/svg/experiences-since.svg'
            alt='Since Experiences'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
      since: 'Tahun 2019 - Tahun 2021',
      description: 'Bekerja sebagai software developer dengan mengelola website dan mengembangkan produk IoT (Internet of Things) berbasis website.',
      linkIcon: <Image 
            src='/img/svg/experiences-link.svg'
            alt='Link'
            className='dark:invert mr-1'
            width={17}
            height={17}
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
        />,
    tag: 'Pengalaman Kerja',
    name: 'PT Cipta Otomasi Indonesia', 
    sinceIcon: <Image 
          src='/img/svg/experiences-since.svg'
          alt='Since Experiences'
          className='dark:invert mr-1'
          width={17}
          height={17}
          />, 
    since: 'Tahun 2021 - Tahun 2022',
    description: 'Berkerja sebagai digital marketing untuk mengelola website perusahaan.',
    linkIcon: <Image 
          src='/img/svg/experiences-link.svg'
          alt='Link'
          className='dark:invert mr-1'
          width={17}
          height={17}
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
            />,
        tag: 'Pengalaman Kerja',
        name: 'PT Adco Pakis Mas', 
        sinceIcon: <Image 
            src='/img/svg/experiences-since.svg'
            alt='Since Experiences'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
        since: 'Tahun 2022 - Tahun 2023',
        description: 'Berkerja sebagai desain grafis digital marketing untuk banner dan promo di marketplace perusahaan.',
        linkIcon: <Image 
            src='/img/svg/experiences-link.svg'
            alt='Link'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
        linkName:'aerostreet.co.id/',
        link:'https://aerostreet.co.id/'
    }
]

const aboutexperience = {
  tag: 'Pengalaman Kerja',
  description:'Saya mulai bekerja sejak tahun 2017, berikut adalah daftar riwayat pekerjaan yang pernah saya lakukan.'
}

function WorkExperiences() {
  return (
    <div className="pt-16 lg:pt-8 max-w-4xl text-left px-6">
      <h2 className="text-2xl font-semibold mb-3">
        {aboutexperience.tag}
      </h2>
      <p className="flex mb-6 text-sm opacity-50">
        {aboutexperience.description}
      </p>
      {experiences.map((exp) => (
        <div key={exp.id} className="group mb-5 rounded-lg border border-transparent p-4 transition-colors border-white bg-white dark:border-neutral-700 dark:bg-neutral-800/30">
                <span className="flex text-sm opacity-50">
                  {exp.tagIcon}
                  {exp.tag}
                </span>
                <h2 className="text-2xl font-semibold">
                  {exp.name}
                </h2>
                <p className="flex mb-3 text-sm opacity-50">
                  {exp.sinceIcon} {exp.since}
                </p>
                <p className="text-sm opacity-50">
                  {exp.description}
                </p>
                <Link href={exp.link} className="flex text-sm opacity-50 mt-3">
                  {exp.linkIcon} {exp.linkName}
                </Link>
        </div>
      ))}
    </div>
  )
}

export default WorkExperiences;