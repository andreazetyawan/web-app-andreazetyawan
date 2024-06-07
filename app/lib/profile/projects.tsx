import Image from "next/image";

const projects = [
    { 
        id: '1', 
        tagIcon: 
            <Image 
            src='/img/svg/projects-verify.svg'
            alt='Verify Project'
            className='dark:invert mr-1'
            width={17}
            height={17}
            priority
            />,
        tag: 'Proyek Website',
        name: 'SMK Negeri 6 Surakarta', 
        sinceIcon: <Image 
              src='/img/svg/projects-since.svg'
              alt='Since Projects'
              className='dark:invert mr-1'
              width={17}
              height={17}
              priority
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
              priority
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
            priority
            />,
        tag: 'Proyek Website',
        name: 'PT Jetak Makmur Lestari', 
        sinceIcon: <Image 
              src='/img/svg/projects-since.svg'
              alt='Since Projects'
              className='dark:invert mr-1'
              width={17}
              height={17}
              priority
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
              priority
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
            priority
            />,
        tag: 'Proyek Website',
        name: 'PT Solo Mechatronic Indonesia', 
        sinceIcon: <Image 
              src='/img/svg/projects-since.svg'
              alt='Since Projects'
              className='dark:invert mr-1'
              width={17}
              height={17}
              priority
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
              priority
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
            priority
            />,
        tag: 'Proyek Website',
        name: 'PT Cipta Otomasi Indonesia', 
        sinceIcon: <Image 
              src='/img/svg/projects-since.svg'
              alt='Since Projects'
              className='dark:invert mr-1'
              width={17}
              height={17}
              priority
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
              priority
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
            priority
            />,
        tag: 'Proyek Website Serverless',
        name: 'Nonieta Homedress', 
        sinceIcon: <Image 
              src='/img/svg/projects-since.svg'
              alt='Since Projects'
              className='dark:invert mr-1'
              width={17}
              height={17}
              priority
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
              priority
              />, 
        linkName:'nonietahomedress.pages.dev',
        link:'https://nonietahomedress.pages.dev'
    },
]
export default projects;  