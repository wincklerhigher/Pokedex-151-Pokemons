export function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

export function formatStatName(name) {
  return name.replace(/-/g, ' ');
}

export function getPokemonNumber(id) {
  return String(id).padStart(3, '0');
}