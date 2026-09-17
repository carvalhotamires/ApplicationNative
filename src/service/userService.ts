import { api } from "./api";
import { User } from "../types/User";

export async function getUsers() {
    const response = await api.get<User[]>("/users");
    return response.data;
}
