import prisma from "../config/prisma.js";

export async function upsertUser(userId, nickname) {
  return prisma.user.upsert({
    where: { id: userId },
    update: { nickname: nickname },
    create: {
      id: userId,
      nickname: nickname,
    },
  });
}

export async function updateLastCheck(userId, date) {
  return prisma.user.update({
    where: { id: userId },
    data: { lastCheck: date },
  });
}

export async function findBadgesByUser(userId) {
  return prisma.badge.findMany({
    where: { userId },
  });
}

export async function createManyBadges(badges) {
  return prisma.badge.createMany({
    data: badges,
    skipDuplicates: true,
  });
}
