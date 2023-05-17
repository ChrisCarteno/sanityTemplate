'use client';

import {useState, FormEvent, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

const initState = {
    name: '',
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
        const { name, email, subject, message } = data;
        
        const res = await fetch('/api/sendGrid', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
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
        <form method='post' onSubmit={handleSubmit}
            className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
            >
            <h1 className="text-2xl font-bold dark:text-gray-50">
                Send a message
            </h1>

            <label
                htmlFor="fullname"
                className="text-gray-500 font-light mt-8 dark:text-gray-50"
            >
                Full name<span className="text-red-500 dark:text-gray-50">*</span>
            </label>
            <input
                name="fullname"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />


            <label
                htmlFor="email"
                className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
                E-mail<span className="text-red-500">*</span>
            </label>
            <input
                type="email"
                name="email"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />


            <label
                htmlFor="subject"
                className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
                Subject<span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                name="subject"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            />

            <label
                htmlFor="message"
                className="text-gray-500 font-light mt-4 dark:text-gray-50"
            >
                Message<span className="text-red-500">*</span>
            </label>
            <textarea
                name="message"
                className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
            ></textarea>

            <div className="flex flex-row items-center justify-start">
                <button
                type="submit"
                className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
                >
                Submit
                </button>
            </div>
        </form>
    )
}
