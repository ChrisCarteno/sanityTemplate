import { NextResponse } from "next/server";

type Feedback = {
    fullname?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export async function POST(request: Request){
    const data: Feedback = await request.json();
    console.log('data: ', data)
    
    const { fullname, email, subject, message } = data;

    return NextResponse.json({ fullname, email, subject, message})
}


