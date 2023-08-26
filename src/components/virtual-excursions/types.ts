interface IExcursion {
  id: number;
  title: string;
  description: string;
  route: string;
  date: string;
  img: string;
}

export interface IVirtualExcursions {
  excursions: IExcursion[];
}
