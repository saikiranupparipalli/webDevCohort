import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "example@gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.auth.SMTP_USER,
        pass:process.env.SMTP_PASS
    }
})

const sendMail = async(from, subject, from)=>{
    await  transporter.sendMail({
        from: `${process.env.SMTP_FROM_EMAIL}`,
        to,
        subject,
        html
    })
}
export {sendMail}