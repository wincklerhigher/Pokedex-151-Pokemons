import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPokemonById, getEvolutionData, STAT_COLORS } from '../services/pokeApi';
import { formatStatName } from '../utils/helpers';
import TypeBadge from '../components/TypeBadge';
import EvolutionCard from '../components/EvolutionCard';
import AbilitiesSection from '../components/AbilitiesSection';

export default function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [id]);

  async function loadData() {
    setLoading(true);
    try {
      const poke = await getPokemonById(id);
      setPokemon(poke);
      const evo = await getEvolutionData(poke.name);
      setEvolutions(evo);
    } catch (error) {
      console.error('Failed to load:', error);
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="max-w-md mx-auto px-6 py-12 text-center text-gray-400">
        Loading...
      </div>
    );
  }

  if (!pokemon) {
    return (
      <div className="max-w-md mx-auto px-6 py-12 text-center text-gray-400">
        Pokémon not found
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 py-6">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 mb-4 transition-colors"
      >
        <span>←</span>
        <span>Back</span>
      </Link>

      {/* Hero Section - Taller */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-3">
        <div className="flex items-center gap-6">
          <img 
            src={pokemon.photo} 
            alt={pokemon.name}
            className="w-32 h-32 object-contain"
          />
          <div className="flex-1 min-w-0">
            <span className="text-xs font-bold text-gray-300 block">#{pokemon.number}</span>
            <h1 className="text-2xl font-extrabold text-gray-900 capitalize tracking-tight truncate mt-1">
              {pokemon.name}
            </h1>
            <div className="flex gap-2 mt-3">
              {pokemon.types.map(type => (
                <TypeBadge key={type} type={type} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Card */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-3">
        <h2 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-4">Base Stats</h2>
        <div className="space-y-3">
          {pokemon.stats.map(stat => (
            <div key={stat.stat.name} className="flex items-center gap-3">
              <span className="text-xs font-semibold text-gray-500 capitalize w-20 text-right truncate">
                {formatStatName(stat.stat.name)}
              </span>
              <span className="text-sm font-bold text-gray-700 w-6">
                {stat.base_stat}
              </span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${STAT_COLORS[stat.stat.name] || 'bg-gray-300'}`}
                  style={{ width: `${Math.min(stat.base_stat, 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Abilities Section */}
      {pokemon.abilities && pokemon.abilities.length > 0 && (
        <div className="mb-3">
          <AbilitiesSection abilities={pokemon.abilities} />
        </div>
      )}

      {/* Evolution Card - Compact */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
        <EvolutionCard 
          currentId={pokemon.id} 
          currentName={pokemon.name}
          evolutions={evolutions}
          currentPokemon={pokemon}
        />
      </div>
    </div>
  );
}