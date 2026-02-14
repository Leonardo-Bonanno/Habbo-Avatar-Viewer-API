export async function identifyRooms(rooms = []) {
  
}

export function attachGroupBadgeToRooms(rooms = [], groups = []) {

  const groupMap = new Map(
    groups.map(group => [group.id, group])
  );

  return rooms.map(room => {

    if (!room.habboGroupId) {
      return room;
    }

    const group = groupMap.get(room.habboGroupId);

    return {
      ...room,
      groupBadge: group?.badgeCode || null
    };
  });
}
