export interface Participant {
    id?: number;
    name: string;
    age: number;
    gender: string;
    club: string;
}

export interface Result {
    id: number;
    resultType: string;
    resultValue: string;
    participantId: number;
    disciplineId: number;
    validResult: boolean;
    formattedResult: string;
}
