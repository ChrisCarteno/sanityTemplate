import { getProperty } from '@/sanity/sanity-utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

type Props = {
    params: {property: string};
};

export default async function Property({params}: Props) {
    const slug = params.property;
    const property = await getProperty(slug);

    return (
        <div>
            <h1 className='text-5xl drop-shadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
                {property.name}
            </h1>
            <a href={property.url} title='view property' target='blank' rel='noopener noreferrer'
            className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition'>
                View property
            </a>
        <div className="text-lg text-gray-700 mt-5">
            <PortableText value={property.content} />
        </div>

        <Image src={property.image}
        alt={property.name} width={1200} height={800}
        className='mt-10 border-2 border-gray-700 object-cover rounded-xl' />
        </div>
    )
}
