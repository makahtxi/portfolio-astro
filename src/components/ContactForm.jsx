import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactForm(props){
    const form = useRef();
    const publicKey = props.apiKey
    const serviceId = props.serviceId
    const template = props.template
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(props.serviceId, props.template, form.current, {
                publicKey: publicKey,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="flex justify-center">
        <form className="flex flex-col mt-10 w-full" ref={form} onSubmit={sendEmail}>
            <label htmlFor="user_name" className="font-semibold py-1">Name</label>
            <input id="user_name" name="user_name" type="text"
                   className="mb-3 p-1 border-stone-500 border-2 rounded-md bg-[#FFEFEF]"/>
            <label htmlFor="user_email" className="font-semibold py-1">E-mail</label>
            <input id="user_email" name="user_email" type="email"
                   className="mb-3 p-1 border-stone-500 border-2 rounded-md
                    focus:border-2 focus:border-green-500 bg-[#FFEFEF]"/>
            <label htmlFor="message" className="font-semibold py-1">Message</label>
            <textarea id="message" name="message" rows="10"
                      className="mb-3 p-1 border-stone-500 border-2 rounded-md bg-[#FFEFEF]">
                    </textarea>
            <input type="submit" value="Send Message" className="w-full bg-[#D07878] p-3 rounded-xl text-white
                    active:scale-95 active:opacity-90
                    active:translate-y-1 hover:saturate-150 hover:cursor-pointer
                    transition">

            </input>
        </form>
        </div>
    );
};
