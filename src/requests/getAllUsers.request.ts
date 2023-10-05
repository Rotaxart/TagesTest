import axios from "axios";
import { User } from "../models/user.interface";
import { baseUrl } from "../constants/base-url.constant";

export async function getAllUsers(): Promise<User[] | undefined> {
  try {
    const { data } = await axios.get(`${baseUrl}users`);
    return data;
  } catch (error) {
    console.error(error);
  }
}
