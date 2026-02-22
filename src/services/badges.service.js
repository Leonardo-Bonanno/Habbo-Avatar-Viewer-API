import * as badgesHistory from "../repositories/badgesHistory.repository.js";

export async function processBadges(uniqueId, currentBadges = [], nickname) {
  const ONE_DAY = 24 * 60 * 60 * 1000;

  let user = await badgesHistory.upsertUser(uniqueId, nickname);

  const savedBadges = await badgesHistory.findBadgesByUser(uniqueId);

  const savedMap = new Map(savedBadges.map((b) => [b.code, b]));

  const newBadges = [];

  const syncedBadges = currentBadges.map((badge) => {
    if (savedMap.has(badge.code)) {
      return savedMap.get(badge.code);
    }

    const newBadge = {
      code: badge.code,
      name: badge.name,
      description: badge.description,
      detectedAt: new Date(),
      userId: uniqueId,
    };

    newBadges.push(newBadge);

    return newBadge;
  });

  if (newBadges.length > 0) {
    await badgesHistory.createManyBadges(newBadges);
  }

  await badgesHistory.updateLastCheck(uniqueId, new Date());

  syncedBadges.forEach((badge) => {
    const detectedTime = new Date(badge.detectedAt).getTime();
    badge.isNew = Date.now() - detectedTime < ONE_DAY;
  });

  syncedBadges.sort((a, b) => {
    return new Date(b.detectedAt) - new Date(a.detectedAt);
  });

  const { achievements, normal } = splitBadges(syncedBadges);

  return {
    badges: {
      badges: syncedBadges,
      normal,
      achievements,
    },
    counts: {
      total: syncedBadges.length,
      badges: normal.length,
      achievements: achievements.length,
    },
  };
}

export function splitBadges(badges = []) {
  const achievements = [];
  const normal = [];
  for (const badge of badges) {
    if (badge.code?.startsWith("ACH_")) {
      achievements.push(badge);
    } else {
      normal.push(badge);
    }
  }
  return { achievements, normal };
}