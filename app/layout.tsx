import Footer from './components/navigation/Footer'
import Navbar from './components/navigation/Navbar'
import './styles/main.scss'
import localFont from 'next/font/local'

const helveticaNeue = localFont({
  src: '../fonts/HelveticaNeue-Roman.otf',
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={helveticaNeue.className}>
        <Navbar />
        <div className='main-content'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
