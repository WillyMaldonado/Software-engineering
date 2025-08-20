import postgres from "postgres";
import Publication from "./publication";

export default class PublicRegister {
    constructor() { }

    public async save(publications: Publication) {
        try {
            const connectionString = "postgresql://postgres.ketbpanwpukdbcoyvqih:admin123_:@aws-1-us-east-2.pooler.supabase.com:6543/postgres";
            const sql = postgres(connectionString);

            await sql`INSERT INTO publications (title, description, author) VALUES (${publications.title}, 
            ${publications.description}, 
            ${publications.author});`;

        } catch (error) {
            console.error("Database error:", error);
            throw new Error(`Error saving in the db: ${error instanceof Error ? error.message : String(error)}`);
        }


    }
}