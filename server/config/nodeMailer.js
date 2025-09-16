import nodemailer from "nodemailer"

const transpoter=nodemailer.createTransport({
    host:"smtp-relay.brevo.com",
    post:587,
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS,
    }

})

export default transpoter;