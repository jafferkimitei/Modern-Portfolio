"use client"

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import Image from 'next/image'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
    const [text] = useTypewriter({
        words: [
            `Hi, the name's ${pageInfo?.name}`,
            "Caffeine-Connoisseur.tsx",
            "<ButCodeRules />",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <div className="relative rounded-full overflow-hidden mx-auto object-cover w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
                <Image
                    src={urlFor(pageInfo?.heroImage).url()}
                    alt='Jaffer Kimitei'
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>
            <div className='z-20'>
                <h2 className='text-xs sm:text-sm md:text-base uppercase text-gray-500 pb-2 tracking-[5px] sm:tracking-[10px] md:tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>

                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>

                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div> 
        </div>
    )
}
