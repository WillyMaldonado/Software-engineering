import postgres from "postgres";
import Publication from "./publication";
import { title } from "process";

export default class PublicRegister {
    constructor() { }

    public async save(title: string, description: string, author: string) {
        try {
            const publications = Publication.create(title, description, author);

            const connectionString = "postgresql://postgres.ketbpanwpukdbcoyvqih:admin123_:@aws-1-us-east-2.pooler.supabase.com:6543/postgres";
            const sql = postgres(connectionString);

            await sql`INSERT INTO publications (title, description, author) VALUES (${publications.title.content}, 
            ${publications.description.content}, 
            ${publications.author.name});`;

        } catch (error) {
            console.error("Database error:", error);
            throw new Error(`Error saving in the db: ${error instanceof Error ? error.message : String(error)}`);
        }


    }
}