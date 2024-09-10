"use server";

import prisma from "@/lib/prisma";

export const getMembers = async () => {
  const members = await prisma.member.findMany({
    orderBy: {
      level: "desc",
    },
  });
  return { members };
};

export const createMember = async (input) => {
  const createMember = await prisma.member.create({
    data: {
      name: input.name,
      name_dv: input.name_dv,
      level: input.level,
      title: input.title,
      title_dv: input.title_dv,
      about: input.about,
      image: input.image,
      isCouncilMember: input.isCouncilMember,
      isPresident: input.isPresident,
      isSeniorManagementMember: input.isSeniorManagementMember,
      isWomentDevelopmentCommittee: input.isWomentDevelopmentCommittee,
    },
  });

  return { data: createMember };
};

export const updateMember = async (input) => {
  const updateMember = await prisma.member.update({
    where: {
      id: input.id,
    },
    data: {
      name: input.name,
      name_dv: input.name_dv,
      level: input.level,
      title: input.title,
      title_dv: input.title_dv,
      about: input.about,
      image: input.image,
      isCouncilMember: input.isCouncilMember,
      isPresident: input.isPresident,
      isSeniorManagementMember: input.isSeniorManagementMember,
      isWomentDevelopmentCommittee: input.isWomentDevelopmentCommittee,
    },
  });

  return { data: updateMember };
};

export const deleteMember = async (id) => {
  const deleteMember = await prisma.member.delete({
    where: {
      id: id,
    },
  });

  return { data: deleteMember };
};
