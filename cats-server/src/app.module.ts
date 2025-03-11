import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './cats/cat.model';
import { Mouse } from './mouse/mouse.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ariel',
      database: 'cats-exercise-db',
      models: [Cat, Mouse],
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
