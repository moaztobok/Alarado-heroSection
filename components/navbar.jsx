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
    const [showMenu,setShowMenu] = useState(false)
    const [selectedLink,setSelectedLink] = useState('About Us')
    const handleMenu=() => {
        setShowMenu(!showMenu)
    }
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
        <div className=' md:hidden'>
        <Toggle/>
        </div>
        <button className='hidden md:block'
        onClick={handleMenu}>
        <svg className='menu' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
        <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
        </svg>
        </button>
        <div className='absolute shadow-xl lg:hidden flex flex-col top-0 px-5 py-10 h-screen items-center w-[80%] right-0 text-primary text-[2rem] bg-secondary gap-2 duration-300'
        style={{transform:`translateX(${showMenu ? '0%' : '100%' })`}}>
        <div className='w-full h-10 flex justify-end'>
        <svg onClick={handleMenu} className='menu' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/></svg>
        </div>
        {Links.map((link)=>
            <Link key={link.title} href={link.url} className='font-semibold hover:font-bold duration-300 '
            onClick={()=> {setSelectedLink(link.title)}}
            style={{opacity:`${selectedLink=== link.title ? 1 : 0.5}`}}>
                {link.title}
            </Link>)}
            <Toggle/>
        </div>
    </nav>
  )
}

export default navbar