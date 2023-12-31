import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abroad Sathi',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`} >
       
    <div className=' sticky top-0 z-10 pb-3 bg-white' >

        <Navbar/>
    </div>
        
        {children}
        <Footer/>
        </body>
    </html>
  )
}
