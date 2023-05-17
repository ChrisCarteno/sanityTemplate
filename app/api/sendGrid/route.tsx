import { NextResponse } from "next/server";

type Feedback = {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export async function POST(request: Request){
    const data: Feedback = await request.json();
    console.log('data: ', data)
    
    const { name, email, subject, message } = data;

    return NextResponse.json({ name, email, subject, message})
}


