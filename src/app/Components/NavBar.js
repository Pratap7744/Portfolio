"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaEnvelope, FaChevronDown } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  const [navbarHeight, setNavbarHeight] = useState(0)

  const mainNavItems = [
    { href: '#self', label: 'home', badge: '' },
    { href: '#experience', label: 'experience', badge: '' },
    { href: '#projects', label: 'projects', badge: '' },
    { href: '#skills', label: 'skills', badge: '' },
  ]

  const dropdownNavItems = [
    { href: '#education', label: 'education', badge: '' },
    { href: '#certifications', label: 'certifications', badge: '1' }
  ]

  // Set scroll margin for all sections to account for navbar height
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('nav')
      if (navbar) {
        const height = navbar.offsetHeight
        setNavbarHeight(height)
        
        // Apply scroll margin to all section elements
        const sections = document.querySelectorAll('section[id], div[id]')
        sections.forEach(section => {
          // Add extra padding (20px) for visual comfort
          section.style.scrollMarginTop = `${height + 20}px`
        })
      }
    }

    // Initial calculation
    updateNavbarHeight()
    
    // Update on resize
    window.addEventListener('resize', updateNavbarHeight)
    
    // Update when navbar changes (e.g., when scrolled)
    const observer = new MutationObserver(updateNavbarHeight)
    const navbar = document.querySelector('nav')
    if (navbar) {
      observer.observe(navbar, { attributes: true, childList: true, subtree: true })
    }
    
    return () => {
      window.removeEventListener('resize', updateNavbarHeight)
      observer.disconnect()
    }
  }, [])

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMoreDropdownOpen && !event.target.closest('.more-dropdown-container')) {
        setIsMoreDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMoreDropdownOpen])

  // Function to copy email to clipboard
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('pratap.pawar@example.com')
      .then(() => {
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      })
      .catch(err => console.error('Failed to copy email: ', err))
  }

  const handleNavClick = (href) => {
    const element = document.querySelector(href)
    if (element) {
      // Scroll to element with smooth behavior
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMoreDropdownOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2' : 'py-4'
    }`}>
      <div className="mx-auto max-w-3xl px-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-between shadow-lg">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#self" className="flex items-center">
            <div className="relative">
              <Image 
                src="/plogo.png" 
                alt="Pratap Pawar Logo" 
                width={98}
                height={32}
                className="object-cover"
                priority
              />
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {mainNavItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors relative"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
            >
              {item.label}
              {item.badge && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </a>
          ))}
          
          {/* More Dropdown */}
          <div className="relative more-dropdown-container">
            <button 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors flex items-center"
              onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
            >
              more <FaChevronDown className="ml-1 h-3 w-3" />
            </button>
            
            {isMoreDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
                {dropdownNavItems.map((item) => (
                  <a 
                    key={item.href} 
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 relative"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 inline-flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Social/Action Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <button onClick={copyEmailToClipboard} className="text-gray-600 hover:text-gray-900 transition-colors">
            <FaEnvelope size={20} />
            <span className="sr-only">{copySuccess ? 'Copied!' : 'Copy Email'}</span>
          </button>
          <button className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-300 transition-colors">
            <span className="text-lg">☽</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm shadow-lg mt-2 mx-4 rounded-xl">
          <div className="p-4">
            <div className="flex flex-col space-y-3">
              {/* All menu items shown in mobile menu without dropdown */}
              {[...mainNavItems, ...dropdownNavItems].map((item) => (
                <a 
                  key={item.href} 
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors block py-2 px-3 rounded-lg hover:bg-gray-100 relative"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 inline-flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-2 border-t border-gray-200 mt-2">
                <button onClick={copyEmailToClipboard} className="text-gray-600 hover:text-gray-900 transition-colors p-2">
                  <FaEnvelope size={20} />
                  <span className="sr-only">{copySuccess ? 'Copied!' : 'Copy Email'}</span>
                </button>
                <button className="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-300 transition-colors">
                  <span className="text-lg">☽</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {copySuccess && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-full text-sm">
          Email copied to clipboard!
        </div>
      )}
    </nav>
  )
}