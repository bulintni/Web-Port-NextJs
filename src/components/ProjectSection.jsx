"use client"

import React from 'react'
import { useState } from 'react';
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import Link from 'next/link';


const projectsData = [
  {
    id: 1,
    title: "Menu Card",
    description: "Menu Card",
    image: "/Image/projects/web1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bulintni/Menu-Omlet.git",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "HTML Weather App",
    description: "Weather App for City",
    image: "/Image/projects/web2.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/bulintni/Weather-App.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Stay updated Card",
    description: "Send Email for update",
    image: "/Image/projects/web3.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/bulintni/Stay-Update-card.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Ratting Card App",
    description: "Ratting App",
    image: "/Image/projects/web4.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/bulintni/Ratting-Card.git",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "HTML Calculate Age",
    description: "App Calculate Age from years",
    image: "/Image/projects/web5.png",
    tag: ["All", "App"],
    gitUrl: "https://github.com/bulintni/Calculate-Age.git",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Prototype for Portfolio HTML/CSS",
    description: "Prototype for Portfolio",
    image: "/Image/projects/web6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/bulintni/Prototype-Port-Web.git",
    previewUrl: "/",
  },
];
function ProjectSection() {
  const [tag,setTag] = useState("All")

  const handleTagChange = (newTag)=> {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Project</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        {/* Tag All */}
        <ProjectTag 
        onClick={handleTagChange} 
        name="All" 
        isSelected={tag === "All"}/>
        {/* Tag Web */}
        <ProjectTag 
        onClick={handleTagChange} 
        name="Web" 
        isSelected={tag === "Web"}/>
        {/* Tag App */}
        <ProjectTag 
        onClick={handleTagChange} 
        name="App" 
        isSelected={tag === "App"}/>
      </div>
      <div className='lg:grid lg:gap-4 lg:grid-cols-3 md:grid md:gap-3 md:grid-cols-2 sm:flex sm:flex-col'>{filteredProjects.map((project)=>(
         <ProjectCard 
         key={project.id} 
         title={project.title} 
         description={project.description} 
         imgUrl={project.image}
         gitUrl={project.gitUrl}
         previewUrl={project.previewUrl}
         />
      ))}
      </div>
      <div className='flex flex-col'>
      <h2 className='text-5xl font-bold border-t-2 mt-3 pt-8 text-center text-white'>My Other Project</h2>
      <div className='flex justify-center my-8'>
        <Link href = "https://github.com/bulintni/My-Portfolio.git" className='text-center text-2xl font-bold lg:w-[50%] text-white mt-4 mb-8 md:mb-12 bg-sky-600 rounded-full px-5 py-5'>GitHub Link</Link>
      </div>
      </div>
    </div>
  )
}

export default ProjectSection