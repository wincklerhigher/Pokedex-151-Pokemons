import { TYPE_COLORS } from '../services/pokeApi';

export default function TypeBadge({ type, size = 'md' }) {
  const colors = TYPE_COLORS[type] || { bg: '#f5f5f5', text: '#666' };
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs rounded' : 'px-3 py-1 text-sm rounded-lg';
  
  return (
    <span 
      className={`${sizeClasses} font-semibold capitalize tracking-tight`}
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      {type}
    </span>
  );
}