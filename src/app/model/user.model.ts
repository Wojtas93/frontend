export class User {
  id?: number;
  username: string;
  password: string;
  role?: string;
  firstname?: string;
  lastname?: string;
  email?: string;


  constructor(username: string, password: string, role: string, firstname: string, lastname: string, email: string) {
    this.username = username;
    this.password = password;
    this.role = role;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }
}
