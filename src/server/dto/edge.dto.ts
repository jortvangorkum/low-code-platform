import { IsString } from 'class-validator';

export default class EdgeDto {
  @IsString()
  id: string;

  @IsString()
  source: string;

  @IsString()
  target: string;
}
