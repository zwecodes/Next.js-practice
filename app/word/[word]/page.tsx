import Link from 'next/link';
import { saveWord } from '../../actions/saveWord';
import { auth } from '@/auth';

type Props = {
    params: Promise<{ word: string }>;
};

export default async function WordPage({ params }: Props) {
    const { word } = await params;
    const session = await auth();

    const res = await fetch(`http://localhost:3000/api/word/${word}`);
    
    if (!res.ok) {
        return (
            <div className="max-w-2xl mx-auto p-8">
                <Link href="/" className="text-blue-500 hover:underline">← Back</Link>
                <p className="mt-4 text-red-500">Word "{word}" not found.</p>
            </div>
        
        )
    }

    const data = await res.json();
    const entry = data[0];

    return(
        <div className="max-w-2xl mx-auto p-8">
            <Link href="/" className="text-blue-500 hover:underline">← Back</Link>

            <h1 className="text-4xl font-bold mt-4 mb-2">{entry.word}</h1>
            <p className="text-gray-500 mb-6">{entry.meanings[0].definitions[0].definition}</p>

            {entry.meanings.map((meaning: any, index: number) => (
                <div key={index} className="mb-6 p-4 bg-white rounded-lg border">
                    <h3 className="text-blue-500 font-semibold italic mb-2">
                        {meaning.partOfSpeech}
                    </h3>
                    <p>{meaning.definitions[0].definition}</p>
                    {meaning.definitions[0].example && (
                        <p className="text-gray-500 mt-2 italic">
                            "{meaning.definitions[0].example}"
                        </p>
                    )}
                </div>
            ))}
            
            {session ? (
                <form action={saveWord}>
                    <input type="hidden" name="word" value={entry.word} />
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                    >
                        Save Word
                    </button>
                </form>
            ) : (
                    <p className="text-gray-500">Sign in to save words</p>
            )}
        </div>
    )
}