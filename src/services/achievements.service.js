export function countAchievementLevels(achievements = []) {
  return achievements.reduce((sum, a) => sum + Number(a.level || 0), 0);
}

export function processAchievements(achievements = []) {
  const groupedAchievements = {
    enabled: {},
    archived: [],
    disabled: [],
  };

  for (const item of achievements) {
    const state = item.achievement?.state?.toUpperCase();

    if (state === "ENABLED") {
      const category = item.achievement.category ?? "uncategorized";

      if (!groupedAchievements.enabled[category]) {
        groupedAchievements.enabled[category] = [];
      }

      groupedAchievements.enabled[category].push(item);
    } else if (state === "ARCHIVED") {
      groupedAchievements.archived.push(item);
    } else {
      groupedAchievements.disabled.push(item);
    };
  }

  const levels = countAchievementLevels(achievements);

  return {
    achievements: groupedAchievements,
    levels,
  };
}
