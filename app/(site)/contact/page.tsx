'use client';

import {useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

const initState = {
    fullname: '',
    email: '',
    subject: '',
    message: '',
}

export default function ContactUs() {
    const [data, setData] = useState(initState);
    const router = useRouter();
    
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(JSON.stringify(data));
        const { fullname, email, subject, message } = data;
        
        const res = await fetch('/api/sendGrid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullname, email, subject, message }),
        });

        const result = await res.json();
        console.log('result: ', result);

        //Navigate to Thank You Page
        router.push('/thank-you');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;

        setData( prevData => ({
            ...prevData,
            [name]: e.target.value,
        }))
    }

    const canSave = [...Object.values(data)].every(Boolean);

    return (
        <form onSubmit={handleSubmit} className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white">
            <h1 className="text-2xl font-bold">
                Contact Us
            </h1>

            <label htmlFor="fullname" className="text-gray-500 font-light mt-8">
                Full name<span className="text-red-500">*</span>
            </label>
            <input name="fullname" type="text" id="name" placeholder='Full Name' pattern="/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/"
                value={data.fullname} onChange={handleChange}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label htmlFor="email" className="text-gray-500 font-light mt-4" >
                E-mail<span className="text-red-500">*</span>
            </label>
            <input type="email" name="email" id="email" placeholder='Email Address' pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                value={data.email} onChange={handleChange}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />


            <label htmlFor="subject" className="text-gray-500 font-light mt-4" >
                Subject<span className="text-red-500">*</span>
            </label>
            <input type="text" name="subject" id="subject" placeholder='Subject' maxLength={150} pattern="/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/"
                value={data.subject} onChange={handleChange}
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label htmlFor="message" className="text-gray-500 font-light mt-4" >
                Message<span className="text-red-500">*</span>
            </label>
            <textarea name="message" id='message' placeholder='Write Message Here' rows={5} cols={50} maxLength={500}
                value={data.message} onChange={handleChange}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <div className="flex flex-row items-center justify-start">
                <button disabled={!canSave}
                className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center">
                Submit
                </button>
            </div>
        </form>
    )
}
