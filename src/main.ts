import { getAllPosts } from "./requests/getAllPosts.request";
import { getAllUsers } from "./requests/getAllUsers.request";
import { addComments } from "./utils/add-comments";
import { formatUserResponse } from "./utils/format-user-response";

async function main() {
  const users = await getAllUsers();
  const posts = await getAllPosts();
  if (!users || !posts) {
    console.log("fetch failed");
    return;
  }

  const result = formatUserResponse(users, posts);
  await addComments(result, "Ervin Howell");

  console.log(result);
}

main();
