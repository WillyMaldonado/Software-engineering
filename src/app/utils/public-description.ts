export default class PublicDescription {
    public content: string;
    constructor(content: string) {
        this.isValid(content);
        this.content = content;
    }

    private isValid(description: string): void {
        if (description.length < 5) {
            throw new Error("Title must be at least 5 characters");
        }
    }
}