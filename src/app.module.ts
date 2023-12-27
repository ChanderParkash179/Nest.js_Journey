import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { AlbumController } from './controllers/album.controller';

@Module({
  controllers: [UsersController, AlbumController],
})
export class AppModule { }
