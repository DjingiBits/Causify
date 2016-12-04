import { DurationEnum } from '../enums/DurationEnum';
import { CategoriesEnum } from '../enums/CategoriesEnum'

export interface ICause {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  duration: DurationEnum;
  author: string;
  startDate: string; // bootstrap datetimepicker Date?
  category: CategoriesEnum; 
}

export class Cause implements ICause {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  duration: DurationEnum;
  author: string;
  startDate: string;
  category: CategoriesEnum;

  constructor(
    title: string,
    imageUrl: string,
    description: string,
    duration: DurationEnum,
    author: string,
    startDate: string,
    category: CategoriesEnum
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.duration = duration;
    this.author = author;
    this.startDate = startDate;
    this.category = category;
  }
}
