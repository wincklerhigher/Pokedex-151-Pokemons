import { useState, useEffect } from 'react';
import { getAbilityDetails } from '../services/pokeApi';

export default function AbilitiesSection({ abilities }) {
  const [expanded, setExpanded] = useState(false);
  const [abilityDetails, setAbilityDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAbilities();
  }, [abilities]);

  async function loadAbilities() {
    setLoading(true);
    try {
      const details = await Promise.all(
        abilities.map(async (a) => {
          const detail = await getAbilityDetails(a.ability.name);
          return { name: a.ability.name, isHidden: a.is_hidden, ...detail };
        })
      );
      setAbilityDetails(details);
    } catch (error) {
      console.error('Failed to load abilities:', error);
    }
    setLoading(false);
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-xs font-bold text-gray-300 uppercase tracking-widest">
          Abilities
        </span>
        <span className={`text-gray-400 text-lg transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-3">
          {loading ? (
            <div className="text-sm text-gray-400">Carregando...</div>
          ) : (
            abilityDetails.map((ability, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-800 capitalize">
                    {ability.name.replace(/-/g, ' ')}
                  </span>
                  {ability.isHidden && (
                    <span className="text-[10px] font-medium text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">
                      Oculta
                    </span>
                  )}
                </div>
                {ability.description && (
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {ability.description}
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}