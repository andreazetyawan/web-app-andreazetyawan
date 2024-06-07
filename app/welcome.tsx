import Link from "next/link";
import Platform from "./lib/platform";

const platform = Platform;

export default function Welcome() {
  return (
      <div className="pt-16 lg:pt-8 max-w-4xl text-left lg:text-center px-6">
          <div className="pt-4">
            <span className="text-xl lg:text-xl bg-amber-500 text-black">
              Hallo, selamat datang...
            </span>
          </div>
          <h2 className="mt-3 lg:mt-5 text-3xl lg:text-5xl font-semibold">
            Saya Andreazetyawan
          </h2>
          <p className="mt-3 text-sm opacity-50 static">
            Saya seorang developer website, memulai karir dibidang developer website pada tahun 2017.
          </p>
          <p className="text-sm opacity-50 static">
            Sekarang saya bekerja dibidang digital marketing dengan mengelola website, media sosial serta pembuatan konten untuk tujuan pemasaran digital.
          </p>
          <p className="mt-4 text-sm opacity-50 static">
            Terhubung dengan saya :
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
