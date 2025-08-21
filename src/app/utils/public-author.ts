export default class PublicAuthor {
    public name: string;

    constructor(name: string) {
        this.isValid(name);
        this.name = name;
    }

    private isValid(author: string): void {
        if (author.length < 3) {
            throw new Error("Author name must be at least 3 characters");
        }
    }
}