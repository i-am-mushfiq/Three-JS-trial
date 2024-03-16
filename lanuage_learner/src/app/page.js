import { Experience } from '@/components/Experience'
import { Overlay } from '@/components/Overlay'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-screen min-h-screen'>
      <Experience/>
      <Overlay/>
    </main>
  )
}
