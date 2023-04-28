"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button} from '@chakra-ui/react';
type PurposeProps = {
    purpose: string;
};

const Banner: React.FunctionComponent<PurposeProps> = ( props ) => {
    const {purpose} = props;

    return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        {purpose}
    </Flex>
    )
}

export default function Header() {
    return (
        <div>
            <h1>I am Christian</h1>
            <Banner purpose={'for sale'}/>

        </div>
    )

}









































// import Link from 'next/link';
// import { getPages } from '@/sanity/sanity-utils';


// async function Header(){
//     const pages = await getPages();

//     return (
//         <header className='flex items-center justify-between'>
//         <Link href="/"
//         className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
//         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-house" viewBox="0 0 16 16">
//             <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
//         </svg>
//         </Link>
//         <div className='flex items-center gap-3'>
//         {pages.map((page) => (
//             <Link href={`/${page.slug}`} key={page._id} className='hover:underline'>
//             {page.title}
//             </Link>
//         ))}
//         </div>

//         </header>

//     )
// }

// export default Header