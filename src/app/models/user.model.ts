export interface User {
  id?: number;
  userName: string;
  email?: string;
  password: string;
  verifyPassword: string;
  userExists: boolean;
}

export interface UsersCollection {
  users: Array<User>;
}
