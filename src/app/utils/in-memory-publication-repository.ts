import PublicRepository from "./public-repository";
import Publication from "./publication";


export default class InMemoryPublicationRepository implements PublicRepository {
    public publications: Array<{
        title: string;
        description: string;
        author: string;
    }> = [];
    constructor() {
        this.publications = [];
    }

    public async save(title: string, description: string, author: string) {
        this.publications.push({ title, description, author });
    }
}