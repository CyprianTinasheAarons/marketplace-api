import { Category } from '../entities/category.entity';

export class CreateCategoryDto extends Category {
  name: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
