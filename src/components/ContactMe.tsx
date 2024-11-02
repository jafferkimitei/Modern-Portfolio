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
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:text-3xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h3 className='top-36 uppercase tracking-[3px] text-gray-500 text-sm md:text-base text-center'>
                I have got just what you need.{""}
                <span className='decoration-[#F7AB0A]/50'>Let&apos;s Talk</span>
                </h3>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-sm md:text-base'>+254710638127</p>

                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-sm md:text-base'>Nairobi</p>

                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-sm md:text-base'>kimutaij192@gmail.com</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input 
                            {...register('name', { required: true })}
                            placeholder='Name'
                            className='contactInput' 
                            type="text" 
                        />
                        {errors.name && <span className='text-red-500 text-sm'>This field is required</span>}

                        <input 
                            {...register('email', { 
                                required: true, 
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            placeholder='Email' 
                            className='contactInput' 
                            type="email" 
                        />
                        {errors.email && <span className='text-red-500 text-sm'>{errors.email.message || 'This field is required'}</span>}
                    </div>

                    <input 
                        {...register('subject', { required: true })}
                        placeholder='Subject'
                        className='contactInput' 
                        type="text" 
                    />
                    {errors.subject && <span className='text-red-500 text-sm'>This field is required</span>}

                    <textarea 
                        {...register('message', { required: true })}
                        placeholder='Message'
                        className='contactInput'
                    />
                    {errors.message && <span className='text-red-500 text-sm'>This field is required</span>}

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
