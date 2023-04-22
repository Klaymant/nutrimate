import { USER_DATA_STORAGE } from "../globals/storage-globals";
import { UserData } from "../types/UserData";

export class UserDataStorageManager {
  static save(userData: UserData): void {
    localStorage.setItem(USER_DATA_STORAGE, JSON.stringify(userData));
  }

  static retrieve(): UserData {
    const userData = localStorage.getItem(USER_DATA_STORAGE);

    return userData ? JSON.parse(userData) : null;
  }

  static update(userData: Partial<UserData>): void {
    const currentUserData = this.retrieve();

    this.save({ ...currentUserData, ...userData });
  }
}