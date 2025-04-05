"use client";

import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
//component
import Form from "@/components/Form";

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
        <div className="mb-6 grid pt-12 xl:mb-24 xl:h-[480px] xl:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="text-primary mb-4 flex items-center gap-x-4 text-lg">
              <span className="bg-primary h-[2px] w-[30px]"></span>
              {showContent && (
                <div>{getGreeting(languages[greetingIndex])}</div>
              )}
            </div>
            <h1 className="h1 mb-8 max-w-md "> Let's work together</h1>
            <p className="subtitle max-w-[400px ]">
              I welcome collaboration in software and web development. With a
              passion for innovation and a knack for delivering top-notch
              solutions, I'm ready to bring your ideas to life. Whether it's
              custom software, web applications, or refining your online
              presence, let's join forces to make a lasting impact in the
              digital landscape. Together, we can turn ideas into reality and
              make a meaningful impact in the digital world.
            </p>
          </div>
          <div className="bg-contact_illustration_light dark:bg-contact_illustration_dark hidden w-full bg-contain bg-top bg-no-repeat xl:flex"></div>
        </div>
        <div className="m-24 grid xl:mb-32 xl:grid-cols-2">
          <div className="mb-12 flex flex-col gap-y-4 text-base xl:mb-24  xl:gap-y-14 xl:text-lg">
            {/** Mail */}
            <div className=" flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>parekhbhargav25@gmail.com</div>
            </div>
            {/** Mail */}
            <div className=" flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+1 (***) *** ****</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};
export default Contact;
