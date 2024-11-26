import axiosInstance from "@/lib/axios";
import queryString from "query-string";

export interface UserPayload {
  name: string;
  email: string;
  roleId: number;
  status: number;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  roleId: number;
  status: number;
}

export interface UserQuery {
  page: number;
  limit: number;
  search: string;
}

export class User {
  static getAll = async (query: UserQuery | null) => {
    if (query) {
      const params = queryString.stringify(query);
      const response = await axiosInstance.get<IUser[]>(`/users?${params}`);
      return response.data;
    } else {
      const response = await axiosInstance.get<IUser[]>("/users");
      return response.data;
    }
  };
  static create = async (payload: UserPayload) => {
    const response = await axiosInstance.post<IUser>("/users", payload);
    return response.data;
  };
  static getById = async (id: string) => {
    const response = await axiosInstance.get<IUser>(`/users/${id}`);
    return response.data;
  };
  static deleteById = async (id: string) => {
    const response = await axiosInstance.delete<IUser>(`/users/${id}`);
    return response.data;
  };
  static updateById = async (id: string, payload: UserPayload) => {
    const response = await axiosInstance.patch<IUser>(`/users/${id}`, payload);
    return response.data;
  };
}
