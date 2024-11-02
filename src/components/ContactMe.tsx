"use client";

import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Values = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

type Props = object;

function ContactMe({}: Props) {
    const { handleSubmit, register, formState: { errors } } = useForm<Values>();
    const onSubmit: SubmitHandler<Values> = (formData) => {
        window.location.href = `mailto:kimutaij192@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
        console.log(formData);
    };

    return (
        <div className='h-[125vh] relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-32 uppercase tracking-[20px] text-gray-500 text-2xl md:text-3xl lg:text-4xl'>
    Contact
</h3>
<h4 className='absolute top-40 uppercase tracking-[3px] text-gray-500 text-sm md:text-base lg:text-lg'>
    I have got just what you need.{" "}
    <span className='decoration-[#F7AB0A]/50'>Let&apos;s Talk.</span>
</h4>

            <div className='flex flex-col space-y-5 items-center'>
            <div className='space-y-10'>
    <div className='flex flex-wrap items-center justify-center space-x-5'>
        <div className='flex items-center space-x-2'>
            <PhoneIcon className='text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>+254710638127</p>
        </div>
        
        <div className='flex items-center space-x-2'>
            <MapPinIcon className='text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>Nairobi</p>
        </div>
        
        <div className='flex items-center space-x-2'>
            <EnvelopeIcon className='text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7 animate-pulse' />
            <p className='text-lg md:text-2xl'>jafferkimitei@gmail.com</p>
        </div>
    </div>
</div>


<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2.5 w-full md:w-3/4 mx-auto'>
    <div className='flex flex-col space-y-2 w-full'>
        <input 
            {...register('name', { required: true })}
            placeholder='Name'
            className='contactInput w-full' 
            type="text" 
        />
        {errors.name && <span className='text-red-500 text-sm'>Please enter your full names</span>}

        <input 
            {...register('email', { 
                required: true, 
                pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                }
            })}
            placeholder='Email' 
            className='contactInput w-full' 
            type="email" 
        />
        {errors.email && <span className='text-red-500 text-sm'>{errors.email.message || 'Please enter your email address'}</span>}
    </div>

    <input 
        {...register('subject', { required: true })}
        placeholder='Subject'
        className='contactInput w-full' 
        type="text" 
    />
    {errors.subject && <span className='text-red-500 text-sm'>Please enter a subject</span>}

    <textarea 
        {...register('message', { required: true })}
        placeholder='Message'
        className='contactInput w-full'
        rows={4}
    />
    {errors.message && <span className='text-red-500 text-sm'>Please enter message</span>}

    <button 
        type='submit'
        className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit
    </button>
</form>


            </div>
        </div>
    );
}

export default ContactMe;
