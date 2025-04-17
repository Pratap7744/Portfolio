"use client"
import Head from 'next/head'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaEnvelope, FaInstagram, FaGlobe, FaDownload } from 'react-icons/fa'
import { 
  Envelope, 
  Globe, 
  Linkedin, 
  Github, 
  Youtube, 
  Twitter, 
  Instagram, 
  Download 
} from 'lucide-react';
import { useState } from 'react'
import Navbar from './Components/NavBar'

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const sections = [
    { id: 'self', title: 'About Me' },
    { id: 'education', title: 'Education' },
    { id: 'experience', title: 'Work Experience' },
    { id: 'skills', title: 'Skills' },
    { id: 'projects', title: 'Projects' },
    { id: 'certifications', title: 'Certifications' },
    { id: 'achievements', title: 'Achievements' },
  ]

  const toggleNav = () => setIsNavOpen(!isNavOpen)

  return (
    <div className="min-h-screen font-inter relative bg-gradient-to-r from-cyan-100 from-10% via-blue-50 via-30% via-violet-100 via-50% via-fuchsia-100 via-70% to-pink-100 to-90%">
      <div
        className="hidden 2xl:block fixed top-0 bottom-0 w-px bg-black"
        style={{ left: 'calc((100vw - 60rem) / 2)' }}
      ></div>
      <div
        className="hidden 2xl:block fixed top-0 bottom-0 w-px bg-black"
        style={{ right: 'calc((100vw - 60rem) / 2)' }}
      ></div>

      <Head>
        <title>Pratap Pawar - Portfolio</title>
        <meta name="description" content="Pratap Pawar's personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500;700&family=Poppins:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Raleway:wght@400;500;600;700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <Navbar />
       {/* Self Section */}
        <section id="self" className="p-6 max-w-3xl mx-auto mt-20">
       
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 font-sans tracking-tight mb-2">
                Hello. I'm Pratap.
              </h1>
              <div className="flex items-center space-x-2 mt-1">
                <FaGlobe className="text-gray-600" size={14} />
                <p className="text-sm text-gray-600">Pune, India</p>
              </div>
            </div>
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden">
              <Image
                src="/pratap.jpg"
                alt="Pratap Pawar"
                width={140}
                height={140}
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-normal text-gray-700 leading-tight mb-4">
              full-stack developer crafting seamless digital experiences from pixel-perfect interfaces to robust backend systems.
            </h2>
            <h2 className="text-3xl font-normal text-gray-700 leading-tight mb-6">
              Skilled in building responsive websites, scalable APIs, and smooth user interactions.
              Passionate about clean code, performance optimization, and bringing ideas to life end-to-end.
            </h2>
            <p className="text-xl text-gray-700">
              Currently designing seller experiences for <span className="text-orange-500">Amazon India</span>.
            </p>
          </div>
          <div className="w-full flex flex-wrap justify-center sm:justify-between gap-6 mt-6">
            <a href="https://x.com/_Pratap_7744" className="flex items-center text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-7 h-7 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span className="text-base font-bold">X/Twitter</span>
            </a>
            <a href="#" className="flex items-center text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-7 h-7 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span className="text-base font-bold">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/in/pratap-pawar-5a0b48253/" className="flex items-center text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-7 h-7 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-base font-bold">LinkedIn</span>
            </a>
            <a href="https://www.youtube.com/@Leet_Lords" className="flex items-center text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-7 h-7 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
              <span className="text-base font-bold">YouTube</span>
            </a>
          </div>
        </section>

        {/* Section divider */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 my-8">
          <div className="w-full h-px bg-gray-900"></div>
        </div>

        {/* Work Experience Section */}
        <section id="experience" className="max-w-3xl mx-auto mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-roboto">Work Experience</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-violet-50/80 to-purple-50/60 rounded-lg p-4 transform hover:scale-[1.02] transition-all">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded overflow-hidden">
                    <Image
                      src="/qhills.avif"
                      alt="Qhills Technology Logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">Frontend Developer Intern</h3>
                      <p className="text-sm text-gray-600 font-medium">Qhills Technology Pvt Ltd.</p>
                    </div>
                    <p className="text-sm text-gray-600">2/2025 - Present</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  I collaborate closely with backend developers to integrate APIs and manage dynamic data flows, ensuring smooth functionality and efficient data retrieval. Additionally, I focus on enhancing UI/UX by incorporating intuitive design principles, interactive components, and animations to improve user engagement.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  My role also involves debugging and troubleshooting frontend issues, maintaining clean and scalable code, and implementing best practices for performance optimization. I stay up-to-date with the latest web development trends, tools, and frameworks to contribute innovative solutions to the team.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 my-8">
          <div className="w-full h-px bg-gray-900"></div>
        </div>

        {/* Case Studies Section */}
        <section id="projects" className="max-w-3xl mx-auto mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-playfair">Case Studies</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/60 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:w-1/2">
                  <div className="mb-2 text-xs text-gray-500">DESIGN</div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">MindShare</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Developed a social network application with user profiles, messaging, and social interaction features, focusing on secure authentication and user engagement
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">UI/UX</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">FLOW</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">MUSIC INTERACTIONS</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">PROTOTYPING</span>
                  </div>
                  <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <a href="">Source</a>
                  </button>
                </div>
                <div className="md:w-1/2">
                  <div className="h-full">
                    <Image 
                      src="/mindshareUI.png" 
                      alt="Interactive workout screens" 
                      width={500} 
                      height={300} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/60 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:w-1/2">
                  <div className="mb-2 text-xs text-gray-500">FITNESS</div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">Aesthetix</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Aesthetix is a web app built for content creators, photographers, and visual artists to create striking visuals by placing text behind the main subject in an image — adding depth and a modern aesthetic touch. With user authentication powered by Supabase, it offers a secure and personalized experience. Perfect for social media posts, banners, and creative storytelling.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">USER FLOWS</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">INTERACTION DESIGN</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">PROTOTYPING</span>
                  </div>
                  <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <a href="">Source</a>
                  </button>
                </div>
                <div className="md:w-1/2">
                  <div className="h-full">
                    <Image 
                      src="/plogo.png" 
                      alt="Feedback system mobile app" 
                      width={500} 
                      height={300} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/60 rounded-lg overflow-hidden transform hover:scale-[1.02] transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="p-6 md:w-1/2">
                  <div className="mb-2 text-xs text-gray-500">GIGS</div>
                  <h3 className="font-bold text-xl text-gray-800 mb-2">AI-powered chatbot application</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    A sophisticated AI-powered chatbot application built using the Gemini AI API. By integrating the Gemini AI API, it provides intelligent, conversational interactions, making it ideal for offering assistance, answering questions, and delivering an engaging user experience.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">USER FLOWS</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">INCOME MONITORING</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">AUDIO</span>
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">PROTOTYPING</span>
                  </div>
                  <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <a href="">Source</a>
                  </button>
                </div>
                <div className="md:w-1/2">
                  <div className="h-full">
                    <Image 
                      src="/pratap.jpg" 
                      alt="Delivery rider earnings app" 
                      width={500} 
                      height={300} 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 my-8">
          <div className="w-full h-px bg-gray-900"></div>
        </div>

        {/* Education Section */}
        <section id="education" className="max-w-3xl mx-auto mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-montserrat">Education</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-fuchsia-50/80 to-pink-50/60 rounded-lg p-4 transform hover:scale-[1.02] transition-all">
              <div className="flex flex-col">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded overflow-hidden">
                      <Image 
                        src="/sukolhapur.jpeg" 
                        alt="Shivaji University Logo" 
                        width={40} 
                        height={40} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="ml-4 flex-1 flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800">Bachelors in Computer Application</h3>
                      <p className="text-sm text-gray-600">Shivaji University, Kolhapur</p>
                      <p className="text-xs text-gray-600">CGPA: 8.4</p>
                    </div>
                    <p className="text-xs text-gray-500">2020 - 2025</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-600">
                    Graduated with an 8.4 CGPA, demonstrating strong academic performance in computer science and programming. Developed proficiency in languages like Python, Java, and C++ through coursework and projects, including a capstone project on web application development using React and Node.js. Actively participated in coding competitions and tech workshops, enhancing problem-solving and teamwork skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-fuchsia-50/80 to-pink-50/60 rounded-lg p-4 transform hover:scale-[1.02] transition-all">
              <div className="flex flex-col">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded overflow-hidden">
                      <Image 
                        src="/bmjc.png" 
                        alt="Bharatmata Junior College Logo" 
                        width={40} 
                        height={40} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="ml-4 flex-1 flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800">12th Grade (Higher Secondary)</h3>
                      <p className="text-sm text-gray-600">Bharatmata Junior College, Mayani</p>
                      <p className="text-xs text-gray-600">Percentage: 61%</p>
                    </div>
                    <p className="text-xs text-gray-500">2013 - 2020</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-600">
                    Completed Higher Secondary education in the Science stream, achieving a score of 61%. Developed a strong foundation in subjects like Physics, Chemistry, and Mathematics, fostering analytical and problem-solving skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/60 rounded-lg p-4 transform hover:scale-[1.02] transition-all">
              <div className="flex flex-col">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded overflow-hidden">
                      <Image 
                        src="/bmjc.png" 
                        alt="Bharatmata English Medium School Logo" 
                        width={40} 
                        height={40} 
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="ml-4 flex-1 flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800">10th Grade (Secondary School)</h3>
                      <p className="text-sm text-gray-600">Bharatmata English Medium School, Mayani</p>
                      <p className="text-xs text-gray-600">Percentage: 84%</p>
                    </div>
                    <p className="text-xs text-gray-500">2013 - 2020</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-gray-600">
                    Achieved academic honours with distinction for every year since grade 4 to 7, given to students with a yearly grade over 90%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 my-8">
          <div className="w-full h-px bg-gray-900"></div>
        </div>

        {/* Skills Section */}
        <section id="skills" className="max-w-3xl mx-auto mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-poppins">Skills</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50/60 to-blue-50/60 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" alt="HTML5" className="w-6 h-6 mr-2" />
                  <span className="text-sm">HTML5</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React" className="w-6 h-6 mr-2" />
                  <span className="text-sm">React</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" alt="Next.js" className="w-6 h-6 mr-2" />
                  <span className="text-sm">Next.js</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://codekitapp.com/images/help/free-tailwind-icon@2x.png" alt="Tailwind CSS" className="w-6 h-6 mr-2" />
                  <span className="text-sm">Tailwind CSS</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png" alt="JavaScript" className="w-6 h-6 mr-2" />
                  <span className="text-sm">JavaScript</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/60 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-3">Backend</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="Node.js" className="w-6 h-6 mr-2" />
                  <span className="text-sm">Node.js</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWNCLZBvTe9g_Ygifs1awghGm_B4YIJ6AWQ&s" alt="Express" className="w-6 h-6 mr-2" />
                  <span className="text-sm">Express</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/330px-Flask_logo.svg.png" alt="Flask" className="w-6 h-6 mr-2" />
                  <span className="text-sm">Flask</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python" className="w-6 h-6 mr-2" />
                  <span className="text-sm">Python</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/60 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-3">Database</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECTCpAUvXwA4OxqRLwvN4IMNqs35q4MZcxw&s" alt="MongoDB" className="w-6 h-6 mr-2" />
                  <span className="text-sm">MongoDB</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://www.postgresql.org/media/img/about/press/elephant.png" alt="PostgreSQL" className="w-6 h-6 mr-2" />
                  <span className="text-sm">PostgreSQL</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74JuJCOo7bzVaTxbEGxjQ85UGSLZQMAYv-Q&s" alt="MySQL" className="w-6 h-6 mr-2" />
                  <span className="text-sm">MySQL</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/60 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-3">DevOps</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://cdn2.downdetector.com/static/uploads/logo/aws-logo-icon-PNG-Transparent-Background_5.png" alt="AWS" className="w-6 h-6 mr-2" />
                  <span className="text-sm">AWS</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://www.vikingsoftware.com/wp-content/uploads/2024/02/Docker.png" alt="Docker" className="w-6 h-6 mr-2" />
                  <span className="text-sm">Docker</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://avatars.githubusercontent.com/u/18133?s=280&v=4" alt="Git" className="w-6 h-6 mr-2" />
                  <span className="text-sm">Git</span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCYUwjL13YZJqkP5WhxYTLhGgYS7mS0vmpw&usqp=CAU" alt="nginx" className="w-6 h-6 mr-2" />
                  <span className="text-sm">nginx</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/60 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-3">Mobile</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-gray-50 rounded-md p-2 hover:shadow-md transition-all">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React Native" className="w-6 h-6 mr-2" />
                  <span className="text-sm">React Native</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 my-8">
          <div className="w-full h-px bg-gray-900"></div>
        </div>

        {/* Certifications Section */}
        <section id="certifications" className="max-w-3xl mx-auto mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-raleway">Certifications</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-sky-50/80 to-indigo-50/60 rounded-lg p-4 transform hover:scale-[1.02] transition-all">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded overflow-hidden">
                    <Image
                      src="/udemy.png"
                      alt="Udemy Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">Frontend Development-ReactJS,NextJS</h3>
                      <p className="text-sm text-gray-600">Udemy</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-xs text-gray-500 mb-1">July 2023 - July 2026</p>
                      <a 
                        href="https://drive.google.com/file/d/1fNUWxUCSrQCRxlAznZ2I0zlIXKxbRaHE/view" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-black transition-colors"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-500">Industry recognized certification for designing distributed systems on AWS. Covers compute, storage, database, networking, and security services.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-50/80 to-indigo-50/60 rounded-lg p-4 transform hover:scale-[1.02] transition-all">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded overflow-hidden">
                    <Image
                      src="/forage.png"
                      alt="Forage Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">Software Engineering</h3>
                      <p className="text-sm text-gray-600">Goldman Sachs-Forage.Edu</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-xs text-gray-500 mb-1">March 2023 - March 2025</p>
                      <a 
                        href="https://drive.google.com/file/d/1CLilNJrAA0CvIuceYf95sPp7n0YObMuz/view" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-black transition-colors"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-500">Professional-level certification demonstrating expertise in Google Cloud services, infrastructure, and architecture best practices.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-sky-50/80 to-indigo-50/60 rounded-lg p-4 transform hover:scale-[1.02] transition-all">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded overflow-hidden">
                    <Image
                      src="/udemy.png"
                      alt="Udemy Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">Data Structure and Algorithms</h3>
                      <p className="text-sm text-gray-600">Udemy</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-xs text-gray-500 mb-1">May 2022 - No Expiration</p>
                      <a 
                        href="https://drive.google.com/file/d/14Gni8X6zB7tlwWivv6iH8oGwY1-0fgMc/view" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-black transition-colors"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-500">Validates practical skills in building and training neural networks using TensorFlow for computer vision, NLP, and time series forecasting tasks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 my-8">
          <div className="w-full h-px bg-gray-900"></div>
        </div>

        {/* Achievements Section */}
        <section id="achievements" className="max-w-3xl mx-auto mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-raleway">Achievements</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/60 rounded-lg p-4 transform hover:scale-[1.02] transition-all">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded overflow-hidden">
                    <Image
                      src="/leetcode.webp"
                      alt="LeetCode Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">LeetCode – 200+ Problems Solved</h3>
                      <p className="text-sm text-gray-600">Mastered core data structures and algorithms through consistent practice.</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-xs text-gray-500 mb-1">2023</p>
                      <a 
                        href="https://leetcode.com/u/Pratappawar11/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-black transition-colors"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-500">Solved over 200 problems on LeetCode across a wide range of topics including arrays, linked lists, trees, dynamic programming, and graphs. This journey helped build a strong foundation in problem-solving, algorithmic thinking, and time-space complexity optimization. Maintained consistency and improved coding speed and accuracy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section divider */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 my-8">
          <div className="w-full h-px bg-gray-900"></div>
        </div>

        {/* Contact Section */}
        <section id="contact" className="max-w-3xl mx-auto rounded-2xl overflow-hidden">
          <h2 className="text-xl font-bold text-gray-800 mb-4 font-raleway">Connect</h2>
          <div className="bg-gradient-to-br from-indigo-50/80 to-blue-50/60 p-10 flex flex-col md:flex-row items-center justify-between rounded-lg">
            <div className="md:w-3/5 mb-8 md:mb-0">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Say</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> hi!</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="mailto:pratappawar8698567744@gmail.com" 
                  className="flex items-center text-blue-500 hover:text-blue-600 transition-colors"
                >
                  <FaEnvelope className="w-5 h-5 mr-2" />
                  <span>pratappawar8698567744@gmail.com</span>
                </a>
                <div className="hidden sm:block w-4"></div>
                <a 
                  href="#" 
                  className="flex items-center text-purple-500 hover:text-purple-600 transition-colors"
                >
                  <FaTwitter className="w-5 h-5 mr-2" />
                  <span>realvijay</span>
                </a>
              </div>
              <p className="text-gray-600 text-lg mb-8 max-w-md">
                Want to create something awesome? Or, you have any questions? Drop an email, or tweet.
              </p>
              <button
                onClick={() => window.open('/path/to/your-resume.pdf', '_blank')}
                className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg transform hover:scale-105 duration-300"
              >
                <FaDownload className="w-5 h-5" />
                <span>Download Resume</span>
              </button>
            </div>
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full transform transition-transform duration-700 hover:scale-110 z-10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full transform transition-transform duration-700 hover:scale-110"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 max-w-4xl text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Pratap Pawar. All rights reserved.</p>
      </footer>
    </div>
  )
}