import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class UserTypeValidator {
  @IsString()
  id: string;

  @IsString()
  email: string;

  @IsString()
  name: string;

  @IsString()
  avatar: string;
}

export class createNewComment {
  @IsNotEmpty()
  @IsString()
  projectId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => UserTypeValidator)
  user: UserTypeValidator;

  @IsNotEmpty()
  @IsString()
  timestamp: string;
}
