import { IsNumber, IsString, Length, MinLength, IsInt, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNumber({},{ message: 'CIN must be a number' })
  @IsInt({ message: 'CIN must be an integer' })
  @Length(8, 8, {
    message: 'CIN must be exactly 8 digits long',
  })
  cin: number;

  @IsString({ message: 'Password must be a string' })
  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  password: string;
}
