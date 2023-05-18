import { NextResponse } from "next/server";
const mail = require('@sendgrid/mail');

type Feedback = {
    fullname?: string;
    email?: string;
    subject?: string;
    message?: string;
}

mail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request: Request){
    const data: Feedback = await request.json();
    
    const { fullname, email, subject, message } = data;

    const messageBody = `
        Full Name: ${fullname}\r\n
        Email: ${email}\r\n
        Subject: ${subject}\r\n
        Message: ${message}
    `;

    const msg = {
        to: 'pro@christiancarteno.com', // Change to your recipient
        from: 'hello@weaversdev.com', // Change to your verified sender
        subject: data.subject,
        text: messageBody,
        html: messageBody.replace(/\r\n/g, '<br>'),
      }

    await mail.send(msg);
    return NextResponse.json({ fullname, email, subject, message})
}


