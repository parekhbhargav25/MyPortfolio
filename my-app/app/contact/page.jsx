'use client'

import { MailIcon, HomeIcon,PhoneCall } from "lucide-react"
import { useState, useEffect } from "react";
//component
import Form from "@/components/Form"

const Contact = () => {
    const languages = ["gujarati", "spanish", "french", "chinese"];
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [showContent, setShowContent] = useState(false);

    const getGreeting = (language) => {
        switch (language) {
        case "gujarati":
            return "Kem cho 👋"; // Gujarati greeting
        case "spanish":
            return "¡Hola! 👋"; // Spanish greeting
        case "french":
            return "Bonjour! 👋"; // French greeting
        case "chinese":
            return "Nǐn hǎo! 👋"; // French greeting
        default:
            return "Hello! 👋"; // Default greeting
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
        }, 1000); // Change the delay time as per your requirement

        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div className="container mx-auto">
                <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                        <span className="w-[30px] h-[2px] bg-primary"></span>
                        {showContent && (
                                <div>
                                {getGreeting(languages[greetingIndex])}
                                </div>
                            )}
                        </div>
                        <h1 className="h1 max-w-md mb-8 "> Let's work together</h1>
                        <p className="subtitle max-w-[400px ]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur deleniti labore atque at harum ab quaerat corporis nostrum consequatur dolorum, incidunt pariatur odio facere dolor totam quis, in asperiores?</p>
                    </div>
                    <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
                </div>
                <div className="grid xl:grid-cols-2 m-24 xl:mb-32">
                    <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24  text-base xl:text-lg">
                        {/** Mail */}
                        <div className=" flex items-center gap-x-8">
                            <MailIcon size={18} className="text-primary" />
                            <div>parekhbhargav25@gmail.com</div>
                        </div>
                        {/** address */}
                        <div className=" flex items-center gap-x-8">
                            <HomeIcon size={18} className="text-primary" />
                            <div>26, Toddville Road, Brampton ON, L6P 3J2</div>
                        </div>
                        {/** Mail */}
                        <div className=" flex items-center gap-x-8">
                            <PhoneCall size={18} className="text-primary" />
                            <div>+1 (647) 974 1471</div>
                        </div>
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    )
}
export default Contact