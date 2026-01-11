import React from 'react'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'
import assets from '../assets/assets'

const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "--- Enter Web3Forms key ---");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        toast.success('Message sent successfully!')
        event.target.reset();
        setSelectedInterest("")
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const interestOptions = [
    "Web Development", "Mobile App", "UI/UX Design", "Branding", "Other"
  ]

  const [selectedInterest, setSelectedInterest] = React.useState("")

  return (
    <section id='contact-us' className='bg-white dark:bg-black text-black dark:text-white py-24 min-h-screen flex items-center justify-center overflow-hidden'>
      <div className='max-w-7xl 2xl:max-w-[1872px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-24 w-full'>

        <div className='flex flex-col lg:flex-row justify-between gap-16 lg:gap-0'>

          {/* Left Side Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='lg:w-1/3 flex flex-col justify-between lg:pr-16 lg:border-r border-gray-200 dark:border-gray-800'
          >
            <div>
              <p className='text-sm font-semibold tracking-widest text-purple-500 uppercase mb-4'>Reach Us</p>
              <h1 className='text-6xl sm:text-7xl font-bold leading-tight mb-16'>
                Connect with <br /> <span className='text-gray-400 dark:text-gray-600'>us.</span>
              </h1>
            </div>

            <div className='flex flex-col gap-12'>
              <div>
                <h3 className='text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4'>Email & Phone</h3>
                <p className='text-lg font-medium hover:text-purple-500 dark:hover:text-purple-400 transition-colors cursor-pointer text-gray-900 dark:text-white'>alpheryteam@gmail.com</p>
                <div className='mt-2 space-y-1 text-gray-500 dark:text-gray-400'>
                  <a href="tel:+918838362439" className='block hover:text-black dark:hover:text-white transition-colors'>+91 88383 62439</a>
                  <a href="tel:+919791334944" className='block hover:text-black dark:hover:text-white transition-colors'>+91 97913 34944</a>
                </div>
              </div>

              <div>
                <h3 className='text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4'>Address</h3>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  3, Bhagatsingh Road,<br />
                  Saibaba Colony, Coimbatore,<br />
                  Tamil Nadu - 641025
                </p>
              </div>

              <div>
                <h3 className='text-xs font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase mb-4'>Socials</h3>
                <div className='flex gap-6'>
                  <a href="#" className='hover:opacity-80 transition-opacity'><img src={assets.instagram_icon} alt="Instagram" className="w-6 h-6 dark:invert" /></a>
                  <a href="#" className='hover:opacity-80 transition-opacity'><img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6 dark:invert" /></a>
                  <a href="#" className='hover:opacity-80 transition-opacity'><img src={assets.linkedin_icon} alt="LinkedIn" className="w-6 h-6 dark:invert" /></a>
                  <a href="#" className='hover:opacity-80 transition-opacity'><img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6 dark:invert" /></a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='lg:w-1/2 lg:pl-16'
          >
            <form onSubmit={onSubmit} className='flex flex-col gap-8'>
              <input type="hidden" name="interest" value={selectedInterest} />

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='border-b border-gray-300 dark:border-gray-800 py-3'>
                  <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500 dark:text-gray-400'>Your Name</label>
                  <input name="name" type="text" placeholder='John Doe' className='w-full bg-transparent outline-none text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:placeholder-gray-500 transition-colors' required />
                </div>
                <div className='border-b border-gray-300 dark:border-gray-800 py-3'>
                  <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500 dark:text-gray-400'>Your Email</label>
                  <input name="email" type="email" placeholder='john@example.com' className='w-full bg-transparent outline-none text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:placeholder-gray-500 transition-colors' required />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='border-b border-gray-300 dark:border-gray-800 py-3'>
                  <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500 dark:text-gray-400'>Your Mobile Number</label>
                  <input name="mobile" type="tel" placeholder='+91 98765 43210' className='w-full bg-transparent outline-none text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:placeholder-gray-500 transition-colors' />
                </div>
                <div className='border-b border-gray-300 dark:border-gray-800 py-3'>
                  <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500 dark:text-gray-400'>Your Address</label>
                  <input name="address" type="text" placeholder='Street, City, Country' className='w-full bg-transparent outline-none text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:placeholder-gray-500 transition-colors' />
                </div>
              </div>

              <div className='py-4'>
                <label className='block text-xs font-bold uppercase tracking-wider mb-6 text-gray-500 dark:text-gray-400'>What are you interested in?</label>
                <div className='flex flex-wrap gap-3'>
                  {interestOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedInterest(option)}
                      className={`px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 
                        ${selectedInterest === option
                          ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                          : 'bg-transparent text-gray-500 dark:text-gray-400 border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className='border-b border-gray-300 dark:border-gray-800 py-3'>
                <label className='block text-xs font-bold uppercase tracking-wider mb-2 text-gray-500 dark:text-gray-400'>Tell us more</label>
                <textarea name="message" rows={2} placeholder='Project details, budget, timeline...' className='w-full bg-transparent outline-none text-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:placeholder-gray-500 resize-none' required />
              </div>

              <div className='pt-8'>
                <button type="submit" className='bg-black dark:bg-white text-white dark:text-black px-12 py-5 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform duration-300 w-full sm:w-auto'>
                  Send Message
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
export default ContactUs
