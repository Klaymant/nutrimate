import { ActivityLevel } from "../types/generic";

const ACTIVITY_LEVEL_MAPPER: ActivityLevel[] = ['none', 'low', 'mid', 'high', 'very high'];

export class UserDataManager {
    static getActivityLevelNumber(activityLevel: ActivityLevel): number {
        return ACTIVITY_LEVEL_MAPPER.findIndex((level) => level === activityLevel);
    }

    static getActivityLevelLabel(activityLevel: number | string): ActivityLevel {
        return ACTIVITY_LEVEL_MAPPER[Number(activityLevel)];
    }
}