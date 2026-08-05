"use server";
import { auth } from '@/auth';
import { prisma } from '../../lib/prisma';

export async function saveWord(formData: FormData): Promise<void> {
    const word = formData.get('word') as string;

    if (!word) return;

    const session = await auth();
    if (!session?.user?.email) return;

    await prisma.savedWord.create({
        data: {
            word,
            userId: session.user.email,
        },
    });
}