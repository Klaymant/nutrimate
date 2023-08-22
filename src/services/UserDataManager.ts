import { ActivityLevel } from "../types/generic";

export const ACTIVITY_LEVEL_MAPPER: { label: ActivityLevel; message: string }[] = [
    { label: 'none', message: 'No activity' },
    { label: 'low', message: 'Low activity (1-2 days/week)' },
    { label: 'mid', message: 'Moderate activity (2-3 days/week)' },
    { label: 'high', message: 'High activity (3-4 days/week)', },
    { label: 'very high', message: 'Very high activity (4+ days a weeks)' },
];

export class UserDataManager {
    static getActivityLevelNumber(activityLevel: ActivityLevel): number {
        return ACTIVITY_LEVEL_MAPPER.findIndex((level) => level.label === activityLevel);
    }

    static getActivityLevelLabel(activityLevel: number | string): ActivityLevel {
        return ACTIVITY_LEVEL_MAPPER[Number(activityLevel)].label;
    }
}