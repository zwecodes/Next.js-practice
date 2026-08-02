"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [input, setInput] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        if (input.trim() === '') return;
        router.push(`/word/${input}`);
        setInput('');
    };

    return (
        <div>
            <input
                value={input}
                onChange={e => setInput(e.target.value.toLowerCase())}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                placeholder = "Search a word...."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}