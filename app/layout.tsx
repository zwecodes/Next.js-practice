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
      <body>
        <nav style={{ padding: '16px', borderBottom: '1px solid #ccc'}}>
          <a href="/" style={{ marginRight: '16px' }}>Home</a>
        </nav>
        {children}
      </body>
    </html>
  );
}