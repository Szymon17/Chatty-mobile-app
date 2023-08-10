export type userType = {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  role: string;
};

export type singleRoomType = {
  id: string;
  name: string;
};

export type roomsType = {
  rooms: singleRoomType[];
  user: userType;
};

export type queryRoomsType = {
  usersRooms: roomsType;
};
