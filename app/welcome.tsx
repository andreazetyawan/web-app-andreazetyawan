import Link from "next/link";
import Image from "next/image";

const platform = [
  { 
      id: '1', 
      name: 'Email', 
      href: 'mailto:andreazetyawan@andreazetyawan.id', 
      icon: <Image 
          src='/img/svg/platform-email.svg'
          alt='Email'
          className='dark:invert'
          width={25}
          height={25}
          />
  },
  { 
    id: '2', 
    name: 'GitHub', 
    href: 'https://github.com/andreazetyawan', 
    icon: <Image 
        src='/img/svg/platform-github.svg'
        alt='GitHub'
        className='dark:invert'
        width={25}
        height={25}
        />
},
  { 
      id: '3', 
      name: 'X', 
      href: 'https://x.com/andreazetyawan',
      icon: <Image 
          src='/img/svg/platform-twitter.svg'
          alt='X'
          className='dark:invert'
          width={25}
          height={25}
          />
  },
  { 
      id: '4', 
      name: 'Instagram', 
      href: 'https://instagram.com/andreazetyawan',
      icon: <Image 
          src='/img/svg/platform-instagram.svg'
          alt='Instagram'
          className='dark:invert'
          width={25}
          height={25}
          />
  }
]

const welcome = {
  header: 'Hallo, selamat datang...',
  titleheader: 'Saya Andreazetyawan',
  description: 'Saya seorang developer website, memulai karir dibidang developer website pada tahun 2017. Sekarang saya bekerja dibidang digital marketing dengan mengelola website, media sosial serta pembuatan konten untuk tujuan pemasaran digital.',
  connectme: 'Terhubung dengan saya :'
}

function Welcome() {
  return (
      <div className="pt-16 lg:pt-8 max-w-4xl text-left lg:text-center px-6">
          <div className="pt-4">
            <span className="text-xl lg:text-xl bg-amber-500 text-black">
              {welcome.header}
            </span>
          </div>
          <h2 className="mt-3 lg:mt-5 text-4xl lg:text-5xl font-semibold">
            {welcome.titleheader}
          </h2>
          <p className="mt-3 text-sm opacity-50 static">
            {welcome.description}
          </p>
          <p className="mt-4 text-sm opacity-50 static">
            {welcome.connectme}
          </p>
          <ul className="flex lg:justify-center">
              {platform.map((media) => (
                <li className="mr-3 mt-2 lg:mt-4 lg:mx-6" key={media.name}>
                  <Link href={media.href}>
                    <span> {media.icon}</span>
                  </Link>
                </li>
              ))}
          </ul>
      </div>
  );
}

export default Welcome;