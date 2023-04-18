import '../globals.css'

export const metadata = {
  title: 'Christian\'s Portfolio',
  description: 'Portfolio of Christian',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
