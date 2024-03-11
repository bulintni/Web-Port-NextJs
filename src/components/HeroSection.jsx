"use client"

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';


function HeroSection() {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"><div className='text-transparent bg-clip-text bg-gradient-to-br from-[#2b5876] via-[#4e4376] to-[#2b5876]'>Hello, I am{" "}</div>
                <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Bulin',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Frontend',
          1000,
          'Ux/Ui',
          1000,
          'Graphic',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '1.25em', display: 'inline-block' }}
        repeat={Infinity}
      />
                </h1>
                {/* about me */}
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                I am a Frontend developer who changed careers from Graphic designer and want to learn new things.
                </p>
                {/* button download cv / Hire Me */}
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#2b5876] via-[#4e4376] to-[#2b5876] bg-white hover:bg-slate-200 text-white' ><Link href="https://drive.google.com/file/d/1nREMoLUOtwwQqGR1Lpz8gpu34Iy6L1og/view?usp=sharing">Download CV</Link></button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-10 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'>
                    <Image src="/image/Bell.png" alt='Hero Image' width={300} height={300} className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection