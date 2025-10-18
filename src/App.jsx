import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { AcademicCapIcon, Bars3Icon, BuildingLibraryIcon, XMarkIcon } from '@heroicons/react/24/outline';
import axios from "axios";
import { Typography } from "@material-tailwind/react";

function Words() {
  return (<><h1 className="mt-4 text-4xl sm:text-5xl font-bold text-indigo-600 leading-snug">
  Full-Stack Engineer & Student<br />
  Aspiring to Build Better Software Solutions
</h1>
</>)
}

import { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa"; 


function ScrollArrow({ className = "" }) {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      setShowArrow(scrollTop + windowHeight < docHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showArrow) return null;

  return (
    <div
      className={`flex justify-center mt-10 ${className} animate-bounce text-indigo-500 text-4xl`}
    >
      <FaChevronDown />
    </div>
  );
}


const projects = [
  {
    id: 1,
    title: "Nexa AI – Intelligent Sales Agent Platform",
    description:
      "Engineered an AI-driven sales assistant integrating Gemini API for intelligent product recommendations, inventory tracking, order placement, and fulfillment. Designed a gRPC-based microservice architecture for modular services, improving system scalability and response time by 30%.",
    category: { title: "Live & Github", href: "https://t.me/NexaAgenticAI_bot" },
    techStack: "React.js | Node.js | gRPC | Gemini API",
    href: "https://github.com/Jeganath18/AI-Sales-Agent",
  },
  {
    id: 2,
    title: "OCPP 1.6 Charger Debugging Tool",
    description:
      "Built a WebSocket-based OCPP simulator for EV charger–server communication at Plugzmart (IITMRP company). Implemented charger request/response handling and real-time message logs, improving QA debugging efficiency by 35%.",
    category: { title: "Github", href: "https://github.com/Jeganath18/OCPP-CHARGER-SIMULATOR" },
    techStack: "Angular | Node.js | Express.js | WebSocket | REST API",
    href: "https://github.com/Jeganath18/OCPP-CHARGER-SIMULATOR",
  },
  {
    id: 3,
    title: "Full-Stack CRM Application",
    description:
      "Developed a secure CRM system from scratch for an accounting firm to manage clients, leads, and financial operations. Designed role-based authentication and optimized MySQL schema for scalable CRUD operations, improving data consistency by 20%.",
    category: { title: "Github", href: "https://github.com/Jeganath18/CRM-web" },
    techStack: "React.js | Node.js | Express.js | MySQL | Tailwind CSS",
    href: "https://github.com/Jeganath18/CRM-web",
  },
  {
    id: 4,
    title: "Weather4U",
    description:
      "Developed a web app that shows real-time temperature, humidity, and AQI for any city by entering its name. Integrated external weather APIs to provide accurate and up-to-date information.",
    category: { title: "Github", href: "#https://github.com/Jeganath18/Weather4U_WebApp" },
    techStack: "React.js | Node.js | OpenWeather API",
    href: "#",
  },
];



const posts = [
  {
    id: 1,
    description:
      'I had the pleasure of working with Jegan during his internship at Plugzmart, where he contributed to our software development projects for a month. During this time, he quickly adapted to our workflows, demonstrated strong problem-solving skills, and showed great enthusiasm for learning. He played a key role in developing an Angular-based Single Page Application (SPA) that serves as an EV charger simulator to test our EV charging management platform. His ability to grasp new concepts quickly and deliver a functional solution within a short period was impressive.',
    date: 'Feb 1, 2025',
    category: { title: 'Jegan\'s Manager', href: 'https://www.linkedin.com/in/raghavendar-ts/' },
    author: {
      name: 'Raghavendar TS',
      role: 'Director at Plugzmart | Software Lead',
      href: '#',
    },
    href: 'https://www.linkedin.com/in/jeganathb'
  },
  {
    id: 2,
    description:
      'I had the privilege of guiding Jeganath, and I must say, he is a remarkable young mind with a passion for innovation and success. His enthusiasm for learning and his relentless drive to excel set him apart. Jeganath doesn’t just embrace technology, he thrives on it, always eager to push boundaries and explore new possibilities. I highly recommend him for any opportunity that demands intelligence, dedication, and a forward-thinking mindset.',
    date: 'Mar 24, 2025',
    category: { title: 'Jegan\'s Mentor', href: 'https://www.linkedin.com/in/akshara-a/' },
    author: {
      name: 'Akshara A',
      role: 'Software Developer at Propel',
      href: '#',
    },
    href: 'https://www.linkedin.com/in/jeganathb'

  },
  {
    id: 3,
    description:
      'I had the opportunity to observe Jeganath during his internship at our EV charger manufacturing company. Tasked with developing testing software using Angular, he quickly adapted to the role and delivered high-quality results. His strong technical foundation, proactive attitude, and ability to learn rapidly stood out. Jeganath demonstrates exceptional potential and would be a valuable addition to any team.',
    date: 'Feb 2, 2025',
    category: { title: 'Jegan\'s Colleague', href: 'https://www.linkedin.com/in/parthasarathy1998/' },
    author: {
      name: 'Partha Sarathy',
      role: 'Software Developer at Plugzmart',
      href: '#',
    },
    href: 'https://www.linkedin.com/in/jeganathb'

  },
  {
    id: 4,
    description:
      'I had the pleasure of working with Jeganath during his internship at our company, and I must say, he has truly impressed me with his skills and dedication. Jeganath has a solid grasp of Angular and frontend development. He consistently delivered high-quality work, quickly picking up new concepts and implementing them effectively. What stood out most was his proactive attitude and willingness to learn. Jeganath’s ability to collaborate with the team made him a valuable asset, and his positive attitude made him a joy to work with. I’m confident that Jeganath will continue to excel in his career, and I highly recommend him for any role in software development.',
    date: 'Feb 4, 2025',
    category: { title: 'Jegan\'s Colleague', href: 'https://www.linkedin.com/in/suryakannathasan/' },
    author: {
      name: 'Surya Kannathasan',
      role: 'Software Tester at Plugzmart',
      href: '#',
    },
    href: 'https://www.linkedin.com/in/jeganathb'

  },
  {
    id: 5,
    description:
      'I had the pleasure of working with Jegan during his time as a Software Developer Intern at Softrate. From day one, he demonstrated strong technical abilities, a great attitude, and a genuine curiosity to learn.',
    date: 'Aug 1 2025',
    category: { title: 'Jegan\'s Manager', href: 'https://www.linkedin.com/in/softrateceo/' },
    author: {
      name: 'Balaji Rajendran',
      role: 'CEO at Softrate Technologies',
      href: '#',
    },
    href: 'https://www.linkedin.com/in/jeganathb'
  },
];
const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Recommendations', href: '#Recommendation' },
  { name: 'Contact', href: '#contact' },
];

const features = [
  {
    name: 'Undergraduate',
    description:
      'I am currently pursuing a Bachelor\'s degree in Electrical and Electronics Engineering at Sri Sairam Engineering College, Chennai. With a focus on building strong technical skills, I have secured a CGPA of 80%, which reflects my dedication and commitment to my studies.',
    icon: AcademicCapIcon, // Replace with an appropriate icon
  },
  {
    name: 'Schooling',
    description:
      'I completed my schooling at Bharathi Vidhya Mandhir Hr Sec School, where I graduated with a strong academic record. I secured 88% in my 12th grade, which laid a solid foundation for my future studies and passion for learning.',
    icon: BuildingLibraryIcon, // Replace with an appropriate icon
  },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    console.log("Form submission started");
    event.preventDefault();  // Prevents the default form submission (i.e., no page reload)

    // Form data to be sent in the request
    const formData = { name, email, message };

    console.log(import.meta.env.VITE_API_URL);

    // Send POST request to the backend
    axios.post(import.meta.env.VITE_API_URL, formData)
      .then(response => {
        // Handle success, set the response message
        setResponseMessage(response.data.message || 'Message sent successfully');
        setErrorMessage(''); // Clear any previous error message
      })
      .catch(error => {
        // Handle error, set the error message
        setErrorMessage(error.response?.data?.message || 'Something went wrong');
        setResponseMessage(''); // Clear any previous success message
      });
  };

  return (
    <div className="bg-gray-900 dark:bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only"></span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-400 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-900/50 dark:bg-gray-900/50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-400 dark:text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700 dark:divide-gray-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-400 dark:text-gray-400 hover:bg-gray-800 dark:hover:bg-gray-800"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* About Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex flex-col justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 100% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-20">
          {/* Circular Image with Border */}
          <div className="flex justify-center">
            <div className="h-48 w-48 rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
              <img
                src="https://i.ibb.co/qLmcwTX5/IMG-8441.jpg"
                alt="Jeganath"
                className="h-full w-full object-cover transform transition-transform duration-500 scale-110"
              />
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white dark:text-white sm:text-7xl">
              Hii, this is Jegan aka Jeganath
            </h1>
            <Words></Words>
          </div>
           <ScrollArrow />

        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/*About section*/}
      <div className="relative isolate py-30 sm:py-30 bg-gray-900 dark:bg-gray-900 min-h-screen flex flex-col justify-center" id='about'>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 100% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl lg:text-left">
            <h2 className="text-base/7 font-semibold text-indigo-600">About</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white dark:text-white sm:text-5xl lg:text-balance">
              About me!
            </p>
            <p className="mt-6 text-lg/8 text-white dark:text-white">
              Hi, I’m Jeganath B, a passionate Software Engineer who loves turning ideas into scalable, user-focused applications. I specialize in full-stack development using technologies like React.js, Node.js, Express.js, MySQL, and Docker, and I enjoy designing clean architectures that solve real business problems efficiently.
              <br />
              I’ve worked with organizations such as Meriity (Australia), Softrate Technologies, and Plugzmart (IITMRP company), where I built and deployed production-ready solutions ranging from CRM systems to AI-powered sales agents and EV charger debugging tools. These experiences helped me strengthen my skills in RESTful API design, database optimization, and microservice-based system architecture.
              <br />
              Beyond code, I’m driven by curiosity — always exploring new tools, frameworks, and AI integrations to enhance performance and user experience. I enjoy collaborating in Agile teams, where continuous learning and problem-solving fuel innovation.
              <br />
              Currently, I’m pursuing my B.E. in Electrical and Electronics Engineering at Sri Sairam Engineering College, while seeking opportunities to contribute as a Software Engineer Role and build impactful, intelligent, and scalable products that make technology more human-centric.
            </p>
            <h2 className="mt-2 text-4xl/8 font-semibold text-indigo-600">I learn best by doing building, breaking, and rebuilding.</h2>
          </div>
          <div className="mx-auto mt-5 max-w-2xl sm:mt-5 lg:mt-24 lg:max-w-4xl">


          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
           <ScrollArrow />

      </div>

            {/*Projects*/}
      <div className="bg-gray-900 py-24 sm:py-32 min-h-screen" id="projects">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:mx-0">
            <h2 className="text-base font-semibold text-indigo-600">Projects</h2>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-200 sm:text-5xl">My Projects</h2>
            <p className="mt-5 text-lg text-indigo-200">
              I’ve had the opportunity to work on a variety of projects that challenge me to learn, innovate, and build practical solutions. Each project reflects my curiosity, problem-solving skills, and dedication to delivering quality results. Here, I showcase some of the work I’m most proud of and the impact it has made.
            </p>
          </div>

          <div className="overflow-x-auto scroll-smooth py-8">
            <div className="flex gap-x-5 gap-y-5 flex-wrap justify-center">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex-none w-full sm:w-80 md:w-72 bg-gray-800 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-lg font-semibold text-gray-200 flex justify-between items-center mb-3">
                    {/* <span className="text-gray-400">{project.date}</span> */}
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      {project.title}
                    </a>

                  </div>

                  <h3 className="text-lg font-semibold text-gray-200 mb-2">
                    <a
                      href={project.category.href}
                      className="rounded-full bg-indigo-600 px-3 py-1.5 text-white text-xs font-medium hover:bg-indigo-500"
                    >
                      {project.category.title}
                    </a>

                  </h3>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-4">{project.description}</p>

                  <div className="text-sm text-gray-400">
                    <p>
                      <span className="font-semibold text-gray-200">{project.techStack}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
           <ScrollArrow />

          </div>
        </div>
      </div>
      <div className="py-10 sm:py-30 bg-gray-900 dark:bg-gray-900 min-h-screen flex flex-col justify-center pt-10 exp relative overflow-hidden">

        {/* Content */}
        <div className="relative isolate py-5 sm:py-30 bg-gray-900 dark:bg-gray-900 min-h-screen flex flex-col justify-center p-8 sm:p-50 lg:p-40 xl:p-70" id='experience'>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 100% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <h2 className="text-base/7 font-semibold text-indigo-600 upp">Experience</h2>
          <p className="mt-0 mb-10 text-4xl font-semibold tracking-tight text-pretty text-white dark:text-white sm:text-5xl lg:text-balance">
            My Experience
          </p>

          <ul>
            <li className="relative flex items-baseline gap-6 pb-5">
              <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p className="text-indigo-300">Meriity (Australia) — Software Developer (Remote, Part-Time) September 2025-Present</p>
                <p className="mt-0 text-gray-200 text-l/8">After my internship, I was promoted to a Software Developer role based on performance.
                  I continued contributing to OpsNav, leading feature development, workflow automation, and API optimization tasks.
                  In this role, I gained deeper experience in end-to-end product development, CI/CD deployment, and maintaining high-quality, scalable codebases while balancing my academics.</p>
              </div>
            </li>
            <li className="relative flex items-baseline gap-6 pb-5">
              <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p className="text-indigo-300">Meriity (Australia) — Full-Stack Developer Intern (Remote) March 2025-September 2025</p>
                <p className="mt-0 text-gray-200 text-l/8">During my internship at Meriity, I worked on OpsNav, an operations management tool for businesses, contributing to both frontend and backend modules.
                  I developed and optimized RESTful APIs, improved database efficiency, and collaborated with remote teams to deliver production-ready features.
                  This experience helped me refine my problem-solving skills, communication, and ability to deliver results in a distributed Agile environment.</p>
              </div>
            </li>

            <li className="relative flex items-baseline gap-6 pb-5">
              <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p className="text-indigo-300">Softrate Technologies — Full-Stack Developer Intern (Onsite) Jun 2025-Jul 2025</p>
                <p className="mt-0 text-gray-200 text-l/8">I completed a full-stack development internship at Softrate Technologies, where I built a complete CRM application from scratch using React.js, Node.js, Express.js, and MySQL.
                  This role strengthened my understanding of backend API design, authentication, and responsive UI development.
                  Working directly with clients improved my ability to deliver secure, user-friendly, and data-driven business solutions within tight deadlines.</p>
              </div>
            </li>

            <li className="relative flex items-baseline gap-6 pb-5">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div>
                <p className="text-indigo-300">Meras Plugins Private Limited (Plugzmart) - Frontend Developer Intern (Onsite) December 2024-January 2025</p>
                <p className="mt-0 text-gray-200 text-l/8">I completed a one-month onsite internship at Meras Plugins Pvt Ltd - Plugzmart in IITM Research Park, where I developed a testing tool for charger behavior using Open Charge Point Protocol 1.6. Despite having no prior experience with Angular, I successfully gained technical proficiency in the framework. The internship also provided valuable insights into resilience and teamwork, contributing to my professional growth.</p>
              </div>
            </li>
          </ul>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>

        </div>
           <ScrollArrow />

      </div>

            {/* Education Section */}
      <div className="relative isolate py-40 sm:py-30 bg-gray-900 dark:bg-gray-900 min-h-screen flex flex-col justify-center" id='education'>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 100% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 min-h-screen">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600 up">Education</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white dark:text-white sm:text-5xl lg:text-balance">
              My Education
            </p>
            <p className="mt-6 text-lg/8 text-white dark:text-white">
              A quick learner with a strong academic record, I consistently grasp complex concepts with ease and dedication. My passion for learning drives me to excel in every challenge I face.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-white dark:text-white">
                    <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-200">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
           <ScrollArrow />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>

      </div>

      {/*Recommendations*/}
      <div className="bg-gray-900 dark:bg-gray-900 py-24 sm:py-32 min-h-screen" id='Recommendation'>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl lg:mx-0">
            <h2 className="text-base/7 font-semibold text-indigo-600">Recommendations</h2>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-200 sm:text-5xl">What People Are Saying</h2>
            <p className="mt-5 text-lg/8 text-indigo-200">I’ve had the privilege of collaborating with incredible individuals and teams. Here are some of the kind words and recommendations they’ve shared about our work together. I’m grateful for their trust and feedback, and I’m always looking forward to future collaborations!</p>
          </div>
          <div className="overflow-x-auto scroll-smooth py-4">
            <div className="flex gap-x-5 gap-y-5 mt-15 flex-wrap justify-center">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="flex-none w-full sm:w-80 md:w-52 lg:w-72 bg-gray-800 rounded-xl p-4 mb-6 md:mb-0"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-200">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>

                  <div className="group relative mt-3">
                    <h3 className="text-lg font-semibold text-gray-200 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p href={post.href} className="mt-5 text-sm text-gray-200 line-clamp-3">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm flex flex-col">
                      <p className="font-semibold text-gray-200">
                        <a href={post.category.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-400">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
           <ScrollArrow />

          </div>
        </div>

      </div>


      {/*Contact */}
      <div className="bg-gray-900 min-h-screen py-24 px-6 sm:px-12" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-semibold text-indigo-500 uppercase tracking-wide">Contact</h2>
          <h2 className="mt-2 text-4xl font-bold text-gray-100 sm:text-5xl">Get in touch!</h2>
          <p className="mt-4 text-lg text-gray-300">
            I'm always open to new opportunities, collaborations, and interesting conversations.
          </p>
          <p className="mt-2 text-lg text-gray-400">
            Feel free to send me a message, and I'll respond quicker than a bug fix during crunch time!
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-12 bg-gray-800 rounded-xl p-8 shadow-lg space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-700 px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-700 px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full rounded-md bg-gray-700 px-4 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300"
            >
              Send Message
            </button>

            {responseMessage && <p className="text-green-400 mt-2">{responseMessage}</p>}
            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-16 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-xl p-8 text-center text-white shadow-lg">
          <p className="mb-4 font-semibold">
            &copy; Designed & Developed by{' '}
            <a
              href="https://github.com/Jeganath18"
              className="underline hover:text-blue-300"
            >
              JX718
            </a>
          </p>

          <div className="flex justify-center items-center gap-8 mb-4">
            <a
              href="https://github.com/Jeganath18"
              className="hover:text-gray-200 transition-colors"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/jeganathb"
              className="hover:text-gray-200 transition-colors"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/itz_jegan_07/"
              className="hover:text-gray-200 transition-colors"
              target="_blank"
            >
              Instagram
            </a>
          </div>

          <p className="text-gray-100 italic text-sm">
            "அடைவதும் முன்னேற்றம் பெருக்கும் திடமுடைமை
            எவ்வாறு வந்தாலும் வெற்றிக்கிடைக்கின்றது." : குறள் 448
          </p>
        </footer>
      </div>
    </div>
  );
}
