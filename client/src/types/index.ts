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

export interface UserType {
  id?: string;
  name?: string;
  username?: string;
  email?: string;
  avatar?: string;
}

export interface CommentType {
  user?: UserType;
  projectId?: string | number;
  title?: string;
  timestamp?: string;
}
