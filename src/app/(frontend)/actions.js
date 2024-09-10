"use server";

import prisma from "@/lib/prisma";

export const getHome = async () => {
  const projects = await prisma.project.findMany({ take: 4 });
  const households = await prisma.setting.findFirst({
    where: {
      name: "Households",
    },
  });
  const population = await prisma.setting.findFirst({
    where: {
      name: "Population",
    },
  });
  const size = await prisma.setting.findFirst({
    where: {
      name: "Size",
    },
  });
  const blogs = await prisma.blog.findMany({
    take: 6,
  });
  const documents = await prisma.document.findMany({
    where: {
      type: {
        slug: "iulaan",
      },
    },
  });
  return {
    projects,
    households: households,
    population: population,
    size: size,
    blogs: blogs,
    documents: documents,
  };
};

export const getStats = async () => {
  const households = await prisma.setting.findFirst({
    where: {
      name: "Households",
    },
  });
  const population = await prisma.setting.findFirst({
    where: {
      name: "Population",
    },
  });
  const size = await prisma.setting.findFirst({
    where: {
      name: "Size",
    },
  });

  return {
    households: households,
    population: population,
    size: size,
  };
};

export const getBlogs = async () => {
  const blogs = await prisma.blog.findMany({
    where: {
      isPublished: true,
    },
    take: 40,
  });
  return { blogs };
};

export const getBlogById = async (id) => {
  const blog = await prisma.blog.findUnique({
    where: {
      id,
    },
  });
  return blog;
};

export const getServices = async () => {
  const services = await prisma.service.findMany({
    where: {
      isPublished: true,
    },
  });
  return { services };
};

export const getDocumentBySlug = async (slug) => {
  const documents = await prisma.document.findMany({
    where: {
      type: {
        slug: slug,
      },
    },
  });
  const type = await prisma.type.findFirst({
    where: {
      slug: slug,
    },
  });
  const types = await prisma.type.findMany();
  return { documents, type, types };
};

export const getDocumentById = async (id) => {
  const document = await prisma.document.findUnique({
    where: {
      id,
    },
  });
  return { document };
};

export const getProjects = async () => {
  const projects = await prisma.project.findMany();
  return { projects };
};

export const getProject = async (id) => {
  const project = await prisma.project.findUnique({
    where: {
      id,
    },
  });
  return { project };
};

export const getSeniorManagementMembers = async () => {
  const members = await prisma.member.findMany({
    where: {
      isSeniorManagementMember: true,
    },
    orderBy: {
      level: "asc", // or 'desc' depending on the desired order
    },
  });
  return { members };
};

export const getCouncilMembers = async () => {
  const members = await prisma.member.findMany({
    where: {
      isCouncilMember: true,
    },
    orderBy: {
      level: "asc", // or 'desc' depending on the desired order
    },
  });
  return { members };
};

export const getWomenDevelopmentCommitteeMembers = async () => {
  const members = await prisma.member.findMany({
    where: {
      isWomentDevelopmentCommittee: true,
    },
    orderBy: {
      level: "asc", // or 'desc' depending on the desired order
    },
  });
  return { members };
};
