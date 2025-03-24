import { Type } from 'class-transformer';
import {
  IsArray,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { CreateMouseDto } from 'src/mouse/dto/createMouse.dto';

export class CreateCatDto {
  @IsString()
  @MaxLength(50)
  firstName: string;

  @IsString()
  @MaxLength(50)
  lastName: string;

  @ValidateNested({ each: true })
  @Type(() => CreateMouseDto)
  @IsArray()
  mice: CreateMouseDto[];

  @IsOptional()
  @IsUrl()
  @MaxLength(1000)
  imageUrl: string;

  @IsOptional()
  @IsString()
  @MaxLength(3000)
  description?: string;
}
