import { StudentType } from './studentsGroup';

export type PairDaysType = {
  id: number;
  dayName: string;
  dayType: string;
  dayNumber: boolean;
};

export type PairDaysInitialStateType = {
  selectedGroup: null | string;
  pairDays: PairDaysType[];
  groupPairs: PairsData[];
};

export type PairDaysChaneType = {
  dayType: string;
  dayId: number;
};

export type PairsData = {
  week: string;
  days: {
    groupActivityDays: {
      subgroup: {
        id: number;
        gadId: number;
        subgrups: {
          id: string;
          students: StudentType[];
        }[];
      };
      id: number;
      groupId: number;
      dayId: number;
      type: string;
    };
    day: string;
    id: number;
  }[];
}[];

export type PairsDayPropsType = {
  dayGroups: {
    groupActivityDays: {
      subgroup: {
        id: number;
        gadId: number;
        subgrups: {
          id: string;
          students: StudentType[];
        }[];
      };
      id: number;
      groupId: number;
      dayId: number;
      type: string;
    };
    day: string;
    id: number;
  };
};

export type Subgroups = {
  gadId: number;
  subgrups: {
    id: string;
    students: StudentType[];
  }[];
};

export type SubgroupRefreshType = {
  id: number;
  type: string;
  groupId: number;
  weekDay: string;
};

export type YourPairsType = {
  week: string;
  days: {
    subgroup: {
      id: number;
      students: {
        name: string;
        id: number;
        repeat: boolean;
        groupId: number;
      }[];
    }[];
    day: string;
    id: number;
    groupId: number;
    dayId: number;
    type: string;
  }[];
};
