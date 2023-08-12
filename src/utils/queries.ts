import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        email
        firstName
        id
        lastName
        role
      }
    }
  }
`;

export const GET_ROOMS = gql`
  {
    usersRooms {
      rooms {
        name
        id
      }
    }
  }
`;

export const GET_ROOM = gql`
  query GetRoom($ID: ID!) {
    room(id: $ID) {
      id
      user {
        id
        firstName
        lastName
      }
      messages {
        body
        user {
          id
        }
      }
    }
  }
`;

export const AddMessage = gql`
  mutation SendMessage($Body: String!, $RoomID: String!) {
    sendMessage(body: $Body, roomId: $RoomID) {
      id
    }
  }
`;

export const REGISTER_USER = gql`
  mutation Register($Email: String!, $FirstName: String!, $LastName: String!, $Password: String!, $PasswordConfirmation: String!) {
    registerUser(email: $Email, firstName: $FirstName, lastName: $LastName, password: $Password, passwordConfirmation: $PasswordConfirmation) {
      id
    }
  }
`;

export const OnMessageAdded = gql`
  subscription onMessageAdded($RoomID: String!) {
    messageAdded(roomId: $RoomID) {
      body
      user {
        id
      }
    }
  }
`;

export const OnUserTyping = gql`
  subscription onUserTyping($RoomID: String!) {
    typingUser(roomId: $RoomID) {
      id
    }
  }
`;
