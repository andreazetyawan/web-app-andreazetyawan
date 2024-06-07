import Link from "next/link";
import Platform from "./lib/platform";

const platform = Platform;

export default function Welcome() {
  return (
      <div className="p-10 max-w-4xl text-center">
          <div className="mt-4">
            <span className="text-2xl bg-amber-500 text-black">
              Hallo, selamat datang...
            </span>
          </div>
          <h2 className="mt-5 text-5xl font-semibold">
            Saya Andreazetyawan
          </h2>
          <p className="mt-6 text-sm opacity-50 px-10">
            Saya seorang developer website, memulai karir dibidang developer website pada tahun 2017.
          </p>
          <p className="text-sm opacity-50 px-10">
            Sekarang saya bekerja dibidang digital marketing dengan mengelola website, media sosial serta pembuatan konten untuk tujuan pemasaran digital.
          </p>
          <p className="mt-8 text-sm opacity-50 px-10">
            Terhubung dengan saya :
          </p>
          <ul className="flex justify-center">
              {platform.map((media) => (
                <li className="mx-2" key={media.name}>
                  <Link href={media.href}>
                    <span> {media.icon}</span>
                  </Link>
                </li>
              ))}
          </ul>
      </div>
  );
}
