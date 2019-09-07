export interface User {
  username: string;
}
export interface Channel {
  topic: string;
  id: string;
  users: User[];
}