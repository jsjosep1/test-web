const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();


app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "nwctest4@gmail.com",
      pass: "mwctesting",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  
  router.post("/contact", (req, res) => {
    const { name, email, message } = req.body; 
    const mail = {
      from: name,
      to: "your-recipient-email@gmail.com", // Replace with your email
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
  
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ status: "ERROR", error: error.message });
      } else {
        res.status(200).json({ status: "Message Sent" });
      }
    });
  });