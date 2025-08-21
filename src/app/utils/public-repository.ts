import Publication from "./publication";

export default interface PublicRepository {
    save(title: string, description: string, author: string): Promise<void>;
}