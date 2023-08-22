import { USER_DATA_STORAGE } from "../globals/storage-globals";
import { UserData } from "../types/UserData";
import { UserDataManager } from "./UserDataManager";

export class UserDataStorageManager {
  static save(userData: Partial<UserData>): void {
    localStorage.setItem(USER_DATA_STORAGE, JSON.stringify(userData));
  }

  static retrieve(): UserData {
    const userData = localStorage.getItem(USER_DATA_STORAGE);
    const parsedUserData = userData ? JSON.parse(userData) : null;

    if (parsedUserData)
      parsedUserData.activityLevel = UserDataManager.getActivityLevelNumber(parsedUserData.activityLevel);

    return parsedUserData;
  }

  static update(userData: Partial<UserData>): void {
    this.save(userData);
  }
}