import axios from "axios";
import { Comment } from "../models/comment.interface";
import { baseUrl } from "../constants/base-url.constant";

export async function getComments(
  postId: number,
): Promise<Comment[] | undefined> {
  try {
    const { data } = await axios.get(`${baseUrl}posts/${postId}/comments`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
