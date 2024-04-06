'use client'
import React, {useState} from 'react'
import {Tabs, TabsList, TabsContent, TabsTrigger} from '@/components/ui/tabs'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
    {
        image: '/work/Wordle.png',
        category: 'react.js',
        name: 'Wordle',
        description: 'Created a Wordle clone utilizing React, empowering utilization of diverse React features and advanced data structures, demonstrating comprehensive mastery of frontend development.',
        link:'https://main.d3rcz4bik3h08p.amplifyapp.com/',
        github:'https://github.com/parekhbhargav25/WordleClone'
    },
    {
        image: '/work/portfolio.png',
        category: 'react.js Next.js',
        name: 'bhargavdev.com',
        description: 'Built my portfolio with React.js, Next.js, and Tailwind CSS for dynamic, responsive design. Hosted on AWS Route53 for reliability and global accessibility, with AWS Amplify for streamlined CI/CD.',
        link:'https://bhargavdev.com/',
        github:'https://github.com/parekhbhargav25/MyPortfolio'
    },

    {
        image: '/work/registerMe.jpg',
        category: 'react.js',
        name: 'RegisterMe',
        description: 'A full stack web application called RegisterMe. This project was developed using React for the frontend, AWS DynamoDB and AWS Amplify for backend services, and Node.js for server-side logic.',
        link:'https://www.youtube.com/watch?v=E8UK1b9H6R4',
        github:'https://github.com/Lava-Java/RegisterMe-v2'
    },
    {
        image: '/work/auth.png',
        category: 'react.js + python',
        name: 'User Authentication',
        description: 'Developed a full-stack web application using Python Flask for the backend, React with Bootstrap for the frontend and allows users to register, log in, and access a product list retrieved from a MySQL DB.',
        link:'https://www.youtube.com/watch?v=DwyLnAkrmlE',
        github:'https://github.com/parekhbhargav25/FM_Test'
    },
    {
        image: '/work/auction.png',
        category: 'C++ python',
        name: 'Auction System',
        description: 'Developed front-end using Python and  back-end with C++. Created a bash script to automate testing procedures. Implemented key features: user registarion, admin access, bidding, selling etc.',
        link:'https://github.com/IslamNuryyev/SQA_project',
        github:'https://github.com/IslamNuryyev/SQA_project'
    },
    {
        image: '/work/analysis.png',
        category: 'python',
        name: ' Analysis on CO2 emission by Car',
        description: 'Finding trends and patterns in the emissions data over the specified timeframe. Used Jupyter Notebook to conduct an in-depth analysis of CO2 emissions produced by vehicles',
        link:'/',
        github:'/'
    },
    {
        image: '/work/chat.png',
        category: 'Java',
        name: 'Chit Chat',
        description: 'Developed a Java chat app with features like socket programming for real-time connections between clients and servers, utilized various Java functionalities thus enabling seamless messaging.',
        link:'/',
        github:'/'
    },
]

const uniqueCategory = ['all projects', ...new Set (projectData.map((item) => item.category))]

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategory)
    const [category, setCategory] = useState ('all projects')
    const filteredProjects = projectData.filter(project => {
        return category === 'all projects' ? project : project.category === category
    })
    // console.log(filteredProjects)

    return (
        <section className='min-h-screen pt-12'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'> My Projects</h2>
                {/* Tabs*/}
                <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                    <TabsList className='w-max grid lg:h-[80px] lg:grid-cols-7 sm:grid-cols-2 md:grid-cols-4 lg:max-w-[700px] mb-12 mx-auto sm:border md:border dark:border'>
                        {categories.map((category,index) =>{
                            return (
                                <TabsTrigger 
                                onClick ={()=> setCategory(category)}
                                value={category} 
                                key ={index} 
                                className='capitalize w-[162px] mx:w-auto md:w-auto'>{category}</TabsTrigger>
                            )
                        }) }
                    </TabsList>
                    {/** tabs content */}
                    <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                      {filteredProjects.map((project,index) => {
                        return (
                            <TabsContent value={category} key={index}>
                                <ProjectCard project ={project}/>
                            </TabsContent>
                        )
                      })}
                    </div>
                </Tabs>

            </div>
        </section>
    )
}
export default Projects