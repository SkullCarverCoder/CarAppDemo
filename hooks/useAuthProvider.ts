// @ts-check
import { createContext, useContext, useState } from "react";
import { User, AuthContextClass } from "../@types/auth";

const default_user: User = {
  id: 999,
  logged: false,
  isAdmin: false,
  firstName: "John L",
  lastName: "Smith",
  cellphoneNumber: "+11234445566",
  country: "US",
};

export function useProvideAuth(): AuthContextClass {
  const [user, setUser] = useState(default_user);

  const login = (
    username: string,
    password: string
  ): Promise<boolean | Object[]> => {
    return new Promise((resolve, reject) => {
      if (username !== "" && password !== "") {
        console.log("Logged in");
        resolve(true);
      } else {
        let errors = [
          {
            code: "empty attempt",
            message: "no username and/or password",
          },
        ];
        reject(errors);
      }
    });
  };
  const logout = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      console.log("logged out");
      resolve(true);
    });
  };
  return new AuthContextClass(user, login, logout);
}

export const AuthContext = createContext<AuthContextClass | null>(null);

export const useAuth = () => {
    return useContext(AuthContext);
};