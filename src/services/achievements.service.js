export function countAchievementLevels(achievements = []) {
  return achievements.reduce(
    (sum, a) => sum + Number(a.level || 0),
    0
  );
}