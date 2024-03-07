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
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'ddjdjfdfdsffjsfsfjsfs dfjsdfjdsfdjsfjdsfds dfjsndjfdsjfndsjfndsfnds',
        link:'/',
        github:'/'
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'ddjdjfdfdsffjsfsfjsfs dfjsdfjdsfdjsfjdsfds dfjsndjfdsjfndsjfndsfnds',
        link:'/',
        github:'/'
    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'ddjdjfdfdsffjsfsfjsfs dfjsdfjdsfdjsfjdsfds dfjsndjfdsjfndsjfndsfnds',
        link:'/',
        github:'/'
    },
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'ddjdjfdfdsffjsfsfjsfs dfjsdfjdsfdjsfjdsfds dfjsndjfdsjfndsjfndsfnds',
        link:'/',
        github:'/'
    },
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'ddjdjfdfdsffjsfsfjsfs dfjsdfjdsfdjsfjdsfds dfjsndjfdsjfndsjfndsfnds',
        link:'/',
        github:'/'
    },
    {
        image: '/work/2.png',
        category: 'react js',
        name: 'Nexa Website',
        description: 'ddjdjfdfdsffjsfsfjsfs dfjsdfjdsfdjsfjdsfds dfjsndjfdsjfndsjfndsfnds',
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
                    <p className='subtitle mb-8'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nisi quas a velit id autem facere, neque temporibus, suscipit atque consequuntur laboriosam. Voluptas hic beatae, mollitia itaque quaerat laboriosam. Eos.</p>
                    <Link href='/projects'>
                        <Button> All Projects</Button>
                    </Link>
                </div>
                {/* Slider */}
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                        {/*show only the first 4 projects */}
                        {projectData.slice(0,4).map((project,index) => {
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