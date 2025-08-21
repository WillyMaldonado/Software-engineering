import { NextRequest, NextResponse } from "next/server";
import PublicRegister from "../utils/public-register";
import PostgresPublicationRepository from "../utils/postgres-publication-repository";
import InMemoryPublicationRepository from "../utils/in-memory-publication-repository";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const repository = new PostgresPublicationRepository();
        const register = new PublicRegister(repository);
        await register.run(data.title, data.description, data.author);

        return NextResponse.json({
            message: 'The post has been saved successfully'
        });
    } catch (error) {
        console.error('Error saving the post:', error);
        return NextResponse.json({
            error: 'Failed to save the post',
        }, { status: 500 });
    }
}
