const BASE = "https://www.habbo.com.br/api/public";

export async function fetchProfile(name) {
  const res = await fetch(`${BASE}/users?name=${name}`);
  return res.json();
}

export async function fetchBadges(uniqueId) {
  const res = await fetch(`${BASE}/users/${uniqueId}/badges`);
  return res.json();
}

export async function fetchFriends(uniqueId) {
  const res = await fetch(`${BASE}/users/${uniqueId}/friends`);
  return res.json();
}

export async function fetchRooms(uniqueId) {
  const res = await fetch(`${BASE}/users/${uniqueId}/rooms`);
  return res.json();
}

export async function fetchGroups(uniqueId) {
  const res = await fetch(`${BASE}/users/${uniqueId}/groups`);
  return res.json();
}

export async function fetchAch(uniqueId) {
  const res = await fetch(`${BASE}/achievements/${uniqueId}`);
  return res.json();
}