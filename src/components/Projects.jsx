/*
import React from "react";
import vpn from '../assets/vpn.png'
import copeople from '../assets/copeople.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Snap Shot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={vpn} alt="" />
            </a>}
            {title=='Co People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">Check it out!</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Covid19 Analysis',
        description:'This project demonstrates the implementation of machine learning algorithms using Python in Google Colab. It explores data processing, model training, and evaluation techniques, providing an interactive environment for hands-on learning and experimentation.',
        image: vpn,
        git:'https://colab.research.google.com/drive/17_O9oeunSghnl_9hMSjhUv_J6G0349zh?usp=sharing',
        technologies:['Python' ,'Matplotlip' , 'Seaborn']
    },
    {
        title:'HR Analytics Power BI Dashboard',
        description:'•	Designed a Power BI dashboard to track employee data for the HR team that includes attendance, performance, working hours, and leaves.',
        image: {copeople},
        git:"https://github.com/Rachana-rs/HR-Analytics-Dashboard",
        technologies:[ 'Power BI']
    }
]

export default Projects
 */

import React from "react";
import vpn from '../assets/vpn.png';
import copeople from '../assets/copeople.png';
import t20 from '../assets/t20.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={git} target="_blank" rel="noopener noreferrer">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4 sm:p-6">
                <a href={git} target="_blank" rel="noopener noreferrer">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">Check it out!</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}  // Use the imported image directly
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 't20 Cricket Data Analysis',
        description: 'Dashboard to select various players for various categories(openers, middle order, finishers, all-rounders, fast bowlers) and ultimately choose the top 11 players to play in the match.',
        image: t20,  // Correctly use the imported image
        git: 'https://github.com/Rachana-rs/t20-Cricket-Analysis',
        technologies: ['Python', 'Power BI']
    },
    {
        title: 'HR Analytics Power BI Dashboard',
        description: 'Designed a Power BI dashboard to track employee data for the HR team that includes attendance, performance, working hours, and leaves.',
        image: copeople,  // Correctly use the imported image
        git: "https://github.com/Rachana-rs/HR-Analytics-Dashboard",
        technologies: ['Power BI']
    },
    {
        title: 'Covid19 Analysis',
        description: 'This project demonstrates the implementation of machine learning algorithms using Python in Google Colab. It explores data processing, model training, and evaluation techniques, providing an interactive environment for hands-on learning and experimentation.',
        image: vpn,  // Correctly use the imported image
        git: 'https://colab.research.google.com/drive/17_O9oeunSghnl_9hMSjhUv_J6G0349zh?usp=sharing',
        technologies: ['Python', 'Matplotlib', 'Seaborn']
    }
    
];

export default Projects;
