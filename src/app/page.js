"use client"; 
import Link from 'next/link'
import {FiArrowRight} from 'react-icons/fi'
import { AiFillLinkedin, AiFillGithub,AiFillFacebook, AiOutlineArrowDown} from 'react-icons/ai'
import { projects } from '../../constants'
import React from 'react'
import { useState } from 'react'
import Image from "next/image";
import Cube from './Cube';
import Experience from './Experience';
// import Sphere from './Sphere';


export default function Home() {

  
  const [darkMode, setDarkMode]= useState(true);
  const mystyle = {
    color: darkMode? "white":"black",
  };

  const scrollToTop= ()=>{
    console.log("first")
    window.scrollTo({
      top:0, 
      behavior: "smooth"
      
    });
  }
  const scrollNext= ()=>{
    console.log("first")
    window.scrollTo({
      top:1000, 
      behavior: "smooth"
      
    });
  }

  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-2 overflow-x-hidden" id='top'>
    <div className="z-10 w-full max-w-5xl pb-36 items-center justify-between font-mono text-sm flex">
      <h1 className="text-4xl font-Dirgahayu text-gray-500 ">
              {" "} 
              J<span className="text-white ">yp</span>nt
      </h1>
      <div className=" px-6 text-3xl flex justify-start gap-8 py-3 text-gray-400 ">
                <a href="https://wwww.facebook.com/jypnt" target="_blank"
          rel="noopener noreferrer">
                  <AiFillFacebook className="cursor-pointer hover:bg-gray-100 hover:text-gray-950" />
                </a>
                <a href="https://github.com/jypnt12">
                  <AiFillGithub className="cursor-pointer hover:bg-gray-100 hover:text-gray-950" />
                </a>
                <a href="https://ph.linkedin.com/in/jay-pante-653693227?trk=people-guest_people_search-card">
                  <AiFillLinkedin className="cursor-pointer hover:bg-gray-100 hover:text-gray-950" />
                </a>
                
              </div>
        <div className="hidden lg:visible right-0 lg:flex  items-end justify-end from-white via-white dark:from-black dark:via-black static h-auto w-auto bg-none">
          {/* <BsFillMoonStarsFill className="cursor-pointer text-2xl mb-2" /> */}
          <Link target="_blank" rel="nofollow" href="mailto:jaypante12@gmail.com" className="border-solid border-2   px-4 py-1 rounded-md text-base hover:text-black hover:bg-slate-100">contact me</Link>
        </div>
    </div>
    {/* <Sphere/> */}
<Cube/>

      <div className="relative flex flex-col items-center ">
      
          <h1 className="text-5xl lg:text-9xl py-2  text-white-600 font-bold">
          JAY PANTE
          </h1>
          <h2 className="lg:text-xl text-xs py-2 text-white-600 items-center whitespace-pre"><span className='hidden lg:inline '> SOFTWARE ENGINEER    | |    FRONT END    | | </span>   WEB DEVELOPER </h2>
          

        </div>
        <div className=" bottom-0 left-0 flex h-48 w-full items-end justify-center  lg:static lg:h-auto lg:w-auto lg:bg-none  ">
          <button
          onClick={scrollNext}
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none z-10"
            
          ><AiOutlineArrowDown className="cursor-pointer animate-bounce w-6 h-6 ..." />
                 
                 
          </button>
          
        </div>
    </main>

    <Experience id="section-2"/>

    <section className=" flex min-h-screen flex-col items-center justify-between lg:p-24 ">
      <h3 className=' mt-0 pt-6'>SOME OF MY WORK</h3>
      <div className="mb-32 grid max-w-5xl text-center lg:mb-0 lg:grid-cols-3 lg:text-left  pt-6  text-white">
        

        {projects.map(project =>(
          <a
          href={`${project.link}`}
          className="group rounded-lg  border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:dark:border-neutral-700 hover:bg-gray-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {project.name}
            <span className=" inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            <FiArrowRight className='absolute mt-[-20px]'/>
            </span>
          </h2>
          <Image src={project.image} className="shadow-lg" alt={project.image}/>

          <p className={`m-0 text-left text-sm opacity-50`}>
           {project.description}
          </p>
          <div className='flex flex-wrap gap-2'>
              {
              project.tags.map((tag)=>(
                  <code  className=' py-1 text-xs '
                    key={tag.name} style={{color:"#028dff"}}>
                  #{tag.name}
                  </code>
              ))
              }
          </div>
        </a>
        ))}

        
      </div>
      <footer className="text-center pb-16 lg:pb-0 lg:mt-0 mt-[-100px]">
        <button onClick={scrollToTop}>
          <h1 className="text-4xl font-Dirgahayu  text-gray-500">
            {" "}
            J<span className="text-gray-100">yp</span>nt
          </h1>
          </button>
        </footer>
      </section>
      
    </>
  )
}
