export interface UserDayInfoHabits {
  exercise?: boolean;
  hydration?: boolean;
  sleep?: boolean;
  nutrition?: boolean;
}

export interface UserDayInfo {
  id?: string;
  date: string;
  energyLevel: number;
  emotionalState: number;
  notes: string
  habits: UserDayInfoHabits
}
