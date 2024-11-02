"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { urlFor } from '../../sanity'
import { PageInfo } from '../../typings'

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='space-y-20 absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:text-3xl'>
            About
        </h3>

    <motion.img
    initial={{
        x: -200,
        opacity:0,
    }}
    transition={{
        duration:1.2, ease: 'easeOut'
    }}
    whileInView={{opacity:1, x:0}}
    viewport={{ once: true}}
    src={urlFor(pageInfo?.profilePic).url()}
    className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-48 md:h-48 lg:w-[300px] lg:h-[350px] overflow-hidden'
    />

    <div className='space-y-5 px-0 md:px-5'>
        <h4 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
        </h4>
    <p className='text-sm sm:text-base'>
        {pageInfo?.backgroundInformation}
    </p>
    </div>
    
    </motion.div>
  )
}