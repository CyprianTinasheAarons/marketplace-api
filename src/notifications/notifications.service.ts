import { Injectable } from '@nestjs/common';
import { Channel, connect } from 'amqplib';
import { createTransport } from 'nodemailer';

@Injectable()
export class NotificationsService {
  private readonly url: string;
  private channel: Channel;

  constructor() {
    this.url = process.env.CLOUDAMQP_URL || 'amqp://localhost';
  }

  async start() {
    const connection = await connect(this.url);
    this.channel = await connection.createChannel();
    await this.channel.assertQueue('notifications');
  }

  async publishNotification(queue: string, message: any) {
    await this.channel.sendToQueue(queue, Buffer.from(message));
  }

  async sendEmail(email: string, subject: string, message: string) {
    const transporter = createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {},
    });
    const info = await transporter.sendMail({
      from: 'NestJS',
      to: email,
      subject: subject,
      text: message,
    });
    return info;
  }

  async stop() {
    await this.channel.close();
  }

  async onModuleInit() {
    await this.start();
  }
}
