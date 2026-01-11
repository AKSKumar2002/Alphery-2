import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {

  const servicesData = [
    {
      title: 'Web & Mobile App Development',
      description: 'We build fast, responsive, and scalable web and mobile applications that work seamlessly across all devices.',
      icon: assets.ads_icon // Using existing icon for now, ideally simplify
    },
    {
      title: 'Custom Software Solutions',
      description: 'Tailor-made software designed to solve real business challenges and improve efficiency.',
      icon: assets.marketing_icon
    },
    {
      title: 'UI/UX Design',
      description: 'Clean, modern, and user-friendly designs focused on great user experience and conversion.',
      icon: assets.content_icon,
    },
    {
      title: 'IT & Hardware Solutions',
      description: 'Custom PC builds, system setup, and reliable hardware solutions for individuals and businesses.',
      icon: assets.social_icon,
    },
  ]

  return (
    <section id='services' className='relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-black pt-24 pb-12'>

      <div className='relative z-20 max-w-7xl 2xl:max-w-[1872px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-24'>
        <div className='flex flex-col lg:flex-row lg:gap-20'>

          {/* Left Column: Heading */}
          <div className='w-full lg:w-1/3 mb-12 lg:mb-0'>
            <div className='relative'>
              <motion.h2
                initial={{ opacity: 0, filter: 'blur(8px)', y: 30 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: 'filter, opacity, transform' }}
                className='text-4xl sm:text-6xl lg:text-7xl font-medium text-gray-900 dark:text-white mb-8 leading-tight'>
                How can we <br />help <motion.span
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ display: 'inline-block' }}
                >?</motion.span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
                whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                viewport={{ once: false, margin: "-20%" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
                style={{ willChange: 'filter, opacity, transform' }}
                className='text-base sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mt-12'>
                Whether you need a new product, a fresh design, or technical solutions, we have the expertise to bring your vision to life.
              </motion.p>
            </div>
          </div>

          {/* Right Column: Grid */}
          <div className='w-full lg:w-2/3'>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className='grid grid-cols-1 md:grid-cols-2'
            >
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  index={index}
                  isLastRow={index >= servicesData.length - 2} // Logic for bottom border
                  isLastCol={(index + 1) % 2 === 0} // Logic for right border
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services
