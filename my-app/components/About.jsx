import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { DiDatabase } from "react-icons/di";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Bhargav Parekh",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+1 (***)-***-****",
  },
  {
    icon: <MailIcon size={20} />,
    text: "parekhbhargav25@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Graduating in Aug 2025",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "MEng is Elect & Comp Eng (Software Eng)", 
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Toronto, ON",
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Languages:",
        skill: "Python, C, C++, Java, JavaScript, HTML, CSS, SQL, PL/SQL",
      },
      {
        name: "Databases:",
        skill: "MySQL, PostgreSQL, NoSQL, MongoDB, AWS RDS, AWS DynamoDB",
      },
      {
        name: "Technologies:",
        skill: "VS code, MySQL, React.js, Node.js, AWS, GraphQL, Git, Linux",
      },
      {
        name: "Concepts:",
        skill:
          "Object Oriented Programming, Functional programming, Agile, Data Structures and Algorithms, CI/CD, SDLC, REST APIs",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/physics.png",
      },
      {
        imgPath: "/about/git.png",
      },
      {
        imgPath: "/about/java-script.png",
      },
      {
        imgPath: "/about/linux.png",
      },
      {
        imgPath: "/about/python.png",
      },
      {
        imgPath: "/about/AWS.svg.png",
      },
      {
        imgPath: "/about/java.png",
      },
      {
        imgPath: "/about/html.png",
      },
      {
        imgPath: "/about/c-.png",
      },
      {
        imgPath: "/about/mysql.png",
      },
      {
        imgPath: "/about/nodejspn.png",
      },
      {
        imgPath: "/about/mongodbORG.png",
      },
      {
        imgPath: "/about/bootstrap.png",
      },
    ],
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "University of Waterloo",
        degree: "MEng in Electrical and Computer Engineering",
        years: "2024-2025",
      },
      {
        university: "Ontario Tech University",
        degree: "Hons Bachelor's of Computer Sceince",
        years: "2021-2023",
      },
      {
        university: "Seneca College",
        degree: "Advanced Diploma in Computer Programming and Analysis",
        years: "2018-2020",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "MPAC",
        role: "Junior System Developer",
        years: "May 2022- Dec 2022",
      },
      {
        company: "Tazwiz Inc.",
        role: "Full Stack Web Developer",
        years: "June 2019 - Dec 2019",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mx-auto mb-8 text-center xl:mb-16">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative hidden xl:flex">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/Bhargav1.png"
            />
          </div>
          <div
            // style={{ paddingLeft: "10%" }}
            className="flex-1 items-center justify-center text-center lg:pl-24"
          >
            <Tabs
              className="items-center justify-center text-center"
              defaultValue="personal"
            >
              <TabsList className="grid w-full justify-center text-center xl:max-w-[520px] xl:grid-cols-3 xl:border dark:border-none ">
                <TabsTrigger
                  className="w-[162px] justify-center text-center xl:w-auto"
                  value="personal"
                >
                  Personal Info{" "}
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] justify-center text-center xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] justify-center text-center xl:w-auto"
                  value="skills"
                >
                  Skills{" "}
                </TabsTrigger>
              </TabsList>
              <div className="mt-12 text-lg xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mx-auto mb-4 max-w-xl xl:mx-0 ">
                      {" "}
                      Continuously learning and evolving in the ever-changing
                      tech landscape
                    </h3>
                    <p className="subtitle mx-auto max-w-xl xl:mx-0 ">
                      I specialize in creating intuitive softwares systems and
                      websites that leverage cutting-edge technology to deliver
                      dynamic and engaging user experiences.
                    </p>
                    <div className="mb-12 grid gap-4 xl:grid-cols-2">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="item-center mx-auto flex gap-x-4 xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary"> {item.icon}</div>
                            <div> {item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-3">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-border border-b"></div>
                      <div>English, Hindi, Gujarati</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid gap-y-8 md:grid-cols-2">
                      <div className="flex flex-col gap-y-6">
                        <div className="text-primary flex items-center gap-x-4 text-[22px]">
                          <Briefcase />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="bg-border relative ml-2 h-[84px] w-[1px] ">
                                    <div className="bg-primary absolute -left-[5px] h-[11px] w-[11px] rounded-full transition-all duration-500 group-hover:translate-y-[84px]">
                                      {" "}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none ">
                                      {company}
                                    </div>
                                    <div className="text-muted-foreground mb-4 text-lg leading-none">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="text-primary flex items-center gap-x-4 text-[22px]">
                          <GraduationCap size={28} />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, degree, years } = item;
                              return (
                                <div className="group flex gap-x-8" key={index}>
                                  <div className="bg-border relative ml-2 h-[84px] w-[1px] ">
                                    <div className="bg-primary absolute -left-[5px] h-[11px] w-[11px] rounded-full transition-all duration-500 group-hover:translate-y-[84px]">
                                      {" "}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none ">
                                      {university}
                                    </div>
                                    <div className="text-muted-foreground mb-4 text-lg leading-none">
                                      {degree}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-8 ">What i Use Everyday</h3>
                    <div className="mb-16">
                      {/* <h4 className="text-xl font-semibold mb-2"> Skills</h4> */}
                      <div className="border-border mb-4 border-b"></div>
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name, skill } = item;
                            return (
                              <div
                                className="w-2/2 mx-auto mb-6 text-center xl:mx-0 xl:text-left"
                                key={index}
                              >
                                <span
                                  style={{ color: "#e53935" }}
                                  className="font-medium"
                                >
                                  {name}{" "}
                                </span>
                                <span>{skill} </span>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-xl font-semibold xl:text-left">
                        Tools
                      </h4>
                      <div className="border-border mb-4 border-b"> </div>
                      {/*tools lidt */}
                      <div className="grid justify-center gap-x-6 gap-y-6  sm:grid-cols-8 xl:grid-cols-6 xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt="tools"
                                priority
                              />
                            </div>
                          );
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
  );
};
export default About;
