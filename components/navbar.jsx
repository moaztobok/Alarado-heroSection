'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Switch from '@/components/Switch'
import Toggle from './Toggle'
const Links =[
    {
        title: 'About Us',
        url:'/'
    },
    {
        title: 'Product',
        url:'/'
    },    {
        title: 'Resources',
        url:'/'
    },    {
        title: 'Contact',
        url:'/'
    },
]
const navbar = () => {
    const [selectedLink,setSelectedLink] = useState('About Us')
  return (
    <nav className='max-container flex justify-between items-center py-5 px-5'>
        <Image src="./alarado-icon-homepage.svg" alt='logo' width={200} height={100} className='md:w-1/2'/>
        <div className='flex gap-10 sm:hidden'>
            {Links.map((link)=>
            <Link key={link.title} href={link.url} className='font-semibold hover:font-bold duration-300'
            onClick={()=> {setSelectedLink(link.title)}}
            style={{opacity:`${selectedLink=== link.title ? 1 : 0.5}`}}>
                {link.title}
            </Link>)}
        </div>
        <Toggle/>
    </nav>
  )
}

export default navbar