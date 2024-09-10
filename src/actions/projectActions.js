"use server";

import prisma from "@/lib/prisma";

export const getProjects = async () => {
  const projects = await prisma.project.findMany();
  return { projects };
};

export const createProject = async (input) => {
  const createProject = await prisma.project.create({
    data: {
      name: input.name,
      name_dv: input.name_dv,
      company: input.company,
      price: input.price,
      percentage: input.percentage,
      duration: input.duration,
      description: input.description,
    },
  });

  return { data: createProject };
};

export const updateProject = async (input) => {
  const updateProject = await prisma.project.update({
    where: {
      id: input.id,
    },
    data: {
      name: input.name,
      name_dv: input.name_dv,
      company: input.company,
      price: input.price,
      percentage: input.percentage,
      duration: input.duration,
      description: input.description,
    },
  });

  return { data: updateProject };
};

export const deleteProject = async (id) => {
  const deleteProject = await prisma.project.delete({
    where: {
      id: id,
    },
  });

  return { data: deleteProject };
};
