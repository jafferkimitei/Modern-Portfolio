import React from 'react';
import { motion } from 'framer-motion';
import { Skill as SkillType } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
    skill: SkillType;
    directionLeft?: boolean;
}

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        alt="Skill Icon"
        className='rounded-full border border-gray-500 object-cover w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out transform group-hover:scale-110' // Added scale on hover
      />

      <motion.div 
        className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-white w-full h-full rounded-full flex items-center justify-center'
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <p className='text-lg sm:text-xl md:text-2xl font-bold text-black opacity-100'>
          {skill.progress}%
        </p>
      </motion.div>
    </div>
  );
}

export default Skill;
