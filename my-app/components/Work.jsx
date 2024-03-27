'use client'
import Link from 'next/link'
import {Button} from "./ui/button"

import {Swiper, SwiperSlide} from 'swiper/react'


// import swipper style
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import {Pagination} from 'swiper/modules'

//components
import ProjectCard from './ProjectCard'

const projectData = [
    {
        image: '/work/portfolio.png',
        category: 'react.js Next.js',
        name: 'bhargavdev.com',
        description: 'Built my portfolio with React.js, Next.js, and Tailwind CSS for dynamic, responsive design. Hosted on AWS Route53 for reliability and global accessibility, with AWS Amplify and git for streamlined CI/CD.',
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
        category: 'react.js + python flask',
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

const Work =() =>{
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto'>
                <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                    <h2 className='section-title mb-4'> Latest Projects</h2>
                    <p className='subtitle mb-8'> Here are the projects that represent my proudest achievements from my academic career. Each one has been a valuable learning experience, reinforcing my dedication and ability to deliver quality solutions.</p>
                    <Link href='/projects'>
                        <Button> All Projects</Button>
                    </Link>
                </div>
                {/* Slider */}
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper className='h-[590px]' slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                        {/*show only the first 4 projects */}
                        {projectData.slice(0,5).map((project,index) => {
                            return (
                                <SwiperSlide kye={index}>
                                    <ProjectCard project={project}/>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>

        </section>
    )
}

export default Work