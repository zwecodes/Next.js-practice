"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SearchHistory() {
    const [history, setHistory] = useState<string[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('searchHistory');
        if (saved) setHistory(JSON.parse(saved));
    }, []);

    return (
        <div>
            <h3 className="text-lg font-semibold mb-3">Recent Searches</h3>
            {history.length === 0 ? (
                <p className="text-gray-400">No recent searches</p>
            ) : (
                <div>
                    {history.map((word, index) => (
                        <Link
                            key={index}
                            href={`/word/${word}`}
                            className="bg-white border rounded-full px-4 py-1 text-sm hover:bg-blue-50 hover:border-blue-300"
                        >
                        {word}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}