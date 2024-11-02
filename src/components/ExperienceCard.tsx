import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Experience } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
    experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-[90%] md:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[900px] snap-center bg-[#292929] p-5 sm:p-8 lg:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden mx-auto'>
        <motion.div
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className='flex items-center space-x-4'>
                <Image
                    className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full object-cover object-center'
                    src={urlFor(experience?.companyImage).url()}
                    alt="Company Logo"
                    width={128}
                    height={128}
                    priority
                />
                <div className='flex flex-col'>
                    <h4 className='text-2xl md:text-3xl font-light uppercase'>{experience.jobTitle}</h4>
                    <p className='font-bold text-xl md:text-2xl mt-1 sentencecase'>{experience.company}</p>
                    <div className='flex flex-wrap justify-start space-x-2 my-3'>
                        {experience.technologies.map(technology => (
                            <Image
                                key={technology._id}
                                className="h-4 w-4 sm:h-6 sm:w-6 rounded-full"
                                src={urlFor(technology.image).url()}
                                alt="Technology Logo"
                                width={40}
                                height={40}
                            />
                        ))}
                    </div>
                   
                </div>
            </div>
            <p className='uppercase py-3 sm:py-4 text-gray-300 text-sm sm:text-base'>
                        {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
                    </p>
            <ul className='list-disc space-y-4 ml-5 text-sm sm:text-base max-h-52 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </motion.div>
    </article>
  )
}

export default ExperienceCard;
