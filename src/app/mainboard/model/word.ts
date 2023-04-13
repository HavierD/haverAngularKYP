
export class Word {
    word: string;
    repetition: number;
    lastMeetTime: string;

    constructor(word: string, repetition: number, lastMeetTime: string) {
        this.word = word;
        this.repetition = repetition;
        this.lastMeetTime = lastMeetTime;
    }

}
