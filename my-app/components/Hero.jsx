'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import {Button} from './ui/button' 
import {Download, Send} from 'lucide-react'
import image from '../public/hero/developer.png'

import { RiTeamFill, RiTodoFill, RiArrowDownSLine} from 'react-icons/ri'

import DevImg from './DevImg'
import Badge from './Badge'
import Socials from './Socials'


const handleButtonClick = () => {
    // Replace 'https://example.com' with the URL you want to open in a new tab
  window.open('https://drive.google.com/file/d/1JhzwgAxkCrI-mmW4-vTCVLeLuPmRw7x8/view?usp=drive_link', '_blank');
    };


const Hero = () => {

    const languages = ["english", "gujarati", "Japanese", "arabic", "Italian", "spanish", "french", "chinese"];
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [showContent, setShowContent] = useState(false);

    const getGreeting = (language) => {
        switch (language) {
            case "gujarati":
                return { text: "કેમ છો 🙏", color: "#e91e63" }; // Gujarati greeting
            case "Italian":
                return { text: "Ciao! 🤌", color: "#0097a7" }; // italian greeting
            case "arabic":
                return { text: "مرحبًا! 👋", color: "#ef6c00" }; // arabic greeting
            case "Japanese":
                return { text: "こんにちは! 🫰", color: "#8bc34a" }; // Spanish greeting
            case "spanish":
                return { text: "Hola! 🫰", color: "#f44336" }; // Spanish greeting
            case "french":
                return { text: "Bonjour! 👋", color: "#9c27b0" }; // French greeting
            default:
                return { text: "Hello! 🤙", color: "#26a69a" }; // Default greeting
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
        setShowContent(true);
        }, 1000 * languages.length); // Change the delay time as per your requirement

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
        setGreetingIndex((prevIndex) => (prevIndex + 1) % languages.length);
        }, 3000); // Change the delay time as per your requirement

        return () => clearInterval(interval);
    }, []);
    const { text, color } = getGreeting(languages[greetingIndex]);
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
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'> Software / Web Developer</div>
                    <h1 className='h1 mb-4'>
                        <span className='h1 mb-4' style={{ color }}>{text}</span> My name is Bhargav
                    </h1>

                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'> Passionate and experienced Software Engineer with over 2 years in web, software and backend development. Proficient in writing clean, maintainable code for diverse projects. Comfortable collaborating in teams of all sizes, adaptable to both remote and office environments.</p>
                    <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                        <Link href='/contact'>
                            <Button className='gap-x-2'> Contact me <Send size={18} /> </Button>
                        </Link> 
                            <Button onClick={handleButtonClick} variant = 'secondary' className='gap-x-2'> 
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
