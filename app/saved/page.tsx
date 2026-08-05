import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { prisma } from '../../lib/prisma';
import Link from 'next/link';

export default async function SavedPage() {
    const session = await auth();

    if (!session) {
        redirect('/');
    }

    const savedWords = await prisma.savedWord.findMany({
        where: {
            userId: session.user?.email as string,
        },
        orderBy: {
            createdAt: 'desc',
        },
    });

    return (
        <div className="max-w-2xl mx-auto p-8">
            <h1 className="text-3xl font-bold mb-6">Saved Words</h1>
            {savedWords.length === 0 ? (
                <p className="text-gray-500">No saved words yet.</p>
            ) : (
                <div>
                    {savedWords.map(saved => (
                        <div key={saved.id} className="flex justify-between items-center p-4 bg-white border rounded-lg mb-3">
                            <Link href={`/word/${saved.word}`} className="text-blue-500 hover:underline text-lg">
                                {saved.word}
                            </Link>
                            <p className="text-gray-400 text-sm">
                                {new Date(saved.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}