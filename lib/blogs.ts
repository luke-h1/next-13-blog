import { join } from "path";
import fs from "fs";

const getDir = (path: string): string => join(process.cwd(), path);

const BLOG_DIR = getDir("content/blogs");

const getFileNames = (dir: string): string[] => {
  return fs.readdirSync(dir);
};

export const getBlogFileNames = (): string[] => {
  return getFileNames(BLOG_DIR);
};

const getItemInPath = (path: string): string => {
  const fileContent = fs.readFileSync(path, "utf8");
  return fileContent;
};

export const getBlogs = (): string[] => {
  const blogs = getBlogFileNames();

  const items = blogs.map((name) => getItemInPath(join(BLOG_DIR, name)));

  return items;
};
