import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password or App password
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'henyorlerjosephine@gmail.com', // Recipient email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error.message); // Detailed logging
    return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), { status: 500 });
  }
}
