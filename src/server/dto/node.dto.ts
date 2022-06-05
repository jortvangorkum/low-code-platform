import { IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export default class NodeDto {
  @IsString()
  id: string;

  position: PositionDto;

  @IsObject()
  data: Record<string, unknown>;

  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  parentNode?: string;
}

class PositionDto {
  @IsNumber()
  x: number;

  @IsNumber()
  y: number;
}
