import nodemailer from 'nodemailer'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { choices, name, email, message } = req.body

        try {
            // Create a transporter using your email service provider
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com', // Replace with your SMTP server hostname
                port: 587, // Replace with your SMTP server port
                secure: false,
                auth: {
                    user: process.env.EMAIL_SEND_EMAIL,
                    pass: process.env.PASS_SEND_EMAIL,
                },
            })

            // Create an email message
            const mailOptions = {
                from: process.env.EMAIL_SEND_EMAIL,
                to: 'emmaelliot2020@gmail.com', // Replace with the recipient's email address
                subject: 'New Contact Form Submission',
                text: `
                  Choice: ${choices}
                  Name: ${name ? name : "-"}
                  Email: ${email ? email : "-"}
                  Message: ${message ? message : "-"}
                `,
            }

            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    res.status(500).end(); // Internal Server Error
                } else {
                    console.log('Email sent:', info.response);
                    res.status(200).end(); // Success
                }
            })
        } catch (error) {
            console.error('Error sending email:', error)
            res.status(500).end()
        }
    } else {
        console.error('Method Not Allowed')
        res.status(405).end() // Method Not Allowed
    }
}
