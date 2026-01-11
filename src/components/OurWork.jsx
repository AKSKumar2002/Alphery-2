import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion, AnimatePresence } from 'motion/react'

const OurWork = ({ setShowOurProjects }) => {

    const [selectedProject, setSelectedProject] = useState(null)

    const workData = [
        {
            title: 'FarmPick - Ecommmerce',
            tags: ['Mobile App', 'UI/UX'],
            image: assets.farmpick_n,
            url: 'http://farmpickshope.vercel.app/'
        },
        {
            title: 'FiberFlow - Network provider',
            tags: ['Web App', 'Branding'],
            image: assets.fiberflow_n,
            url: 'https://fiberflow-react.vercel.app/'
        },
        {
            title: 'Dots & Decimals - Consulting',
            tags: ['Enterprise', 'Dev'],
            image: assets.dotsanddecimal_n,
            url: 'https://dot-decimals-1.onrender.com/'
        },
    ]

    return (
        <section id='our-work' className='bg-white dark:bg-black overflow-hidden min-h-screen flex flex-col justify-center pt-24 pb-12'>

            <div className='max-w-7xl 2xl:max-w-[1872px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-24 w-full'>

                {/* Header */}
                <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-8'>
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className='text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white tracking-tight mb-4'
                        >
                            Selected Works
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className='text-xl text-gray-600 dark:text-gray-400 max-w-lg'
                        >
                            Showcasing our finest digital craftsmanship.
                        </motion.p>
                    </div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onClick={() => {
                            setShowOurProjects(true)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        className='hidden md:flex items-center gap-3 group'
                    >
                        <span className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">View All Projects</span>
                        <span className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center group-hover:bg-black group-hover:border-black dark:group-hover:bg-white dark:group-hover:border-white transition-all">
                            <svg className="w-4 h-4 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black transform group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </motion.button>
                </div>

                {/* Premium Grid Layout */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {workData.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className={`group cursor-pointer flex flex-col gap-6 ${index === 1 ? 'md:mt-16' : ''}`} // Staggered grid effect
                            onClick={() => setSelectedProject(work)}
                        >
                            {/* Image Card Container */}
                            <div className='relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 dark:bg-zinc-900'>
                                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10' />

                                {/* Floating Tags */}
                                <div className='absolute top-6 left-6 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300'>
                                    {work.tags.map((tag, i) => (
                                        <span key={i} className='bg-white/90 dark:bg-black/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                                />

                                {/* Arrow Button */}
                                <div className='absolute bottom-6 right-6 z-20 w-12 h-12 bg-white dark:bg-black rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100'>
                                    <svg className="w-5 h-5 text-black dark:text-white -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>

                            {/* Info */}
                            <div>
                                <h3 className='text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors'>
                                    {work.title}
                                </h3>
                                <p className='text-sm text-gray-500 mt-1 dark:text-gray-400 font-medium'>
                                    {work.tags.join('  •  ')}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className='mt-16 flex justify-center md:hidden'>
                    <button
                        onClick={() => {
                            setShowOurProjects(true)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        className='bg-black dark:bg-white text-white dark:text-black px-10 py-4 rounded-full font-bold uppercase tracking-wider'
                    >
                        View All Projects
                    </button>
                </div>

            </div>

            {/* Modal Support */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="bg-white dark:bg-zinc-900 w-full max-w-4xl rounded-3xl overflow-hidden relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            layoutId={`card-${selectedProject.title}`}
                        >
                            <div className="relative h-[400px] md:h-[500px]">
                                <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} />
                                <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 bg-black/50 text-white p-3 rounded-full backdrop-blur-md hover:bg-black/70 transition-colors">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold dark:text-white mb-3">{selectedProject.title}</h3>
                                        <div className="flex gap-3">
                                            {selectedProject.tags.map(tag => <span key={tag} className="border border-gray-200 dark:border-gray-700 px-4 py-1.5 rounded-full text-sm font-medium dark:text-gray-300">{tag}</span>)}
                                        </div>
                                    </div>
                                    <a href={selectedProject.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform">
                                        Visit Live <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                    A premium digital experience crafted with precision and improved performance. This project represents our commitment to quality and user-centric design.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}

export default OurWork
