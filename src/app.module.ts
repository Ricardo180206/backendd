import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgresql://art:FPPWUWx5kdtxJTIRXbgprwQ2aQ45bp4w@dpg-d0vi1mffte5s739n7eeg-a/notification_db_6c44',
      autoLoadEntities: true,
      synchronize: true,
    }),
    NotificationsModule,
  ],
})
export class AppModule {}
