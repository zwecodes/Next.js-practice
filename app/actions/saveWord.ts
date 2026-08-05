"use server";

export async function saveWord(formData: FormData): Promise<void> {
    const word = formData.get('word') as string;

    if (!word) return;

    console.log(`Saving word: ${word}`);
}