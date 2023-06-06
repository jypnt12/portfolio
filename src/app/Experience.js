"use client"; 

import React, {useState} from 'react'
import { accordionData } from '../../constants'
import Accordion from './Accordion';

const Experience = () => {

    

  return (
    <div className=" flex  flex-col items-center justify-between lg:p-24 gap-2 px-5">
        <h2 className='p-6'>PROFESSIONAL EXPERIENCE </h2>
     
            {accordionData.map((data, id) =>{
                return <Accordion 
                id={data.id} 
                company={data.company} 
                details={data.details}
                website={data.website}
                tags={data.tags}
                />
            })} 

       

        
    </div>
  )
}

export default Experience