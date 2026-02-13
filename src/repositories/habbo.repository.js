import * as habboApi from "../integrations/habbo.api.js";

async function getProfile(name) {
  return habboApi.fetchProfile(name);
}

async function getBadges(uniqueId) {
  return habboApi.fetchBadges(uniqueId);
}

async function getFriends(uniqueId) {
  return habboApi.fetchFriends(uniqueId);
}

async function getRooms(uniqueId) {
  return habboApi.fetchRooms(uniqueId);
}

async function getGroups(uniqueId) {
  return habboApi.fetchGroups(uniqueId);
}

async function getAch(uniqueId) {
  return habboApi.fetchAch(uniqueId);
}

export default {
  getProfile,
  getBadges,
  getFriends,
  getRooms,
  getGroups,
  getAch
};
