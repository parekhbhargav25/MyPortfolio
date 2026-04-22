'use client'
import React, {useState} from 'react'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
    {
        image: '/work/lekhya.jpg',
        category: 'react.js Next.js postgresSQL AWS',
        name: 'Lekhya',
        description: 'AI-powered expense tracker built with Next.js and TypeScript. Features OpenAI receipt parsing, a Bento-style analytics dashboard, NextAuth authentication, and a LangChain assistant for natural-language queries over financial data.',
        link: 'https://lekhya-seven.vercel.app',
        github: 'https://github.com/parekhbhargav25/Lekhya',
        tags: ['AWS', 'PostgreSQL']
    },
    {
        image: '/work/fixify.png',
        category: 'react.js MongoDB',
        name: 'Fixify',
        description: 'A home services app built to connect users with local service providers. The frontend uses React + Vite, tested with Selenium. Backend on MongoDB, tested with Jest. Deployed on Railway and uses GitHub Actions for CI/CD.',
        link:'https://fixifyawsamplify-production.up.railway.app/',
        github:'https://github.com/srithikraj/fixify',
        tags: ['AWS']
      },
  {
        image: '/work/Wordle.png',
        category: 'react.js AWS',
        name: 'Wordle',
        description: 'Created a Wordle clone utilizing React, empowering utilization of diverse React features and advanced data structures, demonstrating comprehensive mastery of frontend development.',
        link:'https://main.d3rcz4bik3h08p.amplifyapp.com/',
        github:'https://github.com/parekhbhargav25/WordleClone'
    },
    {
        image: '/work/portfolio.png',
        category: 'react.js Next.js AWS',
        name: 'bhargavdev.com',
        description: 'Built my portfolio with React.js, Next.js, and Tailwind CSS for dynamic, responsive design. Hosted on AWS Route53 for reliability and global accessibility, with AWS Amplify for streamlined CI/CD.',
        link:'https://bhargavdev.com/',
        github:'https://github.com/parekhbhargav25/MyPortfolio',
        tags: ['AWS']
    },

    {
        image: '/work/registerMe.jpg',
        category: 'react.js',
        name: 'RegisterMe',
        description: 'A full stack web application called RegisterMe. This project was developed using React for the frontend, AWS DynamoDB and AWS Amplify for backend services, and Node.js for server-side logic.',
        link:'https://www.youtube.com/watch?v=E8UK1b9H6R4',
        github:'https://github.com/Lava-Java/RegisterMe-v2',
        tags: ['AWS']
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

const parseTags = (category) => category.split(/\s+/).filter(t => t && t !== '+')
const uniqueTags = [...new Set(projectData.flatMap(p => parseTags(p.category)))]

const Projects = () => {
    const [selected, setSelected] = useState(() => new Set(uniqueTags))

    const toggleCategory = (tag) => {
        setSelected(prev => {
            const next = new Set(prev)
            if (next.has(tag)) next.delete(tag)
            else next.add(tag)
            return next
        })
    }

    const filteredProjects = projectData.filter(project =>
        parseTags(project.category).some(tag => selected.has(tag))
    )

    return (
        <section className='min-h-screen pt-12'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'> My Projects</h2>

                <div className='flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto'>
                    {uniqueTags.map((tag) => {
                        const isActive = selected.has(tag)
                        return (
                            <button
                                key={tag}
                                onClick={() => toggleCategory(tag)}
                                className={`capitalize px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                                    isActive
                                        ? 'bg-primary text-white border-primary hover:bg-primary/90'
                                        : 'bg-transparent text-foreground border-border hover:border-primary hover:text-primary'
                                }`}
                            >
                                {tag}
                            </button>
                        )
                    })}
                    <button
                        onClick={() => setSelected(selected.size === 0 ? new Set(uniqueTags) : new Set())}
                        className='px-4 py-2 rounded-full text-sm font-medium border border-border bg-transparent text-muted-foreground hover:text-primary hover:border-primary transition-all'
                    >
                        {selected.size === 0 ? 'Select all' : 'Clear all'}
                    </button>
                </div>

                <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 mb-24 xl:mb-48'>
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Projects