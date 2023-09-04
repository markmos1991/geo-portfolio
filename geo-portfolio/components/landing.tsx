"use client"
import React from 'react'
import Projects from "./projects"
import Link from 'next/link';
import Image from 'next/image'

import { IconHover } from "./icon-hover"





const Landing = () => {
    return (
        <div className="p-6 pt-10">
           
            <div className=" max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 sm:max-w-l sm:gap-x-0 sm:gap-y-2 lg:mx-0 lg:max-w-none sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {Projects.map((project) => (
            <IconHover key={project.id}> {/* Add the 'key' prop here */}
              <div className="p-0 md:p-4 lg:p-6 aspect-w-4 aspect-h-4">
                <Link href={project.link}>
                  <Image
                    src={project.imageUrl}
                    width={200}
                    height={200}
                    alt={`Project ${project.link}`}
                    className="hover-shadow-xl"
                  />
                </Link>
              </div>
            </IconHover>





                    ))}
                </div>
            </div>
        </div >
    );
};

export default Landing;
 
  
  