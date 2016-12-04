import { DurationEnum } from '../enums/DurationEnum';

export interface ICause {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  duration: DurationEnum;
  author: string;
  startDate: string; // Date?
  category: string; // TODO Enumeration --> Animals, Education, Children, Culture, Homeless ...
}

export class Cause implements ICause {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  duration: DurationEnum;
  author: string;
  startDate: string;
  category: string;

  constructor(
    title: string,
    imageUrl: string,
    description: string,
    duration: DurationEnum,
    author: string,
    startDate: string,
    category: string
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
