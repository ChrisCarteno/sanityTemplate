// import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// async function sendEmail(req, res) {
//   try {
//     // console.log("REQ.BODY", req.body);
//     await sendgrid.send({
//         to: "test@example.com", 
//         from: "test@example.com",
//         subject: 'Sending with SendGrid is Fun',
//         text: 'and easy to do anywhere, even with Node.js',
//         html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     });
//   } catch (error) {
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: "" });
// }

// export default sendEmail;


import { NextResponse } from 'next/server';
 
export async function GET() {
  const res = await fetch('https://data.mongodb-api.com/...', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();
 
  return NextResponse.json({ data });
}