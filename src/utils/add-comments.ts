import { UserResult } from "../models/result.interface";
import { getComments } from "../requests/getComments.request";

export async function addComments(
  formattedData: UserResult[],
  userName: string,
): Promise<UserResult[]> {
  const user = formattedData.find((data) => data.name === userName);
  if (!user) {
    console.log("user not found");
    return;
  }
  for (let i = 0; i < user.posts.length; i++) {
    try {
      user.posts[i].coments = await getComments(user.posts[i].id);
    } catch (error) {
      console.error(error);
    }
  }
}
