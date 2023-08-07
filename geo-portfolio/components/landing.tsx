import React from 'react'
import  Projects  from "./projects"
import Link from 'next/link'

const Landing = () => {
    return (
        <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {Projects.map(project => (
          
           
              <div className="p-4 rounded shadow-md col-span-2 max-h-12 w-full object-contain lg:col-span-1">
                <Link href={project.link} key={project.id}>
                <img src={project.imageUrl} alt={`Project ${project.id}`} className="mb-2 rounded-lg" />
                </Link>
              </div>
        ))}
      </div>
      </div>
      </div>
    );
  };
  
  export default Landing;
 
  
  