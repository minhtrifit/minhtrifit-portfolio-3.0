import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProjectDto {}

export class TechnicalTypeValidator {
  @IsString()
  name: string;

  @IsString()
  logo: string;

  @IsString()
  url: string;
}

export class createNewProject {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  github: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  images: string[];

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TechnicalTypeValidator)
  technicals: TechnicalTypeValidator[];

  @IsNotEmpty()
  @IsString()
  demo: string;

  @IsNotEmpty()
  @IsString()
  released: string;

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  features: string[];

  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  categories: string[];
}
