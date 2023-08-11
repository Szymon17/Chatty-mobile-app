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

export type userSnapshot = {
  firstName: string;
  lastName: string;
  id: string;
};

export type messageSnapshot = {
  body: string;
  user: userSnapshot;
};

export type roomSnapshot = {
  id: string;
  messages: messageSnapshot[];
  user: userSnapshot;
};

export type queryRoomType = { room: roomSnapshot };
