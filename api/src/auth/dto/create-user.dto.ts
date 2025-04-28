import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  cin: number;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  role: string;
}