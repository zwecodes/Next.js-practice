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
            <h3>Recent Searches</h3>
            {history.length === 0 ? (
                <p>No recent searches</p>
            ) : (
                <ul>
                    {history.map((word, index) => (
                        <li key={index}>
                            <Link href={`/word/${word}`}>{word}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}