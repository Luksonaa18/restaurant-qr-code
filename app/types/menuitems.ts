export type MenuItem = {
  id: string;
  nameKey: string;
  descriptionKey?: string;
  image: string;
  price?: number;
};
export type Category = {
  id: string;
  nameKey: string;
  image:string
  items: MenuItem[];
};
