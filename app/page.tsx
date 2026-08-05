import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Dictionary</h1>
      <SearchBar />
      <SearchHistory />
    </div>
  );
}