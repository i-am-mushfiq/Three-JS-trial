import { Experience } from '@/components/Experience'
import { Computer } from '@/components/Computer'
import { Overlay } from '@/components/Overlay'
import Image from 'next/image'
import Head from 'next/head'


export default function Home() {
  return (
    <main className='h-screen min-h-screen'>
      <Head>
        <title>iammushfiq</title>
      </Head>
      < Computer/>
    </main>
  )
}
