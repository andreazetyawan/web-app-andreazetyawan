import Link from "next/link";
import Experiences from "@/app/lib/profile/experiences";

const experiences = Experiences;

export default function WorkExperiences() {
  return (
    <div className="pt-16 lg:pt-8 max-w-4xl text-left px-6">
      <h2 className="text-2xl font-semibold">
        Pengalaman Kerja
      </h2>
      <p className="flex mb-10 text-sm opacity-50">
        Saya mulai bekerja sejak tahun 2017, berikut adalah daftar riwayat pekerjaan yang pernah saya lakukan.
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