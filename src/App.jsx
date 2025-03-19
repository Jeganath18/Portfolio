import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { AcademicCapIcon, Bars3Icon, BuildingLibraryIcon, XMarkIcon } from '@heroicons/react/24/outline';
import axios from "axios";
import { Typography } from "@material-tailwind/react";

function Words(){
  return <h2 className="mt-4 text-3xl/8 font-semibold text-indigo-700">End-to-End Web Developer<br></br>Wit Engineer<br></br>Tenacious</h2>
  
}

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
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
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQHLHwiRKEbmeg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726400936506?e=1747267200&v=beta&t=urrsmayqzvx2NYcxxK938MQNqChlnz-pPP6bT2AbPQA" // Replace with your image URL
              alt="Jeganath"
              className="rounded-full h-48 w-48 border-4 border-indigo-600 shadow-lg hover:border-indigo-500 transition-all duration-300"
            />
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white dark:text-white sm:text-7xl">
              Hii, this is Jegan aka Jeganath
            </h1>
            <Words></Words>
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
          <div className="mx-auto max-w-4xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">About</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white dark:text-white sm:text-5xl lg:text-balance">
              About me!
            </p>
            <p className="mt-6 text-lg/8 text-white dark:text-white">
          I'm a full-stack developer with strong experience in building efficient and scalable applications using technologies like Angular, React, Node.js, and Express. I’m passionate about creating seamless and responsive user experiences on the frontend while ensuring robust, efficient backend architectures. Currently, I’m diving deeper into database management with PostgreSQL and MySQL to strengthen my backend skills, focusing on optimizing queries, relationships, and performance. <br></br> I’m comfortable working with version control systems like Git and GitHub, making collaboration easier and streamlining the development process. My experience with Postman has helped me ensure smooth API testing and integration, allowing for quick iterations and bug-free releases. Additionally, I’ve worked with Java in various contexts, leveraging it for problem-solving and strengthening my ability to think through complex coding challenges.
            </p>
            <h2 className="mt-2 text-4xl/8 font-semibold text-indigo-600">I’m focused on delivering quality results while continuously learning and evolving in the process.</h2>
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
      </div>
          
      {/* Education Section */}
      <div className="relative isolate py-30 sm:py-30 bg-gray-900 dark:bg-gray-900 min-h-screen flex flex-col justify-center" id='education'>
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
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">Education</h2>
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
      <div className="py-10 sm:py-30 bg-gray-900 dark:bg-gray-900 min-h-screen flex flex-col justify-center pt-10 exp relative overflow-hidden">

  {/* Content */}
  <div className="relative isolate py-30 sm:py-30 bg-gray-900 dark:bg-gray-900 min-h-screen flex flex-col justify-center p-8 sm:p-20 lg:p-40 xl:p-70" id='experience'>
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
    <h2 className="text-base/7 font-semibold text-indigo-600">Experience</h2>
    <p className="mt-0 mb-10 text-4xl font-semibold tracking-tight text-pretty text-white dark:text-white sm:text-5xl lg:text-balance exp">
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
          <p className="text-gray-200">December 2024-January 2025</p>
          <h2 className="text-sm text-base/7 font-semibold text-indigo-600">Software Developer Intern</h2>
          <p className="mt-0 text-gray-200 text-l/8">I completed a one-month onsite internship at Meras Plugins Pvt Ltd - Plugzmart in IITM Research Park, where I developed a testing tool for charger behavior using Open Charge Point Protocol 1.6. Despite having no prior experience with Angular, I successfully gained technical proficiency in the framework. The internship also provided valuable insights into resilience and teamwork, contributing to my professional growth.</p>
        </div>
      </li>
      
      <li className="relative flex items-baseline gap-6 pb-5">
        <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-200">Jun 2024-Jul 2024</p>
          <h2 className="text-sm text-base/7 font-semibold text-indigo-600">Web Developer Intern</h2>
          <p className="mt-0 text-gray-200 text-l/8">I completed an online internship at CodeClause, where I developed and implemented tasks using Node JS. This experience enhanced my technical skills and ability to work independently in a remote setting.</p>
        </div>
      </li>

      <li className="relative flex items-baseline gap-6 pb-5">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8" />
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-200">Jun 2024-Jul 2024</p>
          <h2 className="text-sm text-base/7 font-semibold text-indigo-600">Java Developer Intern</h2>
          <p className="mt-0 text-gray-200 text-l/8">I completed an online internship at Let's Grow More as a Java Development Intern, where I developed GUI applications and enhanced my technical skills while working independently in a remote setting.</p>
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
</div>

{/*Contact */}


<div className="relative mx-auto max-w-2xl text-center min-h-screen py-5 p-5" id="contact">
      <h2 className="text-base/7 font-semibold text-indigo-600">Contact</h2>
      <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-200 sm:text-5xl">Get in touch!</h2>
      <p className="mt-2 text-l/6 text-gray-200">
        I'm always open to new opportunities, collaborations, and interesting conversations
      </p>
      <p className="mt-2 text-l/6 text-gray-200">
        Feel free to send me a message, and I'll respond quicker than a bug fix during crunch time (guaranteed)!
      </p>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-5">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Name Input */}
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-200">Name</label>
            <div className="">
              <input
                id="name"
                name="name"
                type="text"
                placeholder='Name'
                value={name} // Bind the value to state
                onChange={(e) => setName(e.target.value)} // Update state on input change
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-200">Email</label>
            <div className="">
              <input
                id="email"
                name="email"
                type="email"
                value={email} // Bind the value to state
                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-200">Message</label>
            <div className="">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message} // Bind the value to state
                onChange={(e) => setMessage(e.target.value)} // Update state on input change
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-5 block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Let's talk
        </button>
      </form>

      {/* Response or Error Message */}
      {responseMessage && <p style={{ color: 'green' }}>{responseMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

<div className='w-full'>
<footer className="pl-10 pr-10 mt-5 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 py-3 text-center md:justify-between bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-gradient">
  <Typography color="white" className="font-normal">
    &copy; Designed and Developed by <a href="https://github.com/Jeganath18">JX718</a>
  </Typography>
  <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 to">
    <li>
      <Typography
        as="a"
        href="https://github.com/Jeganath18"
        color="white"
        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
      >
        Github
      </Typography>
    </li>
    <li>
      <Typography
        as="a"
        href="www.linkedin.com/in/jeganathb"
        color="white"
        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
      >
        LinkedIn
      </Typography>
    </li>
    <li>
      <Typography
        as="a"
        href="https://www.instagram.com/itz_jegan_07/?igsh=MTVpaHo1djZoZWRoZA%3D%3D&utm_source=qr#"
        color="white"
        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
      >
        Instagram
      </Typography>
    </li>
  </ul>

  <h2 className="to text-l/8 font-semibold text-gray-200">"அடைவதும் முன்னேற்றம் பெருக்கும் திடமுடைமை
  எவ்வாறு வந்தாலும் வெற்றிக்கிடைக்கின்றது." : குறள் 448</h2>

</footer>

<style jsx>{`
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animate-gradient {
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
  }

  footer {
    position: relative;
    bottom: 0;
    width: 100%;
  }

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 100vh; /* This ensures the footer stays at the bottom */
  }
`}</style>

</div>
      
</div>
</div>
  );
}
