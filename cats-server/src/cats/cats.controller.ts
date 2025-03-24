import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.model';
import { CreateCatDto } from './dto/createCat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('')
  index(): Promise<Cat[]> {
    return this.catsService.getAllCats();
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.createCat(createCatDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<number> {
    return this.catsService.deleteCat(id);
  }
}
