"use server";

import prisma from "@/lib/prisma";

export const getBlogs = async () => {
  const blogs = await prisma.blog.findMany({
    include: {
      category: true,
    },
  });
  const categories = await prisma.category.findMany();
  return { blogs, categories };
};

export const createBlog = async (input) => {
  const createBlog = await prisma.blog.create({
    data: {
      title: input.title,
      title_dv: input.title_dv,
      body: input.body,
      latin: input.latin,
      image: input.image,
      categoryId: input.categoryId,
      isPublished: input.isPublished,
    },
  });

  return { data: createBlog };
};

export const updateBlog = async (input) => {
  const updateBlog = await prisma.blog.update({
    where: {
      id: input.id,
    },
    data: {
      title: input.title,
      title_dv: input.title_dv,
      body: input.body,
      latin: input.latin,
      image: input.image,
      categoryId: input.categoryId,
      isPublished: input.isPublished,
    },
  });

  return { data: updateBlog };
};

export const deleteBlog = async (id) => {
  const deleteBlog = await prisma.blog.delete({
    where: {
      id: id,
    },
  });

  return { data: deleteBlog };
};
