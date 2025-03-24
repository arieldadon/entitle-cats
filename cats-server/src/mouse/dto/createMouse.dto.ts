import { IsString, MaxLength } from 'class-validator';

export class CreateMouseDto {
  @IsString()
  @MaxLength(100)
  name: string;
}
