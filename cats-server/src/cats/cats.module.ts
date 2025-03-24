import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cat } from './cat.model';
import { Mouse } from 'src/mouse/mouse.model';

@Module({
  imports: [SequelizeModule.forFeature([Cat, Mouse])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
