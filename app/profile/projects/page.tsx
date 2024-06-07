import Link from "next/link";
import Projects from "@/app/lib/profile/projects";

const project = Projects;

export default function ListProjects() {
  return (
    <div className="lg:mt-10 grid lg:mb-10 lg:w-full lg:max-w-3xl lg:text-left">
      <h2 className="text-2xl font-semibold">
        Daftar Proyek
      </h2>
      <p className="flex mb-10 text-sm opacity-50">
        Proyek pertama kali yang pernah saya buat saat magang di salah satu sekolah negeri surakarta, berikut adalah daftar proyek yang pernah saya buat.
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