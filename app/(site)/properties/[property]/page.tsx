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
        <div className='flex mt-3'>
            <p className='flex-1'>Price: ${property.price}</p>
            <p className='flex-1'>Bedrooms: {property.bedrooms}</p>
            <p className='flex-1'>Bathrooms: {property.bathrooms}</p>
        </div>
        <Image src={property.image}
        alt={property.name} width={1200} height={800}
        className='mt-3 border-2 border-gray-700 object-cover rounded-xl' />
        <div className="text-lg text-gray-700 mt-5">
            <PortableText value={property.content} />
        </div>
        </div>
    )
}


// export type Property = {
//     _id: string;
//     _createdAt: Date;
//     name: string;
//     slug: string;
//     image: string;
//     price: number;
//     bedrooms: number;
//     bathrooms: number;
//     squareFeet: number;
//     content: PortableTextBlock[];
// }
