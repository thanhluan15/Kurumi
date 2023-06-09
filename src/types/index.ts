import { ReactElement } from "react";

export interface AuthUser {
  id: number;
  email: string;
  name?: string;
  Role: string;
  accessToken: string;
}

export interface Profile {
  id: number;
  bio: string;
  userId: number;
  avatar: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title?: string;
  content?: string | null;
  coverPage?: string;
  description?: string | null;
  published: boolean;
  liked: number;
  createdAt?: Date;
  updatedAt?: Date;
  authorId: number;
}

export interface UserInfo {
  id: number;
  name?: string;
  password?: string;
  Role: ROLE;
  email: string;
  profile: Profile | null;
  posts: [Post];
}

export type Comment = {
  id: number;
  content: string;
  authorId: number;
  postId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Author = {
  id: number;
  name?: string;
  email: string;
  Role: ROLE;
};

enum ROLE {
  USER = "USER",
  ADMIN = "ADMIN",
}

export type CategoriesOnPosts = {
  postId: number;
  categoryId: number;
};

export type LikedPost = {
  postId: number;
  userId: number;
};

export type Follow = {
  userId: number;
  profileId: number;
};
