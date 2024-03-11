import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLine } from "react-icons/fa6";

function Footer() {
  return (
    <footer className='footer border border-t-[#33353f] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between'>
        <span>Logo</span>
          <div>
          <h1>Contact Me</h1>
          <p>Email : bulintni@gmail.com</p>
          <p>Phone : 093-453-2298</p>
            <div className='flex justify-between mt-6'>
              <Link href="https://www.facebook.com/bulintni/" className='text-white text-4xl'><FaFacebookSquare /></Link>
              <Link href="https://www.linkedin.com/in/bulin-tanomwongtana-9a4a58252/" className='text-white text-4xl'><FaLinkedin /></Link>
              <Link href="https://line.me/ti/p/Gg_AMLrzJA" className='text-white text-4xl'><FaLine /></Link>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer