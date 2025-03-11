import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.model';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get('')
  findAll(): Promise<Cat[]> {
    return this.catsService.getAllCats();
  }

  @Post()
  addNewCat(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.createCat(createCatDto);
  }

  @Delete(':id')
  deleteCat(@Param('id') id: number): Promise<number> {
    return this.catsService.deleteCat(id);
  }
}
