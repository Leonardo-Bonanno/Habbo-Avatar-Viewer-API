import habboRepository from "../repositories/habbo.repository.js";
import { processBadges } from "./badges.service.js";

export async function getFullProfile(name) {
  const profile = await habboRepository.getProfile(name);
  const rawBadges = await habboRepository.getBadges(profile.uniqueId);

  const badges = processBadges(rawBadges);

  return {
    profile,
    badges
  };
}
