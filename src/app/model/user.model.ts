export class User {
  id?: number;
  username?: string;
  password?: string;
  role?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  creditCard?: number;


  constructor(username: string, password: string, role: string, firstName: string, lastName: string, email: string) {
    this.username = username;
    this.password = password;
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
