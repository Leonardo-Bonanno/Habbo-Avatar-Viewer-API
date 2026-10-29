import habboRepository from "../repositories/habbo.repository.js";
import { processBadges } from "./badges.service.js";
import { processAchievements } from "./achievements.service.js";
import { identifyFriends } from "./friends.service.js";
import { identifyRooms, attachGroupBadgeToRooms } from "./rooms.service.js";
import { identifyGroups } from "./groups.service.js";

export async function getFullProfile(nickname) {
  const profile = await habboRepository.getProfile(nickname);
  const rawBadges = await habboRepository.getBadges(profile.uniqueId);
  const rawAch = await habboRepository.getAch(profile.uniqueId);
  const rawFriends = await habboRepository.getFriends(profile.uniqueId);
  const rawRooms = await habboRepository.getRooms(profile.uniqueId);
  const rawGroups = await habboRepository.getGroups(profile.uniqueId);

  const badges = await processBadges(profile.uniqueId, rawBadges, nickname);
  const ach = processAchievements(rawAch);
  const friends = identifyFriends(rawFriends);
  const enrichedRooms = attachGroupBadgeToRooms(rawRooms, rawGroups);

  return {
    profile,
    badges,
    achievements,
    friends,
    rooms: enrichedRooms,
    groups: rawGroups,
  };
}
