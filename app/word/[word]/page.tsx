import Link from 'next/link';
import { saveWord } from '../../actions/saveWord';

type Props = {
    params: Promise<{ word: string }>;
};

export default async function WordPage({ params }: Props) {
    const { word } = await params;

    const res = await fetch(`http://localhost:3000/api/word/${word}`);
    
    if (!res.ok) {
        return (
        <>
            <p>Word "{word}" not found.</p>
            <Link href='/'>Back to Home</Link>
        </>
        
        )
    }

    const data = await res.json();
    const entry = data[0];

    return(
        <div>
            <h1>{entry.word}</h1>
            <p>{entry.meanings[0].definitions[0].definition}</p>

            <form action={saveWord}>
                <input type="hidden" name="word" value={entry.word} />
                <button type="submit">Save Word</button>
            </form>
            <Link href='/'>Back to Home</Link>
        </div>
    )
}