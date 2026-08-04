"use server";

export async function saveWord(formData: FormData) {
    const word = formData.get('word') as string;

    if (!word) return { error: 'No word provided'};

    console.log(`Saving word: ${word}`);

    return { success: true, word };
}