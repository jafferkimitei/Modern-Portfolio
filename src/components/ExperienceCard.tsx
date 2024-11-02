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
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[500px] lg:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="flex justify-center">
                <Image
                    className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
                    src={urlFor(experience?.companyImage).url()}
                    alt="Company Logo"
                    width={128}
                    height={128}
                    priority
                />
            </div>
            <div className='px-2 md:px-10'>
                <h4 className='text-2xl md:text-4xl font-light'>{experience.jobTitle}</h4>
                <p className='font-bold text-xl md:text-2xl mt-1'>{experience.company}</p>
                <div className='flex space-x-2 my-2'>
                    {experience.technologies.map(technology => (
                        <Image
                            key={technology._id}
                            className="h-8 w-8 md:h-10 md:w-10 rounded-full"
                            src={urlFor(technology.image).url()}
                            alt="Technology Logo"
                            width={40}
                            height={40}
                        />
                    ))}
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
                </p>
            </div>
           
            <ul className='list-disc list-inside space-y-2 ml-5 text-lg max-h-60 md:max-h-96 w-4/5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 text-white'>
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </motion.div>
    </article>
  )
}

export default ExperienceCard;
