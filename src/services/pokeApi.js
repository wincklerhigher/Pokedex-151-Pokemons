const POKEAPI_BASE = 'https://pokeapi.co/api/v2';

export const TYPE_COLORS = {
  normal: { bg: '#f0f0f0', text: '#666' },
  fire: { bg: '#fff0e0', text: '#b85a00' },
  water: { bg: '#e0f0ff', text: '#1e5bb8' },
  electric: { bg: '#fff8c4', text: '#8a6000' },
  grass: { bg: '#d4f0d4', text: '#2a6a2a' },
  ice: { bg: '#d4f5f5', text: '#1a7a8a' },
  fighting: { bg: '#ffe0e0', text: '#a02020' },
  poison: { bg: '#f0d4ff', text: '#6a2a9a' },
  ground: { bg: '#ffe8c4', text: '#8a6000' },
  flying: { bg: '#e8d4ff', text: '#5a2a9a' },
  psychic: { bg: '#ffd4f0', text: '#a0206a' },
  bug: { bg: '#e4f8c4', text: '#4a7000' },
  rock: { bg: '#f8f0c4', text: '#7a5800' },
  ghost: { bg: '#e4e0f8', text: '#3a3a8a' },
  dragon: { bg: '#e8d4ff', text: '#5a1aa0' },
  dark: { bg: '#e8e0d8', text: '#4a3a2a' },
  steel: { bg: '#e0e4f0', text: '#3a4a8a' },
  fairy: { bg: '#f8d4e8', text: '#8a2a6a' },
};

export const STAT_COLORS = {
  hp: 'bg-gradient-to-r from-red-500 to-red-400',
  attack: 'bg-gradient-to-r from-orange-500 to-orange-400',
  defense: 'bg-gradient-to-r from-green-500 to-green-400',
  'special-attack': 'bg-gradient-to-r from-purple-500 to-purple-400',
  'special-defense': 'bg-gradient-to-r from-cyan-500 to-cyan-400',
  speed: 'bg-gradient-to-r from-yellow-500 to-yellow-400',
};

export const ABILITY_TRANSLATIONS = {
  // Gen 1
  overgrow: { name: 'Herbicultura', description: 'Aumenta poder de movimentos Planta quando PS está baixo.' },
  chlorophyll: { name: 'Clorofila', description: 'Aumenta Velocidade durante sol forte.' },
  blaze: { name: 'Chama', description: 'Aumenta poder de movimentos Fogo quando PS está baixo.' },
  flashfire: { name: 'Fogo Interior', description: 'Imune a Fogo. Aumenta poder após ser atingido.' },
  torrent: { name: 'Torrente', description: 'Aumenta poder de movimentos Água quando PS está baixo.' },
  tackle: { name: 'Colisão', description: 'Movimento corpo a corpo básico.' },
  bite: { name: 'Mordida', description: 'Pode causar medo.' },
  growl: { name: 'Rosnar', description: 'Reduz Ataque do oponente.' },
  leer: { name: 'Olhar', description: 'Reduz Defesa do oponente.' },
  withdraw: { name: 'Concha', description: 'Aumenta própria Defesa.' },
  hazard: { name: 'Perigo', description: 'Cria armadilhas no campo.' },
  ripple: { name: 'Onda', description: 'Move efeitos.' },
  // Gen 1 abilities
  pressure: { name: 'Pressão', description: 'Oponente gasta 1 PP a mais por movimento.' },
  run_away: { name: 'Fuga', description: 'Permite fugir de Pokemon selvagens.' },
  keen_eye: { name: 'Olho Afiado', description: 'Impede redução de precisão.' },
  intimidate: { name: 'Intimidação', description: 'Baixa Ataque do oponente.' },
  trace: { name: 'Pegada', description: 'Copia Habilidade do oponente.' },
  pure_power: { name: 'Força Pura', description: 'Dobra Ataque.' },
  speed_boost: { name: 'Aumento de Velocidade', description: 'Aumenta Velocidade a cada turno.' },
  battle_armor: { name: 'Armadura de Batalha', description: 'Impede ataques críticos.' },
  sturdy: { name: 'Robustez', description: 'Imune a OHKO. Sobrevive com 1 PS.' },
  damp: { name: 'Úmido', description: 'Evita auto-destruição.' },
  limber: { name: 'Flexibilidade', description: 'Impede Paralisia.' },
  synchronize: { name: 'Sincronia', description: 'Transmite STATUS para oponente.' },
  clear_body: { name: 'Corpo Claro', description: 'Impede redução de atributos.' },
  natural_cure: { name: 'Cura Natural', description: 'Cura STATUS ao trocar.' },
  levitate: { name: 'Levitação', description: 'Imune a movimentos Terra.' },
  guts: { name: 'Coragem', description: 'Aumenta Ataque quando com STATUS.' },
  hustle: { name: 'Esforço', description: 'Aumenta Ataque mas reduz precisão.' },
  cute_charm: { name: 'Charme', description: 'Pode fazer oponente se apaixonar.' },
  huge_power: { name: 'Poder Gigante', description: 'Dobra Ataque.' },
  // Gen 2
  static: { name: 'Eletricidade Estática', description: '30% de chance de Paralisar contato.' },
  volt_absorb: { name: 'Absorção de Raio', description: 'Cura ao ser atingido por Elétrico.' },
  soundproof: { name: 'Prova de Som', description: 'Imune a movimentos SONOROS.' },
  own_tempo: { name: 'Tempo Próprio', description: 'Impede Confusão.' },
  rainbow: { name: 'Arco-íris', description: 'Poder extra em arco-íris.' },
  // Gen 3
  compound_eyes: { name: 'Olhos Compostos', description: 'Aumenta precisão em 30%.' },
  iron_fist: { name: 'Punho de Ferro', description: 'Aumenta poder de Golpes.' },
  aftermath: { name: 'Explosão', description: 'Causa dano por contato.' },
  effect_spore: { name: 'Esporo', description: 'Pode causar Paralisia/Sono/Veneno.' },
  pressure: { name: 'Pressão', description: 'Oponente gasta mais PP.' },
  slow_start: { name: 'Início Lento', description: 'Metade da Velocidade temporariamente.' },
  scrape: { name: 'Arrastar', description: 'Recua ao ser atingido.' },
  run_up: { name: 'Correr', description: 'Corre para baixo.' },
  // Gen 4
 download: { name: 'Download', description: 'Aumenta Ataque conforme oponente.' },
  analyze: { name: 'Analisar', description: 'Aumenta poder do último movimento.' },
  technician: { name: 'Técnico', description: 'Aumenta poder de movimentos fracos.' },
  infuriating: { name: 'Enfurecer', description: 'Aumenta Ataque quando enfurecido.' },
  // Gen 5
  unburden: { name: 'Descarregar', description: 'Dobra Velocidade ao consumir item.' },
  skill_swap: { name: 'Troca de Habilidade', description: 'Troca Habilidades.' },
  regenerator: { name: 'Regenerador', description: 'Cura 1/3 ao sair.' },
  reckless: { name: 'Aventureiro', description: 'Aumenta poder de movimentos com recoil.' },
  mold_breaker: { name: 'Quebrador de Molde', description: 'Ignora habilidades do oponente.' },
  adapta: { name: 'Adaptação', description: 'Muda o tipo para o primeiro movimento.' },
  // Gen 6
  mega_launcher: { name: 'Mega Atirador', description: 'Aumenta poder de ataques de impulso.' },
  prankster: { name: 'Malandro', description: 'Movimentos de status vão primeiro.' },
  defender: { name: 'Defensor', description: 'Imune a reduções de STATUS.' },
  sweet_veil: { name: 'Doce Cobertura', description: 'Impede sono e congelamento.' },
  // Gen 7
beast_boost: { name: 'Impulso Bestial', description: 'Aumenta atributo mais alto após KO.' },
  // Gen 8
 gorizontal: { name: 'Golpe Horizontal', description: 'Aumenta poder de movimentos laterais.' },
  // Gen 9
  teraform: { name: 'Terraform', description: 'Transforma o terreno.' },
  // Common abilities missing
  toxic_boost: { name: 'Impulso Tóxico', description: 'Aumenta poder quando envenenado.' },
  quick_feet: { name: 'Pés Rápidos', description: 'Aumenta Velocidade quando com STATUS.' },
  magic_guard: { name: 'Guarda Mágica', description: 'Não recebe dano de movimentos.' },
  analytic: { name: 'Análise', description: 'Aumenta poder do último movimento.' },
 Contrary: { name: 'Contrário', description: 'Inverte mudanças de atributos.' },
  unnerve: { name: 'Nervoso', description: 'Impede oponente de comer.' },
  infiltrator: { name: 'Infiltrado', description: 'Passa por barreiras.' },
  mischievous: { name: 'Malicioso', description: 'Copia mudança de STATUS do oponente.' },
  herb_recovery: { name: 'Recuperação de Erva', description: 'Cura ao usar movimento de grama.' },
 vivillon: { name: 'Vivillon', description: 'Muda padrão conforme região.' },
  fairy_aura: { name: 'Aura Fada', description: 'Aumenta poder de Fadas.' },
  aura_reversed: { name: 'Aura Invertida', description: 'Reduz poder de Fadas.' },
  pyromancy: { name: 'Piromancia', description: 'Aumenta Ataque Especial em sol forte.' },
  // More common ones
  shield: { name: 'Escudo', description: 'Imune ao primeiro golpe.' },
stance: { name: 'Postura', description: 'Muda forma em batalha.' },
  // Gen 8
  guardian: { name: 'Guardião', description: 'Protege aliados.' },
  commander: { name: 'Comandante', description: 'Ordena Dondozo.' },
  mycelium: { name: 'Micélio', description: 'Reduz Velocidade mas garante funcionamento.' },
  pinpoint: { name: 'Precisão', description: 'Move críticos garantidos.' },
  defiant: { name: 'Desafiante', description: 'Aumenta Ataque quando atributos baixam.' },
  cloud_nine: { name: 'Nuvem Nove', description: 'Remove efeitos climáticos.' },
 aerilate: { name: 'Aerilate', description: 'Moves normais viram Voador.' },
  galize: { name: 'Galize', description: 'Moves normais viram Lutador.' },
parental_bond: { name: 'Vínculo Parental', description: 'Permite atacar duas vezes.' },
  // Gen 1 extra
  early_bird: { name: 'Pássaro Cedo', description: 'Dorme a metade do tempo.' },
  revenge: { name: 'Revanche', description: 'Aumenta poder se atingido primeiro.' },
  forecast: { name: 'Previsão', description: 'Muda tipo conforme clima.' },
  drought: { name: 'Seca', description: 'Invoca sol forte ao entrar.' },
  drizzle: { name: 'Chuva', description: 'Invoca chuva ao entrar.' },
  snow_warning: { name: 'Aviso de Neve', description: 'Invoca tempestade de neve.' },
  // Gen 2 extra
  marvel_scale: { name: 'Escama Marvel', description: 'Aumenta Defesa quando com STATUS.' },
  mystic: { name: 'Místico', description: 'Move especiais aumentam poder.' },
  // Gen 3 extra
  moxie: { name: 'Coragem', description: 'Aumenta Ataque após KO.' },
  hero: { name: 'Herói', description: 'Aumenta poder em Dupla.' },
  hydration: { name: 'Hidratação', description: 'Cura STATUS na chuva.' },
  // Gen 4 extra
  work_up: { name: 'Fortalecer', description: 'Aumenta Ataque e Ataque Especial.' },
  moody: { name: 'Irritado', description: 'oscila atributos.' },
  // Gen 5 extra
  frisk: { name: 'Bisbilhotar', description: 'Pode ver item do oponente.' },
  clumsy: { name: 'Desajeitado', description: 'Reduz precisão de itens.' },
  // Gen 6 extra
  photosynthesis: { name: 'Fotossíntese', description: 'Cura na luz solar.' },
  // Gen 7 extra
  berk: { name: 'Imprudente', description: 'Reduz precisão do oponente.' },
  schooling: { name: 'Ensinar', description: 'Unidos aumentam poder.' },
 生物学: { name: 'Biologia', description: 'aumenta poder quando em campo.' },
  // Gen 8 extra
  scorch: { name: 'Chamuscar', description: 'Causa queimadura em contato.' },
  cotton: { name: 'Algodão', description: 'Reduz dano recebido.' },
  steam_engine: { name: 'Motor a Vapor', description: 'Dobra Velocidade na chuva/sol.' },
  // Gen 9 extra
  poison_puppeteer: { name: 'Marionete Venenosa', description: 'Envenena quem toca.' },
  supreme_overlord: { name: 'Senhor Supremo', description: 'Aumenta poder após KO.' },
 protosynthesis: { name: 'Protossíntese', description: 'Aumenta Ataque no sol.' },
  quark_drive: { name: 'Impulso de Quark', description: 'Aumenta Ataque Especial no sol.' },
  had_hole: { name: 'Buraco', description: 'evita movimentos.' },
  // Add more missing
  light_absolute: { name: 'Luz Absoluta', description: 'Move podem ser críticos garantidos.' },
  s_yrenable: { name: 'Silenciar', description: 'Silencia oponente.' },
  libero: { name: 'Libero', description: 'Muda tipo quando usa move.' },
  ball_fetch: { name: 'Buscar Bola', description: 'Busca Poké Balls.' },
  anti_social: { name: 'Anti Social', description: 'evita armadilhas.' },
  mirror_armor: { name: 'Armadura Espelho', description: 'Reflete reduções de STATUS.' },
  rude_thing: { name: 'Coisas', description: 'Aumenta atributos.' },
  greed: { name: 'Ganância', description: 'Roubaアイテム.' },
  // Rattata abilities
  guts: { name: 'Coragem', description: 'Aumenta Ataque quando com STATUS.' },
  reckless: { name: 'Aventureiro', description: 'Aumenta poder com recoil.' },
  fast_heels: { name: 'Calcanhares Rápidos', description: 'Dobra Velocidade ao trocar.' },
  glide: { name: 'Planeio', description: 'Desce do alto livre.' },
  // Pikachu/Raichu abilities
  lightning_rod: { name: 'Para-raios', description: 'Absorve Elétrico. Aumenta Ataque Especial.' },
  magnet_rise: { name: 'Levitação Magnética', description: 'Fica imune a Terra temporariamente.' },
  // Butterfree abilities
  compound_eyes: { name: 'Olhos Compostos', description: 'Aumenta precisão.' },
  tinsel: { name: 'Brilho', description: 'Aumenta poder quando com STATUS.' },
  // Weedle/Kakuna
  shield: { name: 'Escudo', description: 'Imune a primeiro golpe.' },
  shed_skin: { name: 'Pele Trocada', description: '33% de cura STATUS.' },
  // Caterpie
 r_att: { name: 'Olhar Atento', description: 'impede evasão.' },
  // Bellsprout
  chlorophyll: { name: 'Clorofila', description: 'Velocidade dobra no sol.' },
  // Voltorb
  soundproof: { name: 'Prova de Som', description: 'Imune a som.' },
  after_mirror: { name: 'Espelho', description: 'Copia STATUS.' },
  // Magnemite
  sturdy: { name: 'Robustez', description: 'Imune a OHKO.' },
  analirty: { name: 'Análise', description: 'Move último aumenta poder.' },
  // Farfetchd
  defy_weather: { name: 'Desafiar Clima', description: 'Ignora penalidades de clima.' },
  // Grimer/Muk
  stickiness: { name: 'Pegajosidade', description: 'Impede fuga.' },
  power_of_alchemy: { name: 'Poder de Alquimia', description: 'Copia habilidade do aliado.' },
  // Gastly/Haunter/Gengar
  levitate: { name: 'Levitação', description: 'Imune a Terra.' },
  cursed_body: { name: 'Corpo Amaldiçoado', description: 'Pode congelar movimento.' },
  // Drowzee
  fore_mation: { name: 'Informação', description: 'impede cura STATUS.' },
  inner_focus: { name: 'Foco Interior', description: 'impede recuo.' },
  // Krabby
  hyper_cutter: { name: 'Cortador', description: 'impede redução de Ataque.' },
  shell_armor: { name: 'Escudo', description: 'Imune a crítico.' },
  // Exeggcute
  chlorophyll: { name: 'Clorofila', description: 'Dobra Velocidade no sol.' },
  // Cubone
  rock_head: { name: 'Cabeça de Rocha', description: 'Impede Recoil.' },
  lightning_rod: { name: 'Para-raios', description: 'Absorve Elétrico.' },
  // Hitmonlee
  reckless: { name: 'Aventureiro', description: 'Move com Recoil têm poder.' },
  unburden: { name: 'Descarregar', description: 'Velocidade dobra ao usar item.' },
  // Hitmonchan
  iron_fist: { name: 'Punho de Ferro', description: 'Aumenta poder de Golpes.' },
  // Lickitung
  own_tempo: { name: 'Tempo Próprio', description: 'Impede Confusão.' },
  // Chansey
  healer: { name: 'Curandeiro', description: 'Cura aliados.' },
  natural_cure: { name: 'Cura Natural', description: 'Cura STATUS ao trocar.' },
  // Tangela
  regen: { name: 'Regenerar', description: 'Cura ao trocar.' },
  // Kangaskhan
  early_bird: { name: 'Pássaro Cedo', description: 'acorda rápido.' },
  parental_bond: { name: 'Vínculo Parental', description: 'Move twice.' },
  // Horsea
  swift_swim: { name: 'Nado Rápido', description: 'Velocidade dobra na chuva.' },
  sniper: { name: 'Atirador', description: 'Críticos aumentam.' },
  // Seadra
  poison_point: { name: 'Ponto Venenoso', description: 'Pode envenenar contato.' },
 // Kingdra
  damp: { name: 'Úmido', description: 'Evita explosão.' },
  sheen: { name: 'Brilho', description: 'Move têm poder.' },
  // Goldeen
  speed_boost: { name: 'Aumento de Velocidade', description: 'Velocidade aumenta turn.' },
  // Staryu
  illuminate: { name: 'Iluminar', description: 'Encontra Pokemon.' },
  natural_cure: { name: 'Cura Natural', description: 'Cura STATUS.' },
};

const cache = {};

async function fetchPokemonDetail(pokemon) {
  const response = await fetch(pokemon.url || `${POKEAPI_BASE}/pokemon/${pokemon}`);
  if (!response.ok) throw new Error('Failed to fetch');
  const data = await response.json();
  return {
    id: data.id,
    number: String(data.id).padStart(3, '0'),
    name: data.name,
    types: data.types.map(t => t.type.name),
    type: data.types[0].type.name,
    stats: data.stats,
    abilities: data.abilities,
    photo: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
  };
}

export async function getPokemons(offset = 0, limit = 20) {
  const response = await fetch(`${POKEAPI_BASE}/pokemon?offset=${offset}&limit=${limit}`);
  const data = await response.json();
  const promises = data.results.map(fetchPokemonDetail);
  return Promise.all(promises);
}

export async function getPokemonById(id) {
  if (cache[id]) return cache[id];
  const pokemon = await fetchPokemonDetail(id);
  cache[id] = pokemon;
  return pokemon;
}

export async function getEvolutionData(pokemonName) {
  const speciesRes = await fetch(`${POKEAPI_BASE}/pokemon-species/${pokemonName.toLowerCase()}/`);
  if (!speciesRes.ok) throw new Error('Failed to fetch species');
  const speciesData = await speciesRes.json();
  
  const chainRes = await fetch(speciesData.evolution_chain.url);
  if (!chainRes.ok) throw new Error('Failed to fetch evolution chain');
  const chainData = await chainRes.json();

  function findLink(node, name) {
    if (node.species.name === name) return node;
    for (const next of node.evolves_to) {
      const found = findLink(next, name);
      if (found) return found;
    }
    return null;
  }

  const currentLink = findLink(chainData.chain, pokemonName.toLowerCase());
  const results = [];

  if (currentLink && currentLink.evolves_to?.length) {
    for (const next of currentLink.evolves_to) {
      const evDet = next.evolution_details?.[0];
      results.push({
        current: pokemonName.toLowerCase(),
        next: next.species.name,
        condition: getEvolutionCondition(evDet),
        isFinal: false,
      });
    }
  } else {
    results.push({
      current: pokemonName.toLowerCase(),
      next: null,
      condition: 'Final form',
      isFinal: true,
    });
  }

  return results;
}

function getEvolutionCondition(evDet) {
  if (!evDet) return '';
  const trigger = evDet.trigger?.name;
  if (trigger === 'level-up' && evDet.min_level) return `Lv. ${evDet.min_level}`;
  if (trigger === 'level-up' && evDet.min_happiness) return 'Friendship';
  if (trigger === 'level-up') return 'Level Up';
  if (trigger === 'use-item' && evDet.item) 
    return evDet.item.name.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase());
  if (trigger === 'trade') return 'Trade';
  return trigger || '';
}

export async function getAbilityDetails(abilityName) {
  const nameKey = abilityName.toLowerCase();
  const response = await fetch(`${POKEAPI_BASE}/ability/${nameKey}/`);
  if (!response.ok) return null;
  const data = await response.json();
  
  const translation = ABILITY_TRANSLATIONS[nameKey];
  if (translation) {
    return {
      name: translation.name,
      description: translation.description,
      isHidden: data.is_hidden,
    };
  }
  
  const enEffect = data.effect_entries.find(e => e.language.name === 'en');
  const enName = data.names.find(n => n.language.name === 'en');
  return {
    name: enName ? enName.name : data.name,
    description: enEffect ? enEffect.short_effect || enEffect.effect : null,
    isHidden: data.is_hidden,
  };
}