import './globals.css';

export const metadata = {
  title: 'Next.js Practice',
  description: 'Learning Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white border-b px-8 py-4" >
          <a href="/" className="font-bold text-xl">📖 Dictionary</a>
        </nav>
        {children}
      </body>
    </html>
  );
}