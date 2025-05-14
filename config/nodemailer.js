import nodemailer from 'nodemailer'
import { EMAIL_PASSWORD } from './env.js'

export const accountEmail = "niyubwayoiraelie5777@gmail.com";

export const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: accountEmail,
        pass: EMAIL_PASSWORD,
    },
})