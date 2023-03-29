import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import {
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'Notification sent successfully',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
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
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
            },
            subject: {
              type: 'string',
            },
            message: {
              type: 'string',
            },
          },
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'Email sent successfully',
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized',
  })
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
