export interface Participant {
    id?: number;
    name: string;
    age: number;
    gender: string;
    club: string;
    disciplines: Discipline[];
}

export interface Discipline {
    id: number;
    name: string;
    resultType: string;
}

export interface Result {
    id: number;
    resultType: string;
    resultValue: string;
    participantName: string;
    disciplineName: string;
}
