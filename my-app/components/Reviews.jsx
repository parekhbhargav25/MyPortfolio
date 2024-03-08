'use client'

import Image from 'next/image'

import {Swiper, SwiperSlide} from 'swiper/react'


// import swipper style
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import {Pagination} from 'swiper/modules'


import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'

const reviewData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Richard Thompson',
        job: 'system developer',
        review: 'lorem sddfdsfsdf fsfsf dsadwfs gfddsfsf dfsdfsdf dfsdf',

    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Richard Thompson',
        job: 'Software developer',
        review: 'lorem sddfdsfsdf fsfsf dsadwfs gfddsfsf dfsdfsdf dfsdf',

    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Richard Thompson',
        job: 'Developer Manager',
        review: 'lorem sddfdsfsdf fsfsf dsadwfs gfddsfsf dfsdfsdf dfsdf',

    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Richard Thompson',
        job: 'system developer',
        review: 'lorem sddfdsfsdf fsfsf dsadwfs gfddsfsf dfsdfsdf dfsdf',

    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Richard Thompson',
        job: 'system developer',
        review: 'lorem sddfdsfsdf fsfsf dsadwfs gfddsfsf dfsdfsdf dfsdf',

    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Richard Thompson',
        job: 'system developer',
        review: 'lorem sddfdsfsdf fsfsf dsadwfs gfddsfsf dfsdfsdf dfsdf',

    },
]

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32 '>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 text-center mx-auto'> Reviews </h2>
            {/* Slider */}
            <Swiper slidesPerView={1} breakpoints={{
                640: {slidesPerView: 2},
                1400: {slidesPerView: 3},
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination ={{
                clickable:true
            }}
            className='h-[350px]'
            >
                {reviewData.map ((person,index) =>{
                    return (
                        <SwiperSlide key={index}>
                            <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                <CardHeader classNamep='p-0 mb-10'>
                                    <div className='flex items-center gap-x-4'>
                                        {/** image */}
                                        <Image 
                                        src={person.avatar}
                                        width={70}
                                        height={70}
                                        alt=''
                                        priority
                                        />
                                        <div className='flex flex-col'>
                                            <CardTitle>{person.name}</CardTitle>
                                            <p> {person.job}</p>
                                        </div>

                                    </div>
                                </CardHeader>
                                <CardDescription className='text-lg text-muted-foreground'> {person.review}</CardDescription>
                            </Card>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>
    </section>
  )
}

export default Reviews