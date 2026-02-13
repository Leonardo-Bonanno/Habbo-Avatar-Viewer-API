export function splitFriends(friends = []) {
  const normal = [];
  const online = [];

  for (const friend of friends) {
    if (friend.online) {
      online.push(friend);
    } else {
      normal.push(friend);
    }
  }

  return { achievements, normal };
}