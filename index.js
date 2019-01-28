const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    console.log("TEST WOY: ", req.body)
    console.log('fullname: ', req.body.fullName)
    nodeMailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h2>You got new message!</h2>
            <ul>
                <li>Name: ${req.body.fullName}</li>
                <li>Subject: ${req.body.subject}</li>
                <li>Email: ${req.body.email}</li>
                <li>Message: ${req.body.message}</li>
            </ul>
        `

        // let transporter = nodeMailer.createTransport({
        //     host: 'smtp.ethereal.email',
        //     port: 587,
        //     auth: {
        //         user: 'zembj6nobax36ncc@ethereal.email',
        //         pass: 'kyXrBB1kzxAvHAkw33'
        //     }
        // })

        let transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mfahmifachreza@gmail.com',
                pass: 'ormdphokcyscztsj'
            }
        })


        let mailOptions = {
            from: req.body.email,
            to: 'mfahmifachreza@gmail.com',
            replyTo: req.body.email,
            subject: req.body.subject,
            html: htmlEmail,
        }

        transporter.sendMail(mailOptions, (err, info) => {
            console.log('I: ', info)
            if(err) {
                return console.log('err: ', err)
            }
            console.log('Message Sent: %s', info.message)
            console.log('Message URL: %s', nodeMailer.getTestMessageUrl(info))
        })


    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`HOLLA! Server listening on port ${PORT}`)
})