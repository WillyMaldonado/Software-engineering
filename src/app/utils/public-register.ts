import Publication from "./publication";
import PublicRepository from "./public-repository";

export default class PublicRegister {
    private readonly repository: PublicRepository;

    constructor(repository: PublicRepository) {
        this.repository = repository;
    }

    public async run(title: string, description: string, author: string): Promise<void> {
        const publication = Publication.create(title, description, author);
        await this.repository.save(publication.title.content, publication.description.content, publication.author.name);
    }
}