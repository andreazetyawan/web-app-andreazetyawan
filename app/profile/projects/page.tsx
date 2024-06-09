import Link from "next/link";
import Image from "next/image";

const project = [
  { 
      id: '1', 
      tagIcon: 
          <Image 
          src='/img/svg/projects-verify.svg'
          alt='Verify Project'
          className='dark:invert mr-1'
          width={17}
          height={17}
          />,
      tag: 'Proyek Website',
      name: 'SMK Negeri 6 Surakarta', 
      sinceIcon: <Image 
            src='/img/svg/projects-since.svg'
            alt='Since Projects'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
      since: 'Tahun 2015',
      description: <div className="text-sm">
          <p className="mb-2">Aplikasi Perpustakaan Berbasis Website (Magang)</p>
          <ul className="list-disc ml-4">
              <li>Membuat aplikasi perpusatakaan lokal berbasis website dengan PHP dan bootstrap</li>
              <li>Membuat fitur scan pengunjung dengan kartu siswa</li>
              <li>Membuat fitur pinjam dan pengembalian buku</li>
          </ul>
      </div>,
      linkIcon: <Image 
            src='/img/svg/projects-link.svg'
            alt='Link'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
      linkName:'smkn6solo.sch.id',
      link:'https://smkn6solo.sch.id'
  },
  { 
      id: '2', 
      tagIcon: 
          <Image 
          src='/img/svg/projects-verify.svg'
          alt='Verify Project'
          className='dark:invert mr-1'
          width={17}
          height={17}
          />,
      tag: 'Proyek Website',
      name: 'PT Jetak Makmur Lestari', 
      sinceIcon: <Image 
            src='/img/svg/projects-since.svg'
            alt='Since Projects'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
      since: 'Tahun 2018',
      description: <div className="text-sm">
          <p className="mb-2">Katalog Produk Website</p>
          <ul className="list-disc ml-4">
              <li>Membuat katalog produk berbasis website dengan wordpress</li>
              <li>Maintenance server website, update produk ke website</li>
          </ul>
      </div>,
      linkIcon: <Image 
            src='/img/svg/projects-link.svg'
            alt='Link'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
      linkName:'rainwearindustry.com',
      link:'http://rainwearindustry.com'
  },
  { 
      id: '3', 
      tagIcon: 
          <Image 
          src='/img/svg/projects-verify.svg'
          alt='Verify Project'
          className='dark:invert mr-1'
          width={17}
          height={17}
          />,
      tag: 'Proyek Website',
      name: 'PT Solo Mechatronic Indonesia', 
      sinceIcon: <Image 
            src='/img/svg/projects-since.svg'
            alt='Since Projects'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
      since: 'Tahun 2019',
      description: <div className="text-sm">
          <p className="mb-2">Company Profile Perusahaan Berbasis Website</p>
          <ul className="list-disc ml-4">
              <li>Membuat company profile berbasis website dengan wordpress</li>
              <li>Integrasi system IoT (Internet of Things) dengan protokol mqtt dan modbus berbasis web dan dekstop</li>
              <li>Maintenance server website</li>
          </ul>
      </div>,
      linkIcon: <Image 
            src='/img/svg/projects-link.svg'
            alt='Link'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
      linkName:'solomechatronic.com',
      link:'https://solomechatronic.com'
  },
  { 
      id: '4', 
      tagIcon: 
          <Image 
          src='/img/svg/projects-verify.svg'
          alt='Verify Project'
          className='dark:invert mr-1'
          width={17}
          height={17}
          />,
      tag: 'Proyek Website',
      name: 'PT Cipta Otomasi Indonesia', 
      sinceIcon: <Image 
            src='/img/svg/projects-since.svg'
            alt='Since Projects'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
      since: 'Tahun 2021',
      description: <div className="text-sm">
          <p className="mb-2">Company Profile Perusahaan Berbasis Website</p>
          <ul className="list-disc ml-4">
              <li>Membuat company profile berbasis website dengan wordpress</li>
              <li>Maintenance server website</li>
          </ul>
      </div>,
      linkIcon: <Image 
            src='/img/svg/projects-link.svg'
            alt='Link'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
      linkName:'ciptaotomasiindonesia.com',
      link:'https://ciptaotomasiindonesia.com'
  },
  { 
      id: '5', 
      tagIcon: 
          <Image 
          src='/img/svg/projects-verify.svg'
          alt='Verify Project'
          className='dark:invert mr-1'
          width={17}
          height={17}
          />,
      tag: 'Proyek Website Serverless',
      name: 'Nonieta Homedress', 
      sinceIcon: <Image 
            src='/img/svg/projects-since.svg'
            alt='Since Projects'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
      since: 'Tahun 2023',
      description: <div className="text-sm">
          <p className="mb-2">Katalog Produk Berbasis Website Serverless</p>
          <ul className="list-disc ml-4">
              <li>Membuat katalog produk berbasis website dengan serverless cloudflare</li>
              <li>Maintenance serverless cloudflare</li>
          </ul>
      </div>,
      linkIcon: <Image 
            src='/img/svg/projects-link.svg'
            alt='Link'
            className='dark:invert mr-1'
            width={17}
            height={17}
            />, 
      linkName:'nonietahomedress.pages.dev',
      link:'https://nonietahomedress.pages.dev'
  },
]

const aboutproject = {
  tag: 'Daftar Proyek',
  description:'Proyek pertama kali yang pernah saya buat saat magang di salah satu sekolah negeri surakarta, berikut adalah daftar proyek yang pernah saya buat.'
}

function ListProjects() {
  return (
    <div className="pt-16 lg:pt-8 max-w-4xl text-left px-6">
      <h2 className="text-2xl mb-3 font-semibold">
        {aboutproject.tag}
      </h2>
      <p className="flex mb-6 text-sm opacity-50">
        {aboutproject.description}
      </p>
      {project.map((prj) => (
        <div key={prj.id} className="group mb-5 rounded-lg border border-transparent p-4 transition-colors border-white bg-white dark:border-neutral-700 dark:bg-neutral-800/30">
                <span className="flex text-sm opacity-50">
                  {prj.tagIcon}
                  {prj.tag}
                </span>
                <h2 className="text-2xl font-semibold">
                  {prj.name}
                </h2>
                <p className="flex mb-3 text-sm opacity-50">
                  {prj.sinceIcon} {prj.since}
                </p>
                <p className="text-sm opacity-50">
                  {prj.description}
                </p>
                <Link href={prj.link} className="flex text-sm opacity-50 mt-3">
                  {prj.linkIcon} {prj.linkName}
                </Link>
        </div>
      ))}
    </div>
  )
}

export default ListProjects;