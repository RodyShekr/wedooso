const express = require(`express`);
const app = express();

require('dotenv').config();

const nodemailer = require(`nodemailer`);

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static(`public`));
app.use(express.json());

app.get(`/`, (req, res) => {
    res.sendFile(__dirname + `/public/index.html`)  /*__dirname = current directory we are in */
})

app.post(`/`, (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        host: `smtp.ionos.de`,
        port: 587,
        auth: {
            user: process.env.email,
            pass:  process.env.emailPass
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: process.env.email,
        subject: req.body.subject,   /* You can do this if ionos isn't knowing the email: `Message from ${req.body.email}: ${req.body.subject}` */
        text: req.body.message
    }

    console.log(mailOptions)

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
            res.send(`error`)
        } else {
            console.log(`Email sent: ` + info.response);
            res.send(`success`)
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})