import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1ed9a495a4b5cf",
    pass: "0e6183f2133f0c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'FMRocha <fmrocha@gmail.com>',
      to: 'Flavio Rocha <fmrocha@gmail.com>',
      subject,
      html: body,
    });
  }
}