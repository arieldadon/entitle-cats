import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './cat.model';
import { InjectModel } from '@nestjs/sequelize';
import { Mouse } from 'src/mouse/mouse.model';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat)
    private readonly catsRepository: typeof Cat,
  ) {}

  async getAllCats(): Promise<Cat[]> {
    return this.catsRepository.findAll<Cat>({
      include: [
        {
          model: Mouse,
        },
      ],
    });
  }

  async createCat(createCatDto: CreateCatDto): Promise<Cat> {
    console.log(createCatDto);

    return this.catsRepository.create(
      {
        ...createCatDto,
      },
      { include: [Mouse] },
    );
  }

  async deleteCat(id: number): Promise<number> {
    return this.catsRepository.destroy({ where: { id } });
  }
}
