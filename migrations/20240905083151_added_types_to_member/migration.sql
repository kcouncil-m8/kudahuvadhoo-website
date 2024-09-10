-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "isCouncilMember" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isPresident" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isSeniorManagementMember" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isWomentDevelopmentCommittee" BOOLEAN NOT NULL DEFAULT false;
