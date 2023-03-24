import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  async publishNotification(@Res() response, @Body() message: string) {
    await this.notificationsService.publishNotification(
      'notifications',
      message,
    );
    return response.status(HttpStatus.CREATED).json({
      message: 'Notification sent successfully',
    });
  }

  @Post('email')
  async sendEmail(@Res() response, @Body() message: any) {
    await this.notificationsService.sendEmail(
      message.email,
      message.subject,
      message.message,
    );
    return response.status(HttpStatus.CREATED).json({
      message: 'Email sent successfully',
    });
  }
}
