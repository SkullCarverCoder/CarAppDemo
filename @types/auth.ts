export interface User {
  id: number;
  logged: boolean;
  isAdmin: boolean;
  firstName: string;
  lastName: string;
  cellphoneNumber: string;
  country: string;
}
export class AuthContextClass {
  readonly user: User;

  private readonly _loginProvided: (username: string, password: string) => void;
  private readonly _logoutProvided: () => void;

  private login(username: string, password: string) {
    this._loginProvided(username, password);
  }
  private logout() {
    this._logoutProvided();
  }
  constructor(
    Inputuser: User,
    loginFunction: (username: string, password: string) => Promise<any>,
    logoutFunction: () => Promise<any>
  ) {
    this.user = Inputuser;
    this._loginProvided = loginFunction;
    this._logoutProvided = logoutFunction;
  }
}
