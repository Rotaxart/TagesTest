import { Post } from "../models/post.interface";
import { PostResult, UserResult } from "../models/result.interface";
import { User } from "../models/user.interface";
import { formatPostResult } from "./format-post-result";

export function formatUserResponse(users: User[], posts: Post[]): UserResult[] {
  return users.map((user) => {
    const { id, name, email, address, website, company } = user;
    const usersPosts = posts.filter((post) => post.userId === id);
    return {
      id,
      name,
      email,
      address: `${address.city}, ${address.street}, ${address.suite}`,
      website: `https://${website}`,
      company: company.name,
      posts: formatPostResult(usersPosts),
    };
  });
}
