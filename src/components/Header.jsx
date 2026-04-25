import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div className="max-w-lg mx-auto px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/Pokedex-151-Pokemons/pokeball.svg" 
            alt="Pokéball" 
            className="w-7 h-7"
          />
          <span className="font-extrabold text-lg text-gray-900 tracking-tight">Pokédex</span>
        </Link>
      </div>
    </header>
  );
}