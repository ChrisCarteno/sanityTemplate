import '../globals.css';
import { Analytics } from '@vercel/analytics/react';

import Link from 'next/link';
import { Nunito_Sans } from 'next/font/google';

export const metadata = {
  title: 'Christians Portfolio',
  description: 'Portfolio of Christian',
  keywords: 'portfolio, christian, web developer, designer',
}


const nunito = Nunito_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  
  return (
    <html lang="en">
      <body className={'max-w-3xl mx-auto pt-20 pb-5 flex flex-col min-h-screen ' + nunito.className}>
      <header className='flex items-center justify-between'>
        <Link href="/"
        className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
        </svg>
        </Link>
        <div className='flex items-center gap-3'>
        <Link href={'/properties'} className='hover:underline'>
            Properties
        </Link>
        </div>
        </header>

        <main className='py-10'>
          {children}
        </main>
        <footer className="bg-white rounded-lg shadow dark:bg-gray-800 mt-auto">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2023 <a href="https://flowbite.com/" className="hover:underline">Christian&trade;</a>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="/properties" className="mr-4 hover:underline md:mr-6 ">Properties</a>
              </li>
              <li>
                  <a href="http://www.christiancarteno.com/#contact" className="hover:underline">Contact</a>
              </li>
          </ul>
          </div>
        </footer>       

      </body>
      <Analytics />
    </html>
  )
}

// import { getPages } from '@/sanity/sanity-utils';
// const pages = await getPages();
// {pages.map((page) => (
  //     <Link href={`/${page.slug}`} key={page._id} className='hover:underline'>
  //     {page.title}
  //     </Link>
// ))}