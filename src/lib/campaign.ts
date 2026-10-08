export const VIP_URL = 'https://meugrupo.vip/c/a8a40026-0750-4228-8136-c1c3850849fb';
export const EVENT_START = Date.parse('2026-11-06T00:00:00-03:00');
export const EVENT_END = Date.parse('2026-11-09T00:00:00-03:00');

export function getEventStatus(now: number) {
  if (now >= EVENT_END) return 'ended';
  if (now >= EVENT_START) return 'live';
  return 'upcoming';
}

export const faqs = [
  ['O que é a BLACK PAU BRASIL?', 'O maior evento do ano na Pau Brasil, com 50% OFF em toda a loja de móveis premium em madeira definitiva a pronta-entrega.'],
  ['Onde acontece o evento?', 'Na loja e pátio de Mairinque - SP. Na Rod. Castelo Branco, Km 65 – Mairinque-SP, sentido interior, a 2 minutos do Catarina Fashion Outlet.'],
  ['Posso levar na hora?', 'Sim! Temos mais de 1.000 peças de showroom e pátio em pronta-entrega.'],
  ['O desconto de 50% é para toda a loja?', 'Sim! Todo o estoque de pátio e showroom estará com 50% OFF durante os 3 dias de evento.'],
  ['Quais são as formas de pagamento?', 'Cartão de crédito, transferência bancária e condições especiais à vista.'],
  ['A entrega é garantida antes do fim do ano?', 'Sim. A Pau Brasil possui frota e equipe própria para agendar e realizar a entrega e montagem perfeita a tempo das festas.'],
] as const;

export const differentials = [
  'Madeira 100% constituída de origem certificada',
  'Acabamento artesanal, com personalidade única em cada peça',
  'Consultoria personalizada de atendimento',
  'Entrega própria, rápida e cuidadosa para o fim do ano',
  'Mais de 1.000 peças em estoque à pronta-entrega com 50% OFF',
] as const;

export const testimonials = [
  { name: 'Carlos', location: 'Alphaville-SP', quote: 'A Pau Brasil é confiança. Comprei uma mesa de demolição linda, baita mesa e eles entregaram antes do prazo..' },
  { name: 'Patrícia', location: 'Itu-SP', quote: 'Comprei um conjunto de dormentes e a entrega foi super rápida. Atendimento nota 10!' },
] as const;