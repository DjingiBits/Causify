export interface IComment {
    content: string;
    author: string;
    causeId: string;
}

export class Comment implements IComment {
    content: string;
    author: string;
    causeId: string;

    constructor(content: string, author: string, causeId: string) {
        this.content = content;
        this.author = author;
        this.causeId = causeId;
    }
}