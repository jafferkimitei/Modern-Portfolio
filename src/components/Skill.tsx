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
        className='rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <motion.div 
        className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full flex items-center justify-center z-0'
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <p className='text-3xl font-bold text-black opacity-100'>
          {skill.progress}%
        </p>
      </motion.div>
    </div>
  );
}

export default Skill;
