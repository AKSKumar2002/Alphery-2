import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'

const Footer = ({ theme, showQuboAI }) => {
  if (showQuboAI) return null;

  return (
    <footer className='bg-[#000000] dark:bg-black text-white py-12 px-4 sm:px-12 lg:px-24 2xl:px-24 overflow-hidden relative'>

      {/* Top Section: Slogan & CTA */}
      <motion.div
        initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ willChange: 'filter, opacity, transform' }}
        className='flex flex-col lg:flex-row justify-between items-center gap-12 mb-20'
      >
        <div className='max-w-4xl'>
          <p className='text-sm font-bold mb-4 opacity-80'>© 2025</p>
          <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]'>
            LET'S BUILD SOMETHING<br />THAT MATTERS.
          </h2>
        </div>
        <div>
          <a href="#contact-us" className='inline-flex h-14 px-8 items-center justify-center bg-white dark:bg-white text-black dark:text-black rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform'>
            Work With us
          </a>
        </div>
      </motion.div>

      {/* Middle Section: Links Grid */}
      {/* Middle Section: Links Grid */}
      {/* Middle Section: Links Grid */}
      <motion.div
        initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ willChange: 'filter, opacity, transform' }}
        className='grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 mb-16 text-sm tracking-wide font-medium'
      >

        {/* Menu */}
        <div className='flex flex-col gap-6'>
          <span className='text-gray-500 uppercase text-xs tracking-widest font-bold'>Menu</span>
          <ul className='flex flex-col gap-4 text-gray-200'>
            <li className='flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer'>
              <span className='w-1.5 h-1.5 rounded-full bg-white'></span>
              <span>SERVICES</span>
            </li>
            <li className='flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer'>
              <span className='w-1.5 h-1.5 rounded-full bg-white'></span>
              <span>PRODUCTS</span>
            </li>
            <li className='flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer'>
              <span className='w-1.5 h-1.5 rounded-full bg-white'></span>
              <span>TOOLSPACE</span>
            </li>
          </ul>
        </div>

        {/* Terms and Conditions */}
        <div className='flex flex-col gap-6'>
          <span className='text-gray-500 uppercase text-xs tracking-widest font-bold'>Terms and Conditions</span>
          <ul className='flex flex-col gap-4 text-gray-200'>
            <li className='flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer'>
              <span className='w-1.5 h-1.5 rounded-full bg-white'></span>
              <span>GUIDELINES</span>
            </li>
            <li className='flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer'>
              <span className='w-1.5 h-1.5 rounded-full bg-white'></span>
              <span>FAQ'S</span>
            </li>
            <li className='flex items-center gap-2 hover:translate-x-1 transition-transform cursor-pointer'>
              <span className='w-1.5 h-1.5 rounded-full bg-white'></span>
              <span>ATTESTATION</span>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className='flex flex-col gap-6'>
          <span className='text-gray-500 uppercase text-xs tracking-widest font-bold'>Contact Us</span>
          <div className='flex flex-col gap-3 text-gray-200'>
            <a href="mailto:alpheryteam@gmail.com" className='uppercase hover:text-white transition-colors'>ALPHERYTEAM@GMAIL.COM</a>
            <a href="tel:+918838362439" className='hover:text-white transition-colors'>+91 88383 62439</a>
            <a href="tel:+919791334944" className='hover:text-white transition-colors'>+91 97913 34944</a>
          </div>
        </div>

        {/* Office Hours */}
        <div className='flex flex-col gap-6'>
          <span className='text-gray-500 uppercase text-xs tracking-widest font-bold'>Office Hours</span>
          <div className='flex flex-col gap-3 text-gray-200 uppercase'>
            <p>MONDAY - FRIDAY</p>
            <p>10 AM - 6 PM</p>
          </div>
        </div>

      </motion.div>

      {/* Bottom Section: Giant Brand Name */}
      <div className='border-t border-white/20 pt-4'>
        <motion.h1
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          viewport={{ once: false, margin: "0%" }}
          transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ willChange: 'filter, opacity, transform' }}
          className='text-[15vw] leading-none font-black tracking-tighter text-center select-none bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'
        >
          ALPHERY
        </motion.h1>
      </div>

    </footer>
  )
}

export default Footer
