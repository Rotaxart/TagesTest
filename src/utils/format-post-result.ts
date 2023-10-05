import { Post } from "../models/post.interface";
import { PostResult } from "../models/result.interface";

export function formatPostResult(posts: Post[]): PostResult[] {
  return posts.map((post) => {
    const { id, title, body } = post;
    const title_crop = `${title.slice(0, 20)}...`;
    return {
      id,
      title,
      title_crop,
      body,
    };
  });
}
