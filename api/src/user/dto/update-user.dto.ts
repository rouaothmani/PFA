import { IsNumber, IsString, Length, MinLength, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString({ message: 'Password must be a string' })
  @MinLength(6, {
    message: 'Password must be at least 6 characters long',
  })
  password?: string;
}