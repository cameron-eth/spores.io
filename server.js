// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse request bodies
app.use(bodyParser.json());

// POST route to process payment and send email
app.post('/process_payment', async (req, res) => {
  const { name, address, amount, paymentMethodId } = req.body;

  try {
    // Perform payment processing logic here (e.g., charge the paymentMethodId with Stripe)

    // After successful payment processing, send an email with the order information
    const transporter = nodemailer.createTransport({
      host: 'your-smtp-host', // Replace with your SMTP host
      port: 587, // Replace with your SMTP port
      auth: {
        user: 'your-email@example.com', // Replace with your email address
        pass: 'your-email-password', // Replace with your email password
      },
    });

    const mailOptions = {
      from: 'cnorfleetdvc@gmail.com', // Replace with your email address
      to: 'norfleet.tech@gmail.com', // Replace with your business email address
      subject: 'New Order',
      text: `New order received:\n\nName: ${name}\nAddress: ${address}\nAmount: $${amount / 100}\nPayment Method ID: ${paymentMethodId}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (err) {
    console.error('Error sending email:', err);
  }

  res.sendStatus(200); // Send a success response to the client
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
