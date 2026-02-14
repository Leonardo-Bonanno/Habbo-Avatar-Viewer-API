export function identifyFriends(friends = []) {
  const all = [];
  const online = [];

  for (const friend of friends) {
    if (friend.online) {
      online.push(friend);
    }
    all.push(friend);
  }

  return { online, all };
}