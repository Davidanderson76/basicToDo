import { ToDo } from './todos.model';

export interface User {
  id?: number;
  userName: string;
  email?: string;
  password: string;
  verifyPassword: string;
  userExists: boolean;
  toDos: Array<ToDo>;
}

export interface UsersCollection {
  users: Array<User>;
}
