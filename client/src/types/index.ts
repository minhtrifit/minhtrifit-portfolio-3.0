export interface TechnicalType {
  name: string;
  logo: string;
  url: string;
}

export interface ProjectType {
  id?: number | string;
  name?: string;
  description?: string;
  github?: string;
  images?: string[];
  demo?: string;
  technicals?: TechnicalType[];
  features?: string[];
  released?: string;
  categories?: string[];
}
