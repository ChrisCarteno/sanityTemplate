import Image from 'next/image';
import { getProperties } from '@/sanity/sanity-utils';
import Link from 'next/link';
import { BiBed, BiBath} from 'react-icons/bi';

export default async function Home() {

  const properties = await getProperties();
  const formatter = Intl.NumberFormat('en-US', {notation: 'compact', style: 'currency', currency: 'USD'});

  return (
    <div>
      <h2 className="mt-10 font-bold text-gray-700 text-3xl">
        Properties
      </h2>
      <div className="mt-5">

      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
        <Link className='border-2 border-gray-500 rounded-lg p-2 hover:scale-105 hover:border-blue-500 transition' href={`/properties/${property.slug}`}
        key={property._id}>
          {property.image && (
            <Image src={property.image} alt={property.name} width={750} height={300} className='object-cover rounded-lg border border-gray-500' />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {property.name}
          </div>
          <div className="flex"> {formatter.format(property.price) + '    '} {property.bedrooms} <BiBed/>   {property.bathrooms} <BiBath/></div>
        </Link>
        ))}
      </div>

    </div>
  )
}
