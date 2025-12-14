const axios = require("axios");

const MAILERSEND_API = "https://api.mailersend.com/v1/email";

const sendEmail = async ({ to, subject, html }) => {
  try {
    await axios.post(
      MAILERSEND_API,
      {
        from: {
          email: process.env.MAILERSEND_FROM,
          name: "Smart Lighting System",
        },
        to: [{ email: to }],
        subject,
        html,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error(
      "MailerSend error:",
      err.response?.data || err.message
    );
  }
};

module.exports = sendEmail;
