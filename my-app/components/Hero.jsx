import Link from 'next/link'
import {Button} from './ui/button' 
import {Download, Send} from 'lucide-react'
import image from '../public/hero/developer.png'

import { RiTeamFill, RiTodoFill, RiArrowDownSLine} from 'react-icons/ri'

import DevImg from './DevImg'
import Badge from './Badge'
import Socials from './Socials'

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
        <div className='container mx-auto'>
            <div classname='flex justify-between gap-x-8'>
                <div className=' hidden xl:flex relative'>
                    <div className='light:bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
                    <Badge 
                    containerStyles='absolute top-[24%] -left-[5rem]'
                    icon={<RiTeamFill />} 
                    endCountNum={3} 
                    badgeText='Years of Experience' />
                    
                    <Badge 
                    containerStyles='absolute top-[70%] -left-[1rem]'
                    icon={<RiTodoFill />} 
                    endCountNum={8} 
                    badgeText='Finished Projects' />

                    <DevImg containerStyles={"bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"} imgSrc={image} />

                    </div>
                </div>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'> Web Developer</div>
                        <h1 className='h1 mb-4'> Hello, My name is bhargav</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'> brief introdcution insight in tojfjndmkffdsjvkm</p>
                    <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                        <Link href='/contact'>
                            <Button className='gap-x-2'> Contact me <Send size={18} /> </Button>
                        </Link> 
                        <Button variant = 'secondary' className='gap-x-2'> 
                            Download CV <Download size={18} /> 
                        </Button>

                    </div>
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
                </div>
                {/* <div className=' xl:flex relative'>
                    <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>

                    </div>
                </div> */}
            </div>
            <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                <RiArrowDownSLine className='text-3xl text-primary' />
            </div>
        </div>
    </section>
  );
}
export default Hero;
