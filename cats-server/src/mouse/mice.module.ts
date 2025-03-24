import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Mouse } from './mouse.model';
import { Cat } from 'src/cats/cat.model';

@Module({
  imports: [SequelizeModule.forFeature([Mouse, Cat])],
})
export class MiceModule {}
