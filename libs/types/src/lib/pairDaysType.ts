export type PairDaysType = {
    id: number;
    dayName: string;
    dayType: string;
    dayNumber: boolean;
};

export type PairDaysInitialStateType = {
    pairDays: PairDaysType[];
}

export type PairDaysChaneType = {
    dayType: string;
    dayId: number;
}