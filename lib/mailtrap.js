import { MailtrapClient } from "mailtrap";

const mailtrapConfig = {
  client: {
    token: process.env.MAILTRAP_TOKEN,
  },
  sender: {
    name: process.env.MAILTRAP_SENDER_NAME,
    email: process.env.MAILTRAP_SENDER_EMAIL
  }
};

const client = new MailtrapClient(mailtrapConfig.client);

/**
  Mailtrap object for sending emails.
*/
const mailtrap = {
  /**
    @param {Object} options - Object containing email information.
    @param {string} options.type - The type of email to send.
    @param {string} options.to - The email address of the recipient.
    @param {string} options.subject - The subject of the email.
    @param {string} options.text - The plain text content of the email.
    @returns {Promise<SendResponse>} - A Promise that resolves when the email is sent successfully.
  */
  send: async ({ type, to, subject, text }) => {

    
    return client.send({
      from: mailtrapConfig.sender,
      to,
      subject,
      text
    });
  }
}

export default mailtrap;
