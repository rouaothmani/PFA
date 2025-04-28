import { IsNumber, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsNumber()
  cin: number;

  @IsString()
  @MinLength(6)
  password: string;
}