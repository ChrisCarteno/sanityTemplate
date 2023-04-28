import '../globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'Christians Portfolio',
  description: 'Portfolio of Christian',
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='max-w-3xl mx-auto py-20'>
        <Header />
        <main className='py-10'>{children}</main>
      </body>
    </html>
  )
}
