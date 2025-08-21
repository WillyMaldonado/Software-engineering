export default class PublicTitle {
    public content: string;

    constructor(content: string) {
        this.isValid(content);
        this.content = content;
    }

    private isValid(title: string): void {
        if (title.length < 2) {
            throw new Error("Title must be at least 2 characters")
        }
    }
}