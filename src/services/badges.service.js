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

export function processBadges(badges = [], previous = []) {
  const { achievements, normal } = splitBadges(badges);

  const oldCodes = new Set(previous.map(b => b.code));

  const newBadges = normal.filter(b => !oldCodes.has(b.code));

  return {
    badges: {
    badges,
    normal,
    achievements,
    },
    counts: {
      total: badges.length,
      badges: normal.length,
      achievements: achievements.length,
    },
    newBadges
  };
}
