import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { AlbumController } from './controllers/album.controller';
import { TutorialController } from './controllers/tuts.controller';
import { CarService } from './services/car.service';
import { CarController } from './controllers/car.controller';

@Module({
  controllers: [UsersController, AlbumController, TutorialController, CarController],
  providers: [{ provide: "TOKEN_SERVICE", useValue: "TOKEN_SERVICE_VALUE" }, CarService] // injecting service for dependency injection
})
export class AppModule { }
