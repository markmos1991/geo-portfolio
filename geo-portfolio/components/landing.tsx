"use client"
import React from 'react'
import Projects from "./projects"
import Link from 'next/link';
import Image from 'next/image'

import { IconHover } from "./icon-hover"





const Landing = () => {
    return (
        <div className=" sm:py-32">
           
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-lg gap-x-8 gap-y-12 sm:max-w-l sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                    {Projects.map(project => (

                        <IconHover>
                            <div
                                className="p-4 aspect-w-4 aspect-h-4" >

                                <Link href={project.link} key={project.id} >
                                    <Image
                                        src={project.imageUrl}
                                        width={400}
                                        height={400}
                                        alt={`Project ${project.link}`}
                                        className="mb-2 rounded-lg" />
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
 
  
  