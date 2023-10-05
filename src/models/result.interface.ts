import { Comment } from "./comment.interface";

export interface UserResult {
  id: number;
  name: string;
  email: string;
  address: string;
  website: string;
  company: string;
  posts: PostResult[];
}

export interface PostResult {
  id: number;
  title: string;
  title_crop: string;
  body: string;
  coments?: Comment[];
}
