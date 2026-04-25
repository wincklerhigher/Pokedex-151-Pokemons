import { Link } from 'react-router-dom';
import TypeBadge from './TypeBadge';

export default function PokemonCard({ pokemon }) {
  return (
    <Link 
      to={`/pokemon/${pokemon.id}`}
      className="block bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200"
    >
      <div className="flex flex-col items-center">
        <span className="text-xs font-bold text-gray-300 mb-1">#{pokemon.number}</span>
        <img 
          src={pokemon.photo} 
          alt={pokemon.name}
          className="w-28 h-28 object-contain mb-2"
        />
        <h3 className="text-base font-bold text-gray-800 capitalize tracking-tight">
          {pokemon.name}
        </h3>
        <div className="flex gap-1 mt-2">
          {pokemon.types.map(type => (
            <TypeBadge key={type} type={type} size="sm" />
          ))}
        </div>
      </div>
    </Link>
  );
}