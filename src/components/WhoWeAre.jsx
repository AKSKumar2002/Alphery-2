import React from 'react'
import { motion } from 'motion/react'
import assets from '../assets/assets'

const WhoWeAre = () => {
    return (
        <section id='who-we-are' className='relative min-h-screen flex flex-col justify-center overflow-hidden text-gray-900 dark:text-white pt-24 pb-12'>

            {/* Background Video */}
            <div className='absolute inset-0 w-full h-full z-0'>
                <div className="absolute inset-0 bg-white/70 dark:bg-black/70 z-10" />
                <video
                    className='w-full h-full object-cover'
                    src='/Section 2.mp4'
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Top Gradient Blend */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-[#0a0a0a] to-transparent z-20 pointer-events-none"></div>

            <div className='relative z-20 max-w-7xl 2xl:max-w-[1872px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-24'>

                {/* Top Section: Heading & Description */}
                <div className='flex flex-col lg:flex-row justify-between items-start mb-8 lg:gap-20'>
                    <div className='w-full lg:w-1/3 text-left'>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className='text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 lg:mb-0'>
                            <span className="whitespace-nowrap">Built to Deliver</span> <br />Real Impact
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className='w-full lg:w-2/3'
                    >
                        <p className='text-sm sm:text-xl md:text-3xl leading-relaxed font-medium text-gray-800 dark:text-gray-200'>
                            Alphery is a startup IT company focused on creating practical, reliable, and future-ready digital products. We work closely with founders and businesses to understand their goals and deliver solutions that truly make an impact.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Section: Split Columns */}
                <div className='flex flex-col lg:flex-row gap-16 lg:gap-24'>

                    {/* Left Column: Menu & Testimonial */}
                    <div className='w-full lg:w-1/3 flex flex-col'>

                        {/* List Menu */}


                        {/* Testimonial */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className='bg-gray-50 dark:bg-white/5 p-8 rounded-2xl md:h-64 flex flex-col justify-between hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300'
                        >
                            <div className='flex items-center gap-1 mb-3 text-orange-500 text-sm'>
                                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                                <span className='text-gray-400 ml-2 font-medium'>5.0 / 5</span>
                            </div>
                            <p className='text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed max-w-xs'>
                                We asked Alphery to redesign our brand and website from scratch, and they absolutely nailed it.
                            </p>
                            <div>
                                <p className='font-bold text-sm text-gray-900 dark:text-white'>Sarah Mitchell</p>
                                <p className='text-xs text-gray-500'>Marketing Director, Lunoa</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Stats Cards */}
                    <div className='w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {[
                            { number: '5+', label: 'Completed projects for growing brands' },
                            { number: '100%', label: 'Client satisfaction rate since inception' },
                            { number: '10k+', label: 'Users reached through websites we\'ve designed' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                className='bg-gray-50 dark:bg-white/5 p-8 rounded-2xl md:h-64 flex flex-col gap-4 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300'
                            >
                                <h3 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tighter'>
                                    {stat.number}
                                </h3>
                                <p className='text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-xs sm:text-sm lg:text-base'>
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Second Row - Duplicate */}
                <div className='flex flex-col lg:flex-row gap-16 lg:gap-24 mt-8 lg:mt-12'>

                    {/* Left Column: Menu & Testimonial */}
                    <div className='w-full lg:w-1/3 flex flex-col'>

                        {/* Testimonial */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className='bg-gray-50 dark:bg-white/5 p-8 rounded-2xl md:h-64 flex flex-col justify-between hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300'
                        >
                            <div className='flex items-center gap-1 mb-3 text-orange-500 text-sm'>
                                {'★★★★★'.split('').map((star, i) => <span key={`second-${i}`}>{star}</span>)}
                                <span className='text-gray-400 ml-2 font-medium'>5.0 / 5</span>
                            </div>
                            <p className='text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed max-w-xs'>
                                We asked Alphery to redesign our brand and website from scratch, and they absolutely nailed it.
                            </p>
                            <div>
                                <p className='font-bold text-sm text-gray-900 dark:text-white'>Sarah Mitchell</p>
                                <p className='text-xs text-gray-500'>Marketing Director, Lunoa</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Stats Cards */}
                    <div className='w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {[
                            { number: '5+', label: 'Completed projects for growing brands' },
                            { number: '100%', label: 'Client satisfaction rate since inception' },
                            { number: '10k+', label: 'Users reached through websites we\'ve designed' }
                        ].map((stat, index) => (
                            <motion.div
                                key={`second-${index}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                className='bg-gray-50 dark:bg-white/5 p-8 rounded-2xl md:h-64 flex flex-col gap-4 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300'
                            >
                                <h3 className='text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tighter'>
                                    {stat.number}
                                </h3>
                                <p className='text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-xs sm:text-sm lg:text-base'>
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
