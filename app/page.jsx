import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='max-container flex  md:flex-col-reverse sm:flex-col-reverse font-bold flexCenter md:text-[0.5rem]'>
      
      <div className='flex flex-col gap-5 sm:px-10 justify-center lg:h-[90vh]'>
        <h3 className='text-[1.125rem] md:text-[0.8rem] capitalize font-semibold'>😎 SIMPLE WAY TO COMMUNICATE</h3>
        <h1 className='text-[3.75rem] md:text-[2rem] max-w-xl text-primary'>Actions for Accessibility in Design</h1>
        <p className=' max-w-xl text-MyDarkGray'>The fastest way to build and deploy websites with resusable components.</p>
        <div className='flex gap-5 items-center'>
          <button className='rounded-md bg-Bluey py-2 px-5 text-Whity font-semibold'>Get Started</button>
          <Link href='/' className='underline text-Bluey'>Get live demo</Link>
        </div>
        <div className='flex gap-10'>
          <span className='flex'>
          <Image src='/Done_ring_round_fill.svg' alt='check' width={20} height={20}></Image>
          <p>No credit card required</p>
          </span>
          <span className='flex'>
          <Image src='/Done_ring_round_fill.svg' alt='check' width={20} height={20}></Image>
          <p>No software to install</p>
          </span>
        </div>
      </div>
      <div>
      <Image src='/hero-image-simple-homepage.png' alt='hero-image' width={500} height={500} className='lg:w-full'/>
      </div>
    </main>
  )
}

export default page