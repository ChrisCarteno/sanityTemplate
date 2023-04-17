import {getProject} from '@/sanity/sanity-utils';

type Props = {
    params: {project: string};
};

export default async function Project({params}: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
        <div className='max-w-5xl mx-auto py-20'>
            <h1 className='text-7xl font-extrabold'>
                {project.name}
            </h1>
        </div>
    )
}