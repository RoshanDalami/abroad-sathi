import AboutBanner from '@/Components/AboutBanner'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import Weprovide from '@/Components/Weprovide'


export default function Home() {
  return (
    <main className='px-10'>
      <Navbar/>
      <Hero/>
      <AboutBanner/>
      <Weprovide/>
    </main>
  )
}
