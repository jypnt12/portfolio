
"use client"; 

import React, {useState} from 'react'
import {motion, AnimatePresence} from "framer-motion"
import { BiChevronDown } from "react-icons/bi";

const Accordion = ({id, company, details, tags,website}) => {

    const [show, setShow] = useState(true);

  return (
    <div key={id} className='max-w-[700px] w-full mx-auto flex  flex-col gap-2'>
                <div onClick={()=>setShow(!show)} 
                    className='flex justify-between items-center bg-gray-800 p-3 rounded-md cursor-pointer hover:opacity-75'>
                    <h1 className='text-xl font-semibold '>{company}</h1>
                    <BiChevronDown className={`text-2xl transition-all duration-500 ${show ?"rotate-180" : ""}`}/>
                </div>

                <AnimatePresence>
                {show &&(
                    <motion.div 
                        initial={{height:0}}    
                        animate={{height: "auto"}} 
                        exit={{height: 0}}
                        transition ={{duration: 0.5}}
                        className='overflow-hidden bg-gray-700 rounded-md'>
                        <div className='flex flex-col p-6 gap-6'>
                            {/* <p >{website}</p> */}
                            <p className='text-sm md:text-base'>{details}</p>
                           
                                {/* <ul className='flex flex-row gap-4'>
                                    <li className='bg-gray-500  text-white px-4 py-1 rounded-full text-base'>dsfsdf</li>
                                    <li className='bg-gray-500  text-white px-4 py-1 rounded-full text-base'>dsfsdf</li>
                                    <li className='bg-gray-500  text-white px-4 py-1 rounded-full text-base'>dsfsdf</li>
                                    <li className='bg-gray-500  text-white px-4 py-1 rounded-full text-base'>dsfsdf</li>
                                    
                                </ul> */}
                                <div className='flex lg:flex-row flex-wrap gap-4'>
                                    {
                                    tags.map((tag)=>(
                                        <code  className='bg-gray-800  text-white px-4 py-1 rounded-full text-sm'
                                         key={tag.name} style={{color:"#ffffff"}}>
                                        #{tag.name}
                                        </code>
                                    ))
                                    }
                                </div>
                        </div>
                        

                    </motion.div>
                )}
                </AnimatePresence>
            </div>
  )
}

export default Accordion