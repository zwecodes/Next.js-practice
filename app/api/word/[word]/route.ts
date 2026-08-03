import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    context: { params: Promise<{ word: string }> }
) {
    const { word } = await context.params;

    const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (!res.ok) {
        return NextResponse.json(
            { error: 'Word not found' },
            { status: 404 }
        );
    }

    const data = await res.json();
    return NextResponse.json(data);
}