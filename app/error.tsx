"use client"; // error files is client compoents

export default function Error({ error }: { error: Error }) {
    return <p>Something went wrong: {error.message}</p>;
}