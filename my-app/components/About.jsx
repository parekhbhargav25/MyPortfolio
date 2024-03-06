import DevImg from "./DevImg";
import Image from 'next/image'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react";

const infoData = [
    {
        icon: <User2 size = {20}/>,
        text: 'Bhargav Parekh'
    },
    {
        icon: <PhoneCall size = {20}/>,
        text: '+1 (647)-974-1471'
    },
    {
        icon: <MailIcon size = {20}/>,
        text: 'parekhbhargav25@gmail.com'
    },
    {
        icon: <Calendar size = {20}/>,
        text: 'Born on May 1997'
    },
    {
        icon: <GraduationCap size = {20}/>,
        text: "Hons Bachelor's of Computer Science"
    },
    {
        icon: <HomeIcon size = {20}/>,
        text: 'Toronto, ON'
    }

]

const skillData = [
    {
        title: 'skills',
        data:[
            {
                name: 'Front End Developent'
            },
            {
                name: 'React, HTML, CSS, JavaScript'
            },
            {
                name: 'Back End Development'
            },
            {
                name: 'Python, Java, C/C++, '
            },
        ]
    },
    {
        title: 'tools',
        data:[
            {
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/figma.svg'
            },
            {
                imgPath: '/about/notion.svg'
            },
            {
                imgPath: '/about/wordpress.svg'
            },
        ]
    }
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: "Ontario Tech University",
                degree: "Hons Bachelor's of Computer Sceince",
                years: '2021-2023'
            },
            {
                university: "Seneca College",
                degree: "Advanced Diploma in Computer Programming and Analysis",
                years: '2018-2020'
            }
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: "MPAC",
                role: "Junior System Developer",
                years: 'May 2022- Dec 2022'
            },
            {
                company: "Tazwiz Inc.",
                role: "Full Stack Web Developer",
                years: 'June 2019 - Dec 2019'
            }
        ]
    }
]

const About = () => {
    const getData =(arr, title) => {
        return arr.find((item) => item.title === title)
    }

    return (
        <section>
           <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                About me
            </h2>
            <div className="flex flex-col xl:flex-row" >
                {/* image */}
                <div  className="hidden xl:flex relative">
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-n0-repeat relative' imgSrc='/about/Bhargav1.png'/>
                </div>
                <div style={{ paddingLeft: '10%' }}className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none ">
                            <TabsTrigger className="w-[162px] xl:w-auto justify-center text-center" value = 'personal'>Personal Info </TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto justify-center text-center" value = 'qualification'>Qualification</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto justify-center text-center" value = 'skills'>Skills </TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                            <TabsContent value = "personal">
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 max-w-xl mx-auto xl:mx-0 mb-4 "> Unmatched service quality for over 5 years</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0 "> 
                                    I Specialize in crafting intuative websites with cutting edge technology
                                        deliverying dynamic and engaging user experience
                                    </p>
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((item, index) => {
                                            return  (<div className="flex item-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                <div className="text-primary"> {item.icon}</div>
                                                <div> {item.text}</div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-col gap-y-3">
                                        <div className="text-primary">Language Skills</div>
                                        <div className="border-b border-border"></div>
                                        <div>English, Hindi, Gujarati</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value = "qualification"> 
                                <div>
                                    <h3 className="h3 mb-8 text-center xl:text-left"> 
                                        My Awesome Journey 
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase />
                                                <h4 className="capitalize font-medium"> 
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8 ">
                                                {getData(qualificationData, 'experience').data.map((item, index) =>{
                                                    const {company,role,years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key ={index}
                                                        >
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"> </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2 ">{company}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>

                                                    );
                                                }
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-y-6">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28} />
                                                <h4 className="capitalize font-medium"> 
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8 ">
                                                {getData(qualificationData, 'education').data.map((item, index) =>{
                                                    const {university,degree,years} = item;
                                                    return (
                                                        <div className="flex gap-x-8 group" key ={index}
                                                        >
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2 ">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"> </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2 ">{university}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{degree}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>

                                                    );
                                                }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value = "skills">
                                <div className="text-center xl:text-left ">
                                    <h3 className="h3 mb-8 ">What i Use Everyday</h3>
                                    <div className="mb-16">
                                        <h4 className="text-xl font-semibold mb-2"> Skills</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        <div>
                                            {getData(skillData, 'skills').data.map((item, index) =>{
                                                const {name}= item
                                                return (
                                                    <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                        <div className="font-medium">{name}</div>
                                                    </div>
                                                )
                                            } 
                                            )}
                                        </div>

                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2 xl:text-left"> 
                                            Tools 
                                        </h4>
                                        <div className="border-b border-border mb-4"> </div>
                                        {/*tools lidt */}
                                        <div className="flex gap-x-8 justify-center xl:justify-start">
                                            {getData(skillData, 'tools').data.map((item, index) =>{
                                                const {imgPath} = item;
                                                return (
                                                    <div key ={index}>
                                                        <Image src={imgPath} width={48} height ={48} alt='tools' priority/>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                        </div>
                    </Tabs>
                </div>
            </div>
           </div> 
        </section>
    )
}
export default About;