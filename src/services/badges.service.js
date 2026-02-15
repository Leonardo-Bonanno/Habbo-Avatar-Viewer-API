import * as badgesHistory from "../repositories/badgesHistory.repository.js";

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

export function processBadges(uniqueId, currentBadges = []) {
  const ONE_DAY = 24 * 60 * 60 * 1000;

  const savedBadges = badgesHistory.getUserBadges(uniqueId) || [];

  const savedMap = new Map(
    savedBadges.map(b => [b.code, b])
  );

  const syncedBadges = currentBadges.map(badge => {
    if (savedMap.has(badge.code)) {
      return savedMap.get(badge.code);
    }

    return {
      ...badge,
      detectedAt: new Date().toISOString()
    };
  });

  syncedBadges.forEach(badge => {
    const detectedTime = new Date(badge.detectedAt).getTime();
    badge.isNew = Date.now() - detectedTime < ONE_DAY;
  });

  syncedBadges.sort((a, b) => {
    return new Date(b.detectedAt) - new Date(a.detectedAt);
  });

  const { achievements, normal } = splitBadges(syncedBadges);

  badgesHistory.saveUserBadges(uniqueId, syncedBadges);

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
    }
  };
}