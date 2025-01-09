import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import tiburalogo from "../../public/assets/Frame 18.svg";
import northeasternLogo from "../../public/assets/images (1).png";
import annauniversitylogo from "../../public/assets/Anna_University_Logo.svg.png";
import Profilepic from "../../public/assets/WhatsApp Image 2025-01-08 at 14.12.24 1.png";
import JavaScript from "../../public/assets/JavaScript.png";
import Java from "../../public/assets/Java.png";
import Python from "../../public/assets/Python.png";
import Html from "../../public/assets/html.png";
import Css from "../../public/assets/css.png";
import Sql from "../../public/assets/Sql.png";
import React from "../../public/assets/react.png";
import Vue from "../../public/assets/vue.png";
import Angular from "../../public/assets/angular.png";
import Ionic from "../../public/assets/ionic.png";
import Bootstrap from "../../public/assets/bootstrap.png";
import materialui from "../../public/assets/Materialui.png";
import erec from "../../public/assets/ereclogin.png";
import primeng from "../../public/assets/Prime.png";
import ant from "../../public/assets/ant.png";
import wordpress from "../../public/assets/wordpress.png";
import jquery from "../../public/assets/jquery.png";
import nodejs from "../../public/assets/nodejs.png";
import express from "../../public/assets/express.png";
import javaspring from "../../public/assets/java spring.png";
import mysql from "../../public/assets/mysql.png";
import postgres from "../../public/assets/postgres.png";
import mongodb from "../../public/assets/mongodb.png";
import aws from "../../public/assets/aws.png";
import jenkins from "../../public/assets/jenkins.png";
import docker from "../../public/assets/docker.png";
import github from "../../public/assets/github.png";
import bitbucket from "../../public/assets/bitbucket.png";
import jira from "../../public/assets/jira.png";
import figma from "../../public/assets/figma.png";
import agile from "../../public/assets/agile.png";
import strongproblemsolving from "../../public/assets/strongproblemsolving.png";
import insurancemanagment from "../../public/assets/Insurance_Management_Services.jpg"
import { FaExternalLinkAlt ,FaGithub, FaLinkedin } from "react-icons/fa";


import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

const aboutStats = [
  { label: "Years of experience", value: "3+" },
  { label: "Technologies mastered", value: "10+" },
  { label: "Projects Delivered", value: "5+" },
];
const skills = [
  // Programming Languages
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: JavaScript },
      { name: "Java", icon: Java },
      { name: "Python", icon: Python },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
      { name: "SQL", icon: Sql },
    ],
  },

  // Frontend Technologies
  {
    category: "Frontend Technologies",
    items: [
      { name: "React", icon: React },
      { name: "Vue.js", icon: Vue },
      { name: "Angular", icon: Angular },
      { name: "Ionic", icon: Ionic },
      { name: "Bootstrap", icon: Bootstrap },
      { name: "Material-UI", icon: materialui },
      { name: "PrimeNG", icon:primeng },
      { name: "Ant Design", icon: ant  },
      { name: "WordPress", icon: wordpress },
      { name: "jQuery", icon: jquery },
    ],
  },
  // Backend Technologies
  {
    category: "Backend Technologies",
    items: [
      { name: "Node.js", icon: nodejs },
      { name: "Express.js", icon: express },
      { name: "Java Spring Boot", icon: javaspring },
      { name: "MySQL", icon: mysql },
      { name: "PostgreSQL", icon: postgres },
      { name: "MongoDB", icon: mongodb },
    ],
  },
  // Cloud and DevOps Technologies
  {
    category: "Cloud and DevOps Technologies",
    items: [
      { name: "AWS (EC2, S3, Lambda, IAM)", icon: aws },
      { name: "Docker", icon: docker },
      { name: "Jenkins", icon: jenkins },
    ],
  },
  // Tools
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: github },
      { name: "Bitbucket", icon: bitbucket },
      { name: "Jira", icon: jira },
      { name: "Figma", icon: figma },
    ],
  },
  // Soft Skills
  // {
  //   category: "Soft Skills",
  //   items: [
  //     {
  //       name: "Strong Problem-Solving",
  //       icon: strongproblemsolving,
  //     },
  //     { name: "Agile Methodology", icon: agile },
  //     { name: "Teamwork", icon: "/assets/icons/teamwork.svg" },
  //     { name: "Time Management", icon: "/assets/icons/time-management.svg" },
  //     { name: "Proactive Learner", icon: "/assets/icons/learning.svg" },
  //   ],
  // },
];
const education = [
  {
    degree: "Master of Science in Information Systems",
    university: "Northeastern University, Boston, MA",
    duration: "Expected May 2026",
    gpa: "GPA - 3.85",
    details: [
      "Relevant Coursework: Application Engineering and Development, Web Design and User Experience, Data Management and Database Design, Smartphones-Based Web Development (IOS)",
    ],
    icon: northeasternLogo, // Replace with the actual path to the Northeastern logo/icon
  },
  {
    degree: "Bachelor of Engineering in Electrical and Electronics",
    university: "Anna University, Chennai, India",
    duration: "June2017 - May 2021",
    details: [],
    icon: annauniversitylogo, // Replace with the actual path to the Anna University logo/icon
  },
];

const projects = [
  {
    title: "Unqueue",
    description: "E-commerce platform for selling digital products",
    image: "/assets/unqueue.webm",
    href: "https://unqueue.shop/",
  },
  {
    title: "InfiniteVPS",
    description: "High performance VPS hosting solution",
    image: "/assets/infinitevps.webm",
    href: "#",
  },
];

const workExperience = [
  {
    role: "Full Stack Developer",
    company: "Tibura Solutions India Pvt Ltd",
    duration: "Dec 2022 – May 2024",
    location: "Chennai, India",
    logo: tiburalogo,
    description: [
      "Developed and deployed critical modules for Sales and Distribution and HRMS applications, enhancing efficiency by 30% through streamlined operations and automated workflows.",
      "Built scalable RESTful APIs and managed PostgreSQL databases, ensuring 99.9% data integrity and improving performance.",
      "Leveraged AWS EC2, S3, and IAM for deployment and resource management, achieving high scalability and availability.",
      "Implemented CI/CD pipelines using Jenkins, reducing deployment time by 40% and ensuring seamless integrations.",
      "Led the design and deployment of a B2B mobile app using the Ionic framework, published on Google Play, increasing client engagement by 20%.",
      "Architected an E-commerce Integration platform with Vue.js and Node.js, reducing integration time by 40%.",
      "Spearheaded web development using WordPress for dynamic content management, cutting website delivery time by 50%.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Tibura Solutions India Pvt Ltd",
    duration: "Oct 2021 – Dec 2022",
    location: "Chennai, India",
    logo: tiburalogo,
    description: [
      "Implemented micro-frontend architecture with Webpack Module Federation, enabling 25% faster feature deployment.",
      "Optimized performance with lazy loading and code splitting, achieving 40% faster load times.",
      "Developed reusable UI components and integrated RESTful APIs, reducing redundancy by 30%.",
      "Collaborated with UX designers using Figma to create user-friendly interfaces, boosting satisfaction.",
      "Worked on cross-platform mobile apps with the Ionic framework, reducing time-to-market by 20%.",
    ],
  },
  // {
  //   role: "Software Developer Trainee",
  //   company: "Tibura Solutions India Pvt Ltd",
  //   duration: "Oct 2021 – Nov 2021",
  //   location: "Chennai, India",
  //   logo: tiburalogo,
  //   description: [
  //     "Gained hands-on experience in web development using HTML, CSS, and JavaScript.",
  //     "Developed responsive and dynamic web applications using Angular and React.",
  //     "Explored cloud deployment technologies using AWS for development.",
  //   ],
  // },
];


const services = [
  {
    service: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies.",
    icon: Code2,
  },
  {
    service: "UX Design",
    description:
      "Building intuitive, user-centric designs that drive engagement and conversion.",
    icon: Frame,
  },
  {
    service: "SEO Optimization",
    description:
      "Enhancing your website's visibility in search engines for increased organic traffic.",
    icon: SearchCheck,
  },
  {
    service: "Responsive Design",
    description:
      "Designing websites that look and perform equally well on all devices and screen sizes.",
    icon: MonitorSmartphone,
  },
  {
    service: "Backend Development",
    description:
      "Developing robust, scalable server-side logic for a wide range of web applications.",
    icon: Eye,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
          console.log(li.getAttribute("href"));
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
  id="home"
  data-scroll-section
  className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
>
  <div className={styles.intro}>
    <div
      data-scroll
      data-scroll-direction="horizontal"
      data-scroll-speed=".09"
      className="flex flex-row items-center space-x-1.5"
    >
      <span className={styles.pill}>Full Stack Developer</span>
    </div>
    <div>
      <h1
        data-scroll
        data-scroll-enable-touch-speed
        data-scroll-speed=".06"
        data-scroll-direction="horizontal"
      >
        <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
          Hello, I&apos;m
          <br />
        </span>
        <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
          Kishore Balaji.
        </span>
      </h1>
      <p
        data-scroll
        data-scroll-enable-touch-speed
        data-scroll-speed=".06"
        className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
      >
        A full-stack developer with 3+ years of experience in building scalable
        applications using Angular, React, Javascript, Java, and AWS.
        Passionate about creating user-centric designs and delivering
        innovative, efficient solutions.
      </p>
    </div>
    <div className="mt-6 flex space-x-6">
      <a
        href="https://github.com/balajiki1"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:text-gray-900"
      >
        <FaGithub className="h-8 w-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/kishore--balaji/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition duration-300 hover:text-gray-900"
      >
        <FaLinkedin className="h-8 w-8" />
      </a>
    </div>
    <span
      data-scroll
      data-scroll-enable-touch-speed
      data-scroll-speed=".06"
      className="flex flex-row items-center space-x-1.5 pt-6"
    >
      <Link href="mailto:kishorebalaji74@gmail.com" passHref>
        <Button>
          Get in touch <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </Link>
      <a
        href="https://drive.google.com/file/d/1TzAAPvz-itE7EiXKVy5MaNQhDRAAVHKv/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      > 
        <Button variant="outline">
          Resume <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </a>
    </span>

    <div
      className={cn(
        styles.scroll,
        isScrolled && styles["scroll--hidden"],
      )}
    >
      Scroll to discover{" "}
      <TriangleDownIcon className="mt-1 animate-bounce" />
    </div>
  </div>
  <div
    data-scroll
    data-scroll-speed="-.01"
    id={styles["canvas-container"]}
    className="mt-14 h-full w-full xl:mt-0"
  >
    <Suspense fallback={<span>Loading...</span>}>
      <Spline scene="https://prod.spline.design/lwIzYHoGrgf5cfFF/scene.splinecode" />
    </Suspense>
  </div>
</section>


        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col space-y-10 xl:flex-row xl:items-center xl:space-x-10 xl:space-y-0"
          >
            {/* Profile Picture on the Left */}
            <div className="flex flex-shrink-0 justify-center xl:justify-start">
              <Image
                src={Profilepic} // Ensure Profilepic is correctly imported at the top
                alt="Profile Picture"
                className="h-80 w-80 rounded-full object-cover xl:h-96 xl:w-96"
                width={320} // Define width explicitly
                height={320} // Define height explicitly
              />
            </div>

            {/* About Text on the Right */}
            <div className="flex flex-col space-y-6">
              <h2 className="text-lg leading-relaxed tracking-tighter text-foreground xl:text-xl">
                I&apos;m an experienced full-stack developer with expertise in
                Angular, React, Vue.js, Javascript, Java and AWS since 2021. My professional
                journey spans startups to mid-sized enterprises, where I’ve
                played a pivotal role in delivering scalable and user-centric
                solutions. From gathering client requirements to designing
                intuitive interfaces, and building end-to-end applications, I
                have a proven track record of driving projects to success. My
                experience includes collaborating with cross-functional teams to
                innovate and deploy high-impact solutions while optimizing
                development processes.
              </h2>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 xl:grid-cols-3">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center xl:items-start xl:text-start"
              >
                <span className="clash-grotesk text-gradient text-3xl font-semibold tracking-tight xl:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm tracking-tight text-muted-foreground xl:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="work-experience" className="py-24 ">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Work Experience
          </h2>
          <div className="space-y-8">
            {workExperience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center rounded-lg border p-6 shadow hover:shadow-lg md:flex-row"
              >
                <div className="mr-6 flex items-center justify-center rounded-full bg-gray-100 p-4">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="mb-1 text-2xl font-semibold">
                    {experience.role}
                  </h3>
                  <p className="mb-1 font-medium text-primary">
                    {experience.company} - {experience.duration}
                  </p>
                  <p className="mb-4 text-gray-600">{experience.location}</p>
                  <ul className="list-inside list-disc space-y-2">
                    {experience.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <section id="education" className="py-24">
          <div className="container mx-auto px-8">
            <h2 className="mb-12 text-center text-4xl font-bold">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg border p-6 shadow-lg hover:shadow-xl md:flex-row md:items-start"
                >
                  {/* Education Icon */}
                  <div className="mb-4 flex items-center justify-center rounded-full bg-gray-100 p-4 md:mb-0 md:mr-6">
                    <Image
                      src={edu.icon}
                      alt={`${edu.university} icon`}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>

                  {/* Education Details */}
                  <div className="flex flex-col text-center md:text-left">
                    <h3 className="text-2xl font-semibold">{edu.degree}</h3>
                    <p className="font-medium text-primary">{edu.university}</p>
                    <p className="text-600">{edu.duration}</p>
                    {edu.gpa && <p className="text-600">{edu.gpa}</p>}
                    {edu.details.length > 0 && (
                      <ul className="mt-4 list-inside list-disc space-y-2 text-600">
                        {edu.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Projects Section */}
        {/* Projects Section */}
     



<section id="projects" className="py-24">
  <div className="container mx-auto px-8">
    <h2 className="mb-12 text-center text-4xl font-bold ">
      Projects
    </h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
      {/* Erecruiter Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:shadow-2xl"
      >
        <div className="relative overflow-hidden">
          <Image
            src={erec}
            alt="Erecruiter"
            width={500}
            height={300}
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800">Erecruiter</h3>
          <p className="mt-3 text-gray-600">
            A recruitment platform with roles: Admin, Employee, and Candidate,
            streamlining job management and interview processes.
          </p>
          <p className="mt-2 font-semibold text-gray-600">
            Tech Stack: React, Express.js, Node.js, Node Mailer, MongoDB
          </p>
          <ul className="mt-3 list-inside list-disc text-gray-600">
            <li>
              Integrated Node Mailer for OTP-based authentication and email
              notifications.
            </li>
            <li>
              Deployed frontend on Netlify and backend services on Render for
              high availability.
            </li>
            <li>
              Implemented dynamic role-based access control to enhance platform
              security and usability.
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <Link
              href="https://github.com/balajiki1/Erecruiter"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                className="flex items-center px-4 py-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100"
              >
                GitHub
                <FaExternalLinkAlt className="ml-2 h-4 w-4" />
              </a>
            </Link>
            <Link
              href="https://e-recruiter.netlify.app"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                className="flex items-center px-4 py-2 bg-gray-800 text-white transition-colors duration-300 hover:bg-gray-700"
              >
                Live Website
                <FaExternalLinkAlt className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Insurance Management System Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 hover:shadow-2xl"
      >
        <div className="relative overflow-hidden">
          <Image
            src={insurancemanagment}
            alt="Insurance Management System"
            width={500}
            height={300}
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Insurance Management System
          </h3>
          <p className="mt-3 text-gray-600">
            A platform to streamline insurance-related operations with features
            like policy management, claims processing, and payment handling.
          </p>
          <p className="mt-2 font-semibold text-gray-600">
            Tech Stack: Java, Swing UI, SMTP (Oracle Mail Jar), MySQL
          </p>
          <ul className="mt-3 list-inside list-disc text-gray-600">
            <li>Role-based access for secure and efficient workflows.</li>
            <li>
              Implemented a MySQL schema to manage policies, claims, and
              customer data efficiently.
            </li>
            <li>
              Scalable architecture supporting email notifications and document
              uploads.
            </li>
          </ul>
          <div className="mt-4 flex space-x-4">
            <Link
              href="https://github.com/balajiki1/InsuranceManagement"
              passHref
              legacyBehavior
            >
              <a
                target="_blank"
                className="flex items-center px-4 py-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100"
              >
                GitHub
                <FaExternalLinkAlt className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      </div>
      <section id="skills" className="py-24">
  <div className="container mx-auto px-8">
    <h2 className="mb-12 text-center text-4xl font-bold">Skills</h2>
    {skills.map((skillCategory, index) => (
      <div key={index} className="mb-12">
        <h3 className="mb-6 text-2xl font-semibold">{skillCategory.category}</h3>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {skillCategory.items.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-lg border p-4 text-center shadow-lg hover:shadow-xl"
            >
             <Image
  src={skill.icon}
  alt={`${skill.name} icon`}
  width={64}
  height={64}
  className="mb-4 h-16 w-16 object-cover object-center"
/>

              <h4 className="text-lg font-medium">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
      {/* Contact */}
      <section id="contact" data-scroll-section className="mt-24 mb-64">
  <div
    data-scroll
    data-scroll-speed=".4"
    data-scroll-position="top"
    className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
  >
    <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
      Let&apos;s work{" "}
      <span className="text-gradient clash-grotesk">together.</span>
    </h2>
    <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
      I&apos;m currently available for Summer Intership 2025 and open to
      discussing new projects.
    </p>
    <Link href="mailto:kishorebalaji74@gmail.com" passHref>
      <Button className="mt-6">Get in touch</Button>
    </Link>
  </div>
</section>

    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
