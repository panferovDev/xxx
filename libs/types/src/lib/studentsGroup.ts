export type groupAndStydentsFormType = {
    gId: string;
    students: string
}

export type GroupType = {
    id: number;
    name: string;
    students: StudentType[]
};

export type StudentType = {
    id: number;
    name: string;
    groupId: number;
}
export type GroupWithStudentsType = {
    id: number;
    name: string;
    students: StudentType[];
}