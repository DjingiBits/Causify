export interface ICause {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  duration: string; // TODO Enumeration --> up to a day, several days, long term, up to a hour, up to 5 minutes
  author: string;
  startDate: string; // Date?
  category: string; // TODO Enumeration --> Animals, Education, Children, Culture, Homeless ...
}

export class Cause implements ICause {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  duration: string; 
  author: string;
  startDate: string; 
  category: string; 

  constructor(title: string, imageUrl: string, description: string, duration: string, author: string, startDate: string, category: string) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.duration = duration;
    this.author = author;
    this.startDate = startDate;
    this.category = category;
  }
}
