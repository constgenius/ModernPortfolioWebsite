import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
                <ProjectCard
                    src='/FigmaClone.png'
                    title='Figma Clone'
                    description='Figma Clone using Next.js 14, Tailwind CSS, Liveblocks,Fabric'
                />
                <ProjectCard
                    src='/TravelWebsite.png'
                    title='Travel Website'
                    description='Travel Website Using Next.js 14, Tailwind CSS, TypeScript'
                />
                <ProjectCard
                    src='/YoutubeClone.png'
                    title='Youtube Clone'
                    description='Youtube Clone Using React, Tailwind CSS, TypeScript'
                />
            </div>
        </div>
    )
}

export default Projects