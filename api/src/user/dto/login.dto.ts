import { IsNumber, IsString, MinLength, Min, Max, IsInt } from 'class-validator';

export class LoginDto {
  @IsNumber({}, { message: 'CIN must be a number' })
  @IsInt({ message: 'CIN must be an integer' })
  @Min(10000000, { message: 'CIN must be 8 digits long' })
  @Max(99999999, { message: 'CIN must be 8 digits long' })
  cin: number

  @IsString()
  @MinLength(6)
  password: string;
}