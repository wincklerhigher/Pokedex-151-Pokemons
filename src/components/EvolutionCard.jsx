import { Link } from 'react-router-dom';
import { getPokemonById } from '../services/pokeApi';
import { useState, useEffect } from 'react';

function EvolutionItem({ name, condition, isCurrent, pokemon }) {
  const content = (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-xl ${isCurrent ? 'bg-blue-50 border border-blue-100' : 'bg-gray-50'}`}>
      {pokemon && (
        <img 
          src={pokemon.photo} 
          alt={name || pokemon.name}
          className="w-8 h-8 object-contain"
        />
      )}
      <div className="flex-1 min-w-0">
        <span className="text-sm font-semibold text-gray-800 capitalize truncate block">{name || pokemon?.name}</span>
        {condition && (
          <span className="text-xs text-gray-400 block">{condition}</span>
        )}
      </div>
      {isCurrent && (
        <span className="text-xs font-bold text-blue-500">Now</span>
      )}
    </div>
  );

  if (isCurrent || !name) return content;

  return (
    <Link to={`/pokemon/${pokemon?.id || name}`} className="block">
      {content}
    </Link>
  );
}

export default function EvolutionCard({ currentName, evolutions, currentPokemon }) {
  if (!evolutions.length || evolutions[0].isFinal) {
    return (
      <>
        <h2 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3">Evolution</h2>
        <p className="text-sm text-gray-400">Final form</p>
      </>
    );
  }

  const hasEvolution = evolutions.some(e => e.next && !e.isFinal);

  if (!hasEvolution) {
    return (
      <>
        <h2 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3">Evolution</h2>
        <p className="text-sm text-gray-400">Final form</p>
      </>
    );
  }

  return (
    <>
      <h2 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3">Evolution</h2>
      <div className="space-y-2">
        {currentPokemon && (
          <EvolutionItem 
            name={currentName}
            isCurrent={true}
            pokemon={currentPokemon}
          />
        )}
        {evolutions.map((evo, i) => (
          <EvolutionItem 
            key={i}
            name={evo.next}
            condition={evo.condition}
          />
        ))}
      </div>
    </>
  );
}