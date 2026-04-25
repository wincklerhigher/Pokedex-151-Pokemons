import { useState, useEffect, useMemo } from 'react';
import { getPokemons } from '../services/pokeApi';
import PokemonCard from '../components/PokemonCard';

export default function HomePage() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadInitial();
  }, []);

  async function loadInitial() {
    setLoading(true);
    try {
      const data = await getPokemons(0, 151);
      setPokemons(data);
    } catch (error) {
      console.error('Failed to load pokemons:', error);
    }
    setLoading(false);
  }

  const filteredPokemons = useMemo(() => {
    if (!search.trim()) return pokemons;
    return pokemons.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [pokemons, search]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Pokédex</h1>
        <p className="text-sm text-gray-500 mt-1">151 Pokémons</p>
      </div>
      
      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all shadow-sm"
        />
      </div>
      
      {/* Grid */}
      {loading ? (
        <div className="text-center py-16 text-gray-400">Loading...</div>
      ) : filteredPokemons.length === 0 ? (
        <div className="text-center py-16 text-gray-400">No Pokémon found</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {filteredPokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
}