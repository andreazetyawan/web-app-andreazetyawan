import Link from "next/link";
import Image from "next/image";

const platform = [
  { 
    id: '1', 
        name: 'Email', 
        href: 'mailto:andreazetyawan@andreazetyawan.id', 
        icon: <Image 
            src="/img/svg/platform-email.svg"
            alt="Email"
            className="dark:invert mr-4 mt-2"
            width={25}
            height={25}
            />
    },
    { 
      id: '2', 
      name: 'GitHub', 
      href: 'https://github.com/andreazetyawan', 
      icon: <Image 
          src="/img/svg/platform-github.svg"
          alt="GitHub"
          className="dark:invert mr-4 mt-2"
          width={25}
          height={25}
          />
    },
    { 
        id: '3', 
        name: 'X', 
        href: 'https://x.com/andreazetyawan',
        icon: <Image 
            src="/img/svg/platform-twitter.svg"
            alt="X"
            className="dark:invert mr-4 mt-2"
            width={25}
            height={25}
            />
    },
    { 
        id: '4', 
        name: 'Instagram', 
        href: 'https://instagram.com/andreazetyawan',
        icon: <Image 
            src="/img/svg/platform-instagram.svg"
            alt="Instagram"
            className="dark:invert mr-4 mt-2"
            width={25}
            height={25}
            />
    }
  ]

const aboutme = {
  tag: 'Tentang Saya',
  name: 'Andreas Dani Setyawan',
  username: '@ andreazetyawan',
  description: 'Saya seorang developer website, memulai karir dibidang developer website pada tahun 2017. Sekarang saya bekerja dibidang digital marketing dengan mengelola website, media sosial serta pembuatan konten untuk tujuan pemasaran digital.',
  connectme: 'Terhubung dengan saya :'
}

function AboutMe() {
  return (
    <div className="pt-16 lg:pt-8 max-w-4xl text-left px-6">
        <div className="rounded-lg border border-transparent p-4 transition-colors border-white bg-white dark:border-neutral-700 dark:bg-neutral-800/30">
          <div className="lg:flex lg:items-center">
            <div className="lg:w-1/3">
                <Image
                  src="/img/pic/photo-profile.jpg"
                  alt="Photo Profile"
                  className="rounded-md"
                  width={500}
                  height={500}
                />
            </div>
            <div className="lg:w-2/3">
              <div className="mt-5 lg:ml-4 lg:mt-0">
                <span className="flex text-sm opacity-50">
                  <Image 
                  src="/img/svg/menu-about-me.svg"
                  alt="About Me"
                  className="dark:invert mr-1"
                  width={17}
                  height={17}
                  /> 
                  {aboutme.tag}
                </span>
                <h2 className="text-2xl font-semibold">
                  {aboutme.name}
                </h2>
                <p className="mb-3 text-sm opacity-50">
                  {aboutme.username}
                </p>
                <p className="text-sm opacity-50">
                  {aboutme.description}
                </p>
              </div>
              {aboutme.connectme}
              <div className="mt-5 lg:ml-4 lg:mt-5">
                <span className="flex text-sm opacity-50">
                  <Image 
                  src="/img/svg/connect-me.svg"
                  alt="About Me"
                  className="dark:invert mr-1"
                  width={17}
                  height={17}
                  /> 
                  
                </span>
                <ul className="flex">
                    {platform.map((media) => (
                      <li key={media.name}>
                        <Link href={media.href}>
                          <span> {media.icon}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AboutMe;