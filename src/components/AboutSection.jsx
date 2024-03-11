"use client"
import React from 'react'
import { useTransition, useState } from 'react'
import TabButton from './TabButton'
import Image from 'next/image'
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>ReactJS</li>
        <li>NextJS</li>
        <li>TailwindCSS</li>
        <li>Bootstrap</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>THAI-NICHIINSTITUTE OF
            TECHNOLOGY 2016-2019 
            Major : Information technology
            Multimediatechnology
        </li>
        <li>SelfLearning for Coding</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul>
        <li>THAI-NICHIINSTITUTE OF
            TECHNOLOGY 2016-2019 
            Major : Information technology
            Multimediatechnology Transcpipt
        </li>
      </ul>
    )
  },
]

function AboutSection() {
  const [tab, setTab] = useState("skills")
  const [isPending ,startTransition] = useTransition()
  const handleTabChange = (id) => {
    startTransition(()=> {
      setTab(id);
    })
  }

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/Image/code.jpg" alt="about me" width={500} height={500}/>
        <div className='mt-4 md:mt0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg'>Hello, my name is Bulin and I want to find
            a job in the Frontend deverloper field. I
            have transferred careers from a Graphic
            designer. I still have no experience in
            doing Frontend work, so I want to find
            new work experience to develop myself.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection