import './globals.css';
import { auth, signIn, signOut } from '@/auth';

export const metadata = {
  title: 'Dictionary App',
  description: 'Search word definitions',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white border-b px-8 py-4 flex justify-between items-center" >
          <a href="/" className="font-bold text-xl">📖 Dictionary</a>
          <div className="flex items-center gap-4">
            {session && (
              <a href="/saved" className="text-blue-500 hover:underline">
                Saved Words
              </a>
            )}
            {session ? (
              <form action={async () => {
                "use server";
                await signOut();
              }}>
                <span className="mr-4 text-gray-600">
                  {session.user?.name}
                </span>
                <button type="submit" className="bg-red-500 text-white px-4 py-1 rounded">
                  Sign Out
                </button>
              </form>
            ) : (
              <form action={async () => {
                "use server";
                await signIn("github");
              }}>
                <button type="submit" className="bg-gray-800 text-white px-4 py-1 rounded">
                  Sign in with GitHub
                </button>
              </form>
            )}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}