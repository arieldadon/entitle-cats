interface MouseInterface {
  id?: number;
  name: string;
}
export interface CatInterface {
  id?: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
  description: string;
  mice: MouseInterface[];
}

export class Cat implements CatInterface {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  imageUrl: string;
  description: string;
  mice: MouseInterface[];

  constructor(cat: CatInterface) {
    this.id = cat.id as number;
    this.firstName = cat.firstName;
    this.lastName = cat.lastName;
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.imageUrl = cat.imageUrl;
    this.description = cat.description;
    this.mice = cat.mice;
  }
}
