export class Project {
  id?: number;
  name?: string;
  description?: string;
  culture?: string;
  pages?: number;
  duration?: {
    start: Date,
    end: Date
  };
  author?: {
    name?: string,
    lastName?: string
  };
  illustrator?: {
    name?: string,
    lastName: string
  };
  image?: string;
}