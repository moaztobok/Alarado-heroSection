import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/navbar'

export const metadata = {
  title: 'Alarado',
  description: 'Created by Moaz Tobok',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className='font-poppins text-primary bg-secondary duration-300'
      >
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
