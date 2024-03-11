import {GanttChartSquare, Blocks, Gem} from 'lucide-react'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card'


const services = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: 'Software Development',
        description:"As a software developer, I specialize in creating efficient and user-friendly solutions tailored to your needs. Whether you're a startup or an established business, let's collaborate to bring your vision to life! Check Out my Project page to learn more about"
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8}/>,
        title: 'Web Development',
        description:"As a web developer, I specialize in crafting intuitive and responsive websites that captivate audiences and drive results. Whether you're a business, organization, or individual, let's bring your online vision to life! Check Out my Project page to learn more about"
    },
    {
        icon: <Gem size={72} strokeWidth={0.8}/>,
        title: 'Data Analysis',
        description:'Unlocking actionable insights from complex data is my specialty. With expertise in statistical analysis, data visualization, and predictive modelling, I specialize in transforming complex data into actionable insights.'
    },
]
const Services = () => {
    return (
        <section className='pt-24 mb-12 xl:mb-36 '>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'> My Experties</h2>
                
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                    {services.map((item,index) =>{
                        return (
                            <Card className='w-full max-w-[424px] h-[350px] flex flex-col pt-24 pb-10 justify-center items-center relative' key={index}>
                                <CardHeader className='text-primary absolute -top-[60px]'>
                                    <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'> {item.icon}</div>
                                </CardHeader>
                                <CardContent className="justify-center text-center ">
                                    <CardTitle className='mb-4'> 
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription className='text-lg'>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;