'use client'

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {User, MailIcon, ArrowRightIcon, MessageSquare} from 'lucide-react'


const Form = ()=> {
  const [showSuccess, setShowSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xrhs05g', 'template_qvg2vhw', form.current, {
        publicKey: '8dTSSBLXsDAAj2_ta',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-y-4">
        {/** INPUT */}
        <div className="relative flex items-center">
            <Input type='name' name="user_name" id='name' placeholder='Name'/>
            <User className="absolute right-6" size={20} />
        </div>
         {/** INPUT */}
         <div className="relative flex items-center">
            <Input type='email' name="user_email" id='email' placeholder='Email'/>
            <MailIcon className="absolute right-6" size={20} />
        </div>
         {/** INPUT */}
         <div className="relative flex items-center">
            <Textarea name="message" placeholder="Say what's on you mind !!"/>
            <MessageSquare className="absolute top-4 right-6" size={20} />
        </div>
        <Button className='flex items-center gap-x-1 max-w-[166px]'> Let's Talk
            <ArrowRightIcon size ={20} />
        </Button>
        {showSuccess && <p className="text-green-500">Success! Your message has been sent.</p>}
    </form>
  )
}
export default Form;