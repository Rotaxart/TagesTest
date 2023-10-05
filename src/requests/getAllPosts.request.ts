import axios from "axios";
import { Post } from "../models/post.interface";
import { baseUrl } from "../constants/base-url.constant";

export async function getAllPosts(): Promise<Post[] | undefined> {
  try {
    const { data } = await axios.get(`${baseUrl}posts`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
