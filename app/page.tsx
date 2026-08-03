import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';

export default function Home() {
  return (
    <div>
      <h1>Dictionary</h1>
      <SearchBar />
      <SearchHistory />
    </div>
  );
}