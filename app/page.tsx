import Image from 'next/image';
import { getProjects } from '@/sanity/sanity-utils';
import Link from 'next/link';

export default async function Home() {

  const projects = await getProjects();
  return (
    <div className='max-w-5xl mx-auto py-20'>
      <h1 className='text-7xl font-extrabold'>
        Hello I'm{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Christian
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        I'm a full-stack developer and designer from the US.
      </p>
      <h2 className="mt-20 font-bold text-gray-700 text-3xl">
        Projects
      </h2>
      <div className="mt-5">

      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
        <Link className='border-2 border-gray-500 rounded-lg p-2 hover:scale-105 hover:border-blue-500 transition' href={`${project.url}`}
        key={project._id}>
          {project.image && (
            <Image src={project.image} alt={project.name} width={750} height={300} className='object-cover rounded-lg border border-gray-500' />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </Link>
        ))}
      </div>
    </div>
  )
}
