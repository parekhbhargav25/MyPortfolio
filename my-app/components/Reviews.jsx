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
        avatar: '/reviews/Baps_logo.svg',
        name: 'BAPS Charities',
        job: 'Youth Mentor',
        review: "Since 2012, I've been passionately mentoring teenagers on life skills and promoting an addiction-free lifestyle, fostering positive growth and development in young minds. Gives me sense of fulfillment",

    },
    {
        avatar: '/reviews/bapsCharities.jpeg',
        name: 'BAPS Charities',
        job: 'Annual Walkathon',
        review: 'annually participate in walkathons to support various charitable foundations, including SickKids Foundation, William Osler Health System, CNIB Foundation, and Victoria General Hospital Foundation.',

    },
    {
        avatar: '/reviews/Baps_logo.svg',
        name: 'Baps Swaminarayan Sanstha',
        job: 'Construction of Akshardham Temple',
        review: "Volunteered at Robbinsville Akshardham during its construction phase for about a year, actively participating in various team settings to contribute to the project's success."

    }
]

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32 '>
        <div className='container mx-auto'>
            <h2 className='section-title p-10  mb-12 text-center mx-auto'> Volunteer Work </h2>
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
            className='h-[470px]'
            >
                {reviewData.map ((person,index) =>{
                    return (
                        <SwiperSlide key={index}>
                            <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[400px]'>
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