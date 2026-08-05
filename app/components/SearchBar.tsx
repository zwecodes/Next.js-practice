"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [input, setInput] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        if (input.trim() === '') return;
        
        const saved = localStorage.getItem('searchHistory');
        const history: string[] = saved ? JSON.parse(saved) : [];

        const updated = [input, ...history.filter(w => w !== input)].slice(0, 5);
        localStorage.setItem('searchHistory', JSON.stringify(updated));
        
        router.push(`/word/${input}`);
        setInput('');
    };

    return (
        <div className="flex gap-2 mb-8">
            <input
                value={input}
                onChange={e => setInput(e.target.value.toLowerCase())}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                placeholder = "Search a word...."
            />
            <button
                onClick={handleSearch}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
                Search
                </button>
        </div>
    )
}