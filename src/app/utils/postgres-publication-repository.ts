import Publication from "./publication";
import { Sql } from "postgres";
import postgres from "postgres";
import PublicRepository from "./public-repository";


export default class PostgresPublicationRepository implements PublicRepository {
    private readonly sql: Sql;

    constructor() {
        const connectionString = "postgresql://postgres.ketbpanwpukdbcoyvqih:admin123_:@aws-1-us-east-2.pooler.supabase.com:6543/postgres";
        this.sql = postgres(connectionString);
    }

    async save(title: string, description: string, author: string): Promise<void> {
        try {
            await this.sql`INSERT INTO publications (title, description, author) VALUES (${title}, 
             ${description}, 
             ${author});`;

        } catch (error) {
            console.error("Database save error:", error);
            throw new Error(`Failed to save publication: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    async getPublications(): Promise<Publication[]> {
        try {
            const result = await this.sql`SELECT * FROM publications;`;
            return result.map(row => new Publication(row.title, row.description, row.author));
        } catch (error) {
            console.error("Database fetch error:", error);
            throw new Error(`Failed to fetch publications: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
}